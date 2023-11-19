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
                calendarData.forEach((calendarElement) => {
                        let calendarObject = {
                            nameGP: calendarElement.raceName,
                            circuitName: calendarElement.Circuit.circuitName,
                            nationality: calendarElement.Circuit.Location.country,
                            fullDateFirst: '',
                            fullDateRace: '',
                            fullDate2OrS: '',
                            fullDateQual: '',
                            fullDate3OrSprint: '',
                            sprintOrNot: ''
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
                        const timeFirst = calendarElement.FirstPractice.time.split(':')
                        let fullDateFirst = {
                            year: Number(dateFirst[0]),
                            month: Number(dateFirst[1]),
                            day: Number(dateFirst[2]),
                            hour: Number(timeFirst[0]),
                            min: Number(timeFirst[1])
                        }
                        const dateSecond = calendarElement.SecondPractice.date.split('-')
                        const timeSecond = calendarElement.SecondPractice.time.split(':')
                        let fullDateSecond = {
                            year: Number(dateSecond[0]),
                            month: Number(dateSecond[1]),
                            day: Number(dateSecond[2]),
                            hour: Number(timeSecond[0]),
                            min: Number(timeSecond[1])
                        }
                        const dateQual = calendarElement.Qualifying.date.split('-')
                        const timeQual = calendarElement.Qualifying.time.split(':')
                        let fullDateQual = {
                            year: Number(dateQual[0]),
                            month: Number(dateQual[1]),
                            day: Number(dateQual[2]),
                            hour: Number(timeQual[0]),
                            min: Number(timeQual[1])
                        }
                        let fullDate3orS;
                        if (calendarElement.ThirdPractice === undefined) {
                            const dateSprint = calendarElement.Sprint.date.split('-')
                            const timeSprint = calendarElement.Sprint.time.split(':')
                            calendarObject.sprintOrNot = 'sprint'
                            fullDate3orS = {
                                year: Number(dateSprint[0]),
                                month: Number(dateSprint[1]),
                                day: Number(dateSprint[2]),
                                hour: Number(timeSprint[0]),
                                min: Number(timeSprint[1])
                            }
                        } else {
                            const dateThird = calendarElement.ThirdPractice.date.split('-')
                            const timeThird = calendarElement.ThirdPractice.time.split(':')
                            fullDate3orS = {
                                year: Number(dateThird[0]),
                                month: Number(dateThird[1]),
                                day: Number(dateThird[2]),
                                hour: Number(timeThird[0]),
                                min: Number(timeThird[1])
                            }
                        }
                        const newDateRace = DateTime.local(fullDateRace.year, fullDateRace.month, fullDateRace.day, fullDateRace.hour, fullDateRace.min).plus({hours: 1})
                        calendarObject.fullDateRace = newDateRace.toFormat('T') + " - " + newDateRace.setLocale('fr').toFormat("dd LLL yyyy")
                        const newDateFirst = DateTime.local(fullDateFirst.year, fullDateFirst.month, fullDateFirst.day, fullDateFirst.hour, fullDateFirst.min).plus({hours: 1})
                        calendarObject.fullDateFirst = newDateFirst.toFormat('T') + " - " + newDateFirst.setLocale('fr').toFormat("dd LLL yyyy")
                        const newDateSecond = DateTime.local(fullDateSecond.year, fullDateSecond.month, fullDateSecond.day, fullDateSecond.hour, fullDateSecond.min).plus({hours: 1})
                        calendarObject.fullDate2OrS = newDateSecond.toFormat('T') + " - " + newDateSecond.setLocale('fr').toFormat("dd LLL yyyy")
                        const newDateQual = DateTime.local(fullDateQual.year, fullDateQual.month, fullDateQual.day, fullDateQual.hour, fullDateQual.min).plus({hours: 1})
                        calendarObject.fullDateQual = newDateQual.toFormat('T') + " - " + newDateQual.setLocale('fr').toFormat("dd LLL yyyy")
                        const newDate3orS = DateTime.local(fullDate3orS.year, fullDate3orS.month, fullDate3orS.day, fullDate3orS.hour, fullDate3orS.min).plus({hours: 1})
                        calendarObject.fullDate3OrSprint = newDate3orS.toFormat('T') + " - " + newDate3orS.setLocale('fr').toFormat("dd LLL yyyy")
                        calendarTab = [...calendarTab, calendarObject]
                    }
                )
            })
    }

</script>
<h1>Formule 1</h1>
<div class="centerTab">
    <CalendarTab {calendarTab}/>
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

    .centerTab {
        display: flex;
        flex-direction: column;
        align-items: start;
    }
</style>