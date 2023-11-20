<script>
    import CircuitButtons from "./CircuitButtons.svelte";
    import TypeRaceButton from "./typeRaceButton.svelte";
    import TabResults from "./TabResults.svelte";
    let circuit;
    let typeOfRace;
    let tabResults = [];
    let whatStyleRace;

    function takeResults() {
        fetch(`https://ergast.com/api/f1/current/${circuit}/${typeOfRace}.json`)
            .then(response => {
                return response.json();
            })
            .then(data => {
                tabResults = []
                if(data.MRData.RaceTable.Races.length === 0) {
                    alert('Aucun résulats ou sprint pour ce Grand Prix')
                } else if (typeOfRace === 'results') {
                    whatStyleRace = 'race'
                    const newData = data.MRData.RaceTable.Races[0].Results
                    newData.forEach((driverElement) => {
                        const driversInfos = {
                            place: driverElement.position,
                            fullName: driverElement.Driver.givenName+' '+driverElement.Driver.familyName,
                            constructor: driverElement.Constructor.name,
                            gridPlace: driverElement.grid,
                            numberLaps: driverElement.laps,
                            timeRace: '',
                            statusRace: driverElement.status,
                            pointsRace: driverElement.points,
                        }
                        if (driversInfos.statusRace === "Finished") {
                            driversInfos.timeRace = driverElement.Time.time
                        } else {
                            driversInfos.timeRace = '/'
                        }
                        tabResults = [...tabResults, driversInfos]
                    })
                } else if (typeOfRace === 'sprint') {
                    whatStyleRace = 'sprint'
                    const newData = data.MRData.RaceTable.Races[0].SprintResults
                    newData.forEach((driverElement) => {
                        const driversInfos = {
                            place: driverElement.position,
                            fullName: driverElement.Driver.givenName+' '+driverElement.Driver.familyName,
                            constructor: driverElement.Constructor.name,
                            gridPlace: driverElement.grid,
                            numberLaps: driverElement.laps,
                            timeRace: '',
                            statusRace: driverElement.status,
                            pointsRace: driverElement.points,
                        }
                        if (driversInfos.statusRace === "Finished") {
                            driversInfos.timeRace = driverElement.Time.time
                        } else {
                            driversInfos.timeRace = '/'
                        }
                        tabResults = [...tabResults, driversInfos]
                    })
                } else if (typeOfRace === 'qualifying') {
                    whatStyleRace = 'qualifying'
                    const newData = data.MRData.RaceTable.Races[0].QualifyingResults
                    newData.forEach((gridElement) => {
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
                        tabResults = [...tabResults, driverList]
                    })
                }
            })

    }
</script>
<div class="menuBar">
    <CircuitButtons bind:value={circuit}/>
    <TypeRaceButton bind:value={typeOfRace}/>
    <button type="button" class="send" on:click={takeResults}>Recherche</button>
</div>
<div class="tabCenter">
    <TabResults {tabResults} {whatStyleRace}/>
</div>
<style>
    .send {
        border: 2px solid white;
        background-color: black;
        color: white;
        font-family: "Poppins", sans-serif;
        font-size: 1rem;
        align-self: end;
    }

    .menuBar {
        display: flex;
        flex-direction: row;
        width: 100%;
        gap: 4rem;
        justify-content: center;
        margin-top: 2rem;
    }

    .tabCenter {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    @media screen and (max-width: 767px) {
        .tabCenter {
            display: flex;
            flex-direction: column;
            align-items: start;
            overflow: auto;
            margin-top: 1rem;
        }
        .menuBar {
            display: flex;
            flex-wrap: wrap;
            gap: 1rem;
        }
    }

    @media screen and (min-width: 768px) and (max-width: 1024px) {
       .tabCenter {
            display: flex;
            flex-direction: column;
            align-items: start;
            overflow: auto;
            margin: 2rem;
        }
        .menuBar {
            display: flex;
            flex-wrap: wrap;
            gap: 2rem;
        }
        .send {
            font-size: 1.5rem;
        }
    }
</style>