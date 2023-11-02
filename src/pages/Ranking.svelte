<script>
    import ButtonRanking from '../lib/ButtonRanking.svelte';
    import ConstructorTab from "../lib/ConstructorTab.svelte";
    import DriverTab from "../lib/DriverTab.svelte";
    import {onMount} from 'svelte';

    let bool = true;
    let color1;
    let color2;
    let newTab = [];
    let tabOfConstructors = [];

    onMount(() => {
        pilote()
    })

    function pilote() {
        newTab = []
        bool = true
        color1 = 'red'
        color2 = 'white'
        fetch('https://ergast.com/api/f1/current/driverStandings.json')
            .then(response => {
                return response.json();
            })
            .then(data => {
                const driver = data.MRData.StandingsTable.StandingsLists[0].DriverStandings
                driver.forEach((driverElement) => {
                    let newObjectDriver = {
                        positionNumber: driverElement.position,
                        fullname: driverElement.Driver.givenName + " " + driverElement.Driver.familyName,
                        constructorDriver: driverElement.Constructors[0].name,
                        nationalityCountry: driverElement.Driver.nationality,
                        winsNumber: driverElement.wins,
                        pointsNumber: driverElement.points
                    }
                    newTab = [...newTab, newObjectDriver]
                })
            })
    }

    function constructeur() {
        tabOfConstructors = []
        bool = false
        color1 = 'white'
        color2 = 'red'
        fetch('https://ergast.com/api/f1/current/constructorStandings.json')
            .then(response => {
                return response.json();
            })
            .then(data => {
                const constructor = data.MRData.StandingsTable.StandingsLists[0].ConstructorStandings
                constructor.forEach((constructorElement) => {
                    let newObjectConstructor = {
                        positionConstructor: constructorElement.position,
                        constructorName: constructorElement.Constructor.name,
                        constructorCountry: constructorElement.Constructor.nationality,
                        winsNum: constructorElement.wins,
                        pointsNum: constructorElement.points
                    }
                    tabOfConstructors = [...tabOfConstructors, newObjectConstructor]
                })
            })
    }

</script>

<h1>Formule 1</h1>
<div class="bothButtons">
    <ButtonRanking name="Pilotes" whatAction={pilote} colorBorder={color1}/>
    <ButtonRanking name="Constructeurs" whatAction={constructeur} colorBorder={color2}/>
</div>
<div class="theTab">
    {#if bool === true}
        <DriverTab {newTab}/>
    {:else}
        <ConstructorTab {tabOfConstructors}/>
    {/if}
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