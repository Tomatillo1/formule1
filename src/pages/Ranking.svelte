<script>
    import ButtonRanking from '../lib/ButtonRanking.svelte';
    import DriverTab from "../lib/DriverTab.svelte";
    import {onMount} from 'svelte';

    let color1;
    let color2;
    let newTab = [];

    onMount ( () => {
         pilote()
    })

    function pilote() {
        color1 = 'red'
        color2 = 'white'
        fetch('https://ergast.com/api/f1/current/driverStandings.json')
            .then(response => {
                return response.json();
            })
            .then(data => {
                const driver = data.MRData.StandingsTable.StandingsLists[0].DriverStandings
                driver.forEach((driverElement) => {
                    let newObject = {
                        positionNumber: driverElement.position,
                        fullname: driverElement.Driver.givenName + " " + driverElement.Driver.familyName,
                        constructorDriver: driverElement.Constructors[0].name,
                        nationalityCountry: driverElement.Driver.nationality,
                        winsNumber: driverElement.wins,
                        pointsNumber: driverElement.points
                    }
                    newTab.push(newObject)
                })
                window.localStorage.setItem('key', JSON.stringify(newTab))
            })
    }

    function constructor() {
        color1 = 'white'
        color2 = 'red'
    }

</script>

<h1>Formule 1</h1>
<div class="bothButtons">
    <ButtonRanking name="Pilotes" whatAction={pilote} colorBorder={color1}/>
    <ButtonRanking name="Constructeurs" whatAction={constructor} colorBorder={color2}/>
</div>
<div class="theTab">
    <DriverTab {newTab}/>
</div>
<style>
    @import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

    h1 {
        color: white;
        text-align: center;
        margin-bottom: 0;
        font-family: "Poppins", sans-serif;
        font-size: 2.5rem;
        outline: none;
    }

    .bothButtons {
        display: flex;
        flex-direction: row;
        justify-content: center;
        gap: 2rem;
        margin-top: 2rem;
    }

    .theTab {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
    }
</style>