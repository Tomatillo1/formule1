<script>
    import CalendarTab from "../lib/CalendarTab.svelte";
    import {onMount} from 'svelte';
    import {DateTime} from "luxon";

    let calendarTab = [];

    onMount(() => {
        calendar()
    })

    function calendar() {
        calendarTab = []
        fetch('https://ergast.com/api/f1/current.json')
            .then(response => {
                return response.json();
            })
            .then(data => {
                const calendarData = data.MRData.RaceTable.Races
                calendarData.forEach((calendarElement, index) => {
                        let calendarObject = {
                            city: calendarElement.Circuit.Location.locality,
                            nationality: calendarElement.Circuit.Location.country,
                            circuitId: calendarElement.Circuit.circuitId,
                            fullDate: '',
                            raceHour: '',
                            round: index + 1,
                        }
                        const dateRace = calendarElement.date.split('-')
                        const timeRace = calendarElement.time.split(':')
                        let fullDateRace = {
                            year: Number(dateRace[0]),
                            month: Number(dateRace[1]),
                            day: Number(dateRace[2]),
                            hour: Number(timeRace[0]),
                            min: Number(timeRace[1])
                        }
                        const dateFirst = calendarElement.FirstPractice.date.split('-')
                        let fullDateFirst = {
                            year: Number(dateFirst[0]),
                            month: Number(dateFirst[1]),
                            day: Number(dateFirst[2])
                        }
                        const newFirst = DateTime.local(fullDateFirst.year, fullDateFirst.month, fullDateFirst.day)
                        const newRace = DateTime.local(fullDateRace.year, fullDateRace.month, fullDateRace.day)
                        calendarObject.fullDate = newFirst.setLocale('fr').toFormat("dd LLL") + " - " + newRace.setLocale('fr').toFormat("dd LLL")
                        const newRaceHour = DateTime.local(fullDateRace.year, fullDateRace.month, fullDateRace.day, fullDateRace.hour, fullDateRace.min).plus({hours: 1})
                        calendarObject.raceHour = newRaceHour.toFormat('T')
                        calendarTab = [...calendarTab, calendarObject]
                    }
                )
            })
    }

</script>
<div class="backgroundSchedule">
    <div class="scheduleFilterBlack">
        <h1>Calendrier 2024</h1>
        <CalendarTab {calendarTab}/>
    </div>
</div>
<style>
    @import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

    h1 {
        color: white;
        text-align: center;
        margin: 0;
        padding-top: 2rem;
        font-family: "Poppins", sans-serif;
        font-size: 2.5rem;
        outline: none;
    }

    .backgroundSchedule {
        background-image: url("/dist/backgrounnd-schedule.jpg");
        background-position-y: bottom;
    }

    .scheduleFilterBlack {
        background-color: rgba(0,0,0,0.8);
    }
</style>