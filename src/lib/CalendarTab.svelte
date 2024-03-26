<script>
    export let calendarTab;

</script>

<div class="allDates">
    {#each calendarTab as {city, nationality, fullDate, raceHour, round, circuitId}}
        <div class="eachGP">
            <div class="round">
                <p class="whatRound">R{round}</p>
            </div>
            <div class="infosOfGP">
                <img class="flag" src="/dist/flags/{circuitId}.jpg">
                <div class="allDataGP">
                    <p class="dateWeekGP">{fullDate}</p>
                    <p class="nationality">{nationality}</p>
                    <p class="city">{city}</p>
                </div>
                <div class="hourGP">
                    <p class="GP">Heure du GP</p>
                    <p class="raceHour">{raceHour}</p>
                </div>
                <img class="circuit" src="/dist/circuits/{circuitId}.png">
            </div>
        </div>
    {/each}
</div>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

    .allDates {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        width: 100%;
        justify-content: center;
        gap: 2rem;
        padding: 3rem 0 2rem 0;
    }

    .eachGP {
        display: flex;
        flex-direction: row;
        width: 45%;
    }

    .round {
        display: flex;
        width: 100px;
        background: #C61910;
        align-items: center;
        justify-content: center;
        font-size: 2.5rem;
        border-radius: 10px 0 0 10px;
    }

    .whatRound {
        color: white;
        font-weight: bold;
        font-family: "Poppins", sans-serif;
        margin: 0;
    }

    .infosOfGP {
        display: flex;
        flex-direction: row;
        background: white;
        flex-grow: 1;
        align-items: center;
        gap: 1rem;
        padding: 0.5rem 0;
        border-radius: 0 10px 10px 0;
    }

    .flag {
        margin: 0 0 0 1rem;
        width: 100px;
        height: 60px;
        border: 1px solid black;
    }

    .circuit {
        margin: 0 1rem 0 0;
        width: 100px;
        height: 60px;
    }

    .allDataGP {
        display: flex;
        flex-direction: column;
        flex-grow: 1;
        border-right: 1px solid #C61910;

    }

    .hourGP {
        display: flex;
        flex-direction: column;
        flex-grow: 1;
    }

    .dateWeekGP, .nationality, .city, .raceHour, .GP {
        margin: 0;
        font-family: "Poppins", sans-serif;
        text-transform: uppercase;
    }

    .nationality {
        color: #C61910;
        font-weight: bold;
        font-size: 1.25rem;
    }

    .dateWeekGP, .raceHour {
        font-size: 0.75rem;
        font-style: italic;
    }

    .city, .GP {
        font-weight: bold;
        font-size: 1rem;
    }
</style>