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
                    const takeColor = tabOfColors.find(({name}) => name === driverElement.Constructors[0].constructorId)
                    let newObjectDriver = {
                        positionNumber: driverElement.position,
                        fullname: driverElement.Driver.givenName + " " + driverElement.Driver.familyName,
                        constructorDriver: driverElement.Constructors[0].constructorId,
                        pointsNumber: driverElement.points,
                        nameDriver: driverElement.Driver.givenName,
                        colorConstructor: takeColor.color
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
                    const takeColorConst = tabOfColors.find(({name}) => name === constructorElement.Constructor.constructorId,)
                    let newObjectConstructor = {
                        positionConstructor: constructorElement.position,
                        constructorName: constructorElement.Constructor.constructorId,
                        constructorName2: constructorElement.Constructor.name,
                        pointsNum: constructorElement.points,
                        colorConstructor: takeColorConst.color
                    }
                    tabOfConstructors = [...tabOfConstructors, newObjectConstructor]
                })
            })
    }

</script>
<div class="backgroundStanding">
    <div class="standingFilterBlack">
        <h1>Classement</h1>
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
    </div>
</div>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

    h1 {
        color: white;
        text-align: center;
        margin: 0;
        font-family: "Poppins", sans-serif;
        font-size: 2.5rem;
        outline: none;
        padding-top: 1rem ;
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
        padding: 2rem 0;
    }

    .backgroundStanding {
        background-image: url("/dist/background-standing.jpg");
        background-position-y: bottom;
    }

    .standingFilterBlack {
        background-color: rgba(0,0,0,0.6);
    }

</style>