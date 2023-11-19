<script>
    import {onMount} from 'svelte';
    import GridTab from "../lib/gridTab.svelte";
    import {DateTime} from "luxon";

    let lastGrid = {};
    let gridDateOrTime = {};
    let newDate;
    let tabGrid = [];

    onMount(() => {
        grid()
    })

    function grid() {
        tabGrid = []
        fetch('https://ergast.com/api/f1/current/last/qualifying.json')
            .then(response => {
                return response.json();
            })
            .then(data => {
                const gridValue = data.MRData.RaceTable.Races[0]
                const dateGrid = gridValue.date.split('-')
                const timeGrid = gridValue.time.split(':')
                gridDateOrTime = {
                    year: Number(dateGrid[0]),
                    month: Number(dateGrid[1]),
                    day: Number(dateGrid[2]),
                    hour: Number(timeGrid[0]),
                    min: Number(timeGrid[1])
                }
                lastGrid = {
                    nameOfGP: gridValue.raceName,
                    nameOfCircuit: gridValue.Circuit.circuitName,
                }
                gridValue.QualifyingResults.forEach((gridElement) => {
                    let driverList = {
                        positionNumber: gridElement.position,
                        fullName: gridElement.Driver.givenName + " " + gridElement.Driver.familyName,
                        constructorName: gridElement.Constructor.name,
                        country: gridElement.Driver.nationality,
                        QOne: gridElement.Q1,
                        QTwo: gridElement.Q2,
                        QThree: gridElement.Q3
                    }
                    if (driverList.QThree === undefined) {
                        driverList.QThree = '/'
                    }
                    if (driverList.QTwo === undefined) {
                        driverList.QTwo = '/'
                    }
                    if (driverList.QOne === "") {
                        driverList.QOne = '/'
                    }
                    tabGrid = [...tabGrid, driverList]
                })
                dateAndHour()
            })
    }

    function dateAndHour() {
        const newTimeGrid = DateTime.local(gridDateOrTime.year, gridDateOrTime.month, gridDateOrTime.day, gridDateOrTime.hour, gridDateOrTime.min).plus({hours: 1})
        newDate = newTimeGrid.toFormat('T') + " - " + newTimeGrid.setLocale('fr').toFormat("dd LLL yyyy")
    }
</script>

<h1>Formule 1</h1>
<div class="gridDiv">
    <h2>{lastGrid.nameOfGP}</h2>
    <h3>{lastGrid.nameOfCircuit}</h3>
    <h3>{newDate}</h3>
    <GridTab {tabGrid}/>
</div>
<style>
    @import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

    h1, h2, h3 {
        color: white;
        text-align: center;
        margin-bottom: 0;
        font-family: "Poppins", sans-serif;
        font-size: 2.5rem;
        outline: none;
    }

    h2 {
        margin-top: 1rem;
        font-size: 3rem;
    }

    h3 {
        margin: 0;
        font-size: 1.5rem;
        font-style: italic;
    }

    .gridDiv {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>