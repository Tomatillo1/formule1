<script>
    import {onMount} from 'svelte';
    import GridTab from "../lib/gridTab.svelte";
    import {DateTime} from "luxon";

    let lastGrid = {};
    let leftColumn= [];
    let rightColumn= [];

    let tabOfColors = [
        {name: 'red_bull', color:'#1c1e82' },
        {name: 'ferrari', color: '#FE0000' },
        {name: 'mercedes', color: '#00A09C' },
        {name: 'mclaren', color: '#FF7701' },
        {name: 'aston_martin', color: '#00594F' },
        {name: 'haas', color: '#000000' },
        {name: 'williams', color: '#272850' },
        {name: 'sauber', color: '#1DFC83' },
        {name: 'alpine', color: '#FA6DA8' },
        {name: 'rb', color: '#1534cc' }
    ]

    onMount(() => {
        grid()
    })

    function grid() {
        leftColumn = []
        rightColumn = []
        fetch('https://ergast.com/api/f1/current/last/qualifying.json')
            .then(response => {
                return response.json();
            })
            .then(data => {
                const gridValue = data.MRData.RaceTable.Races[0]
                lastGrid = gridValue.raceName
                gridValue.QualifyingResults.forEach((gridElement, index) => {
                    const takeColor = tabOfColors.find(({name}) => name === gridElement.Constructor.constructorId)
                    let driverList = {
                        positionNumber: gridElement.position,
                        fullName: gridElement.Driver.givenName + " " + gridElement.Driver.familyName,
                        constructorName: gridElement.Constructor.constructorId,
                        colorConstructor: takeColor.color,
                        nameDriver: gridElement.Driver.givenName
                    }

                    if (index % 2 === 0) leftColumn.push(driverList)
                    else rightColumn.push(driverList)
                })

                leftColumn = [...leftColumn]
                rightColumn = [...rightColumn]
                console.log(leftColumn)
            })
    }

</script>
<div class="backgroundGrid">
    <div class="gridFilterBlack">
        <h1>La grille de départ</h1>
        <h2>{lastGrid}</h2>
        <GridTab {leftColumn} {rightColumn}/>
    </div>
</div>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

    h1, h2 {
        color: white;
        text-align: center;
        margin: 0;
        font-family: "Poppins", sans-serif;
        font-size: 2.5rem;
        outline: none;
    }

    h2 {
        margin-top: 1rem;
        font-size: 1.5rem;
        font-style: italic;
    }

    h1 {
        padding-top: 2rem;
    }

    .backgroundGrid {
        background-image: url("/dist/background-grid.jpg");
        background-position-y: bottom;
    }

    .gridFilterBlack {
        background-color: rgba(0,0,0,0.6);
    }
</style>