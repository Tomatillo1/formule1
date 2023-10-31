<script>
    import {onMount} from 'svelte';
    import {DateTime} from "luxon";
    import TabNextGP from "../lib/TabNextGP.svelte";

    let trial2;
    let trial3;

    let nextGP = {};
    let dateCourse = {};
    let dateQualifying = {};
    let dateFirst = {};
    let dateSecond = {};
    let dateSprintOr3 = {};
    let newCourseDate;
    let newCourseTime;
    let newQualifyingDate;
    let newQualifyingTime;
    let newFirstDate;
    let newFirstTime;
    let newSecondDate;
    let newSecondTime;
    let newSprintOr3Date;
    let newSprintOr3Time;

    onMount(() => {
        whatNextGP()
    })

    function whatNextGP() {
        fetch('https://ergast.com/api/f1/current/next.json')
            .then(response => {
                return response.json();
            })
            .then(data => {
                const race = data.MRData.RaceTable.Races[0]
                const fullDateRace = race.date.split('-')
                const fullHourRace = race.time.split(':')
                const fullDateQualifying = race.Qualifying.date.split('-')
                const fullHourQualifying = race.Qualifying.time.split(':')
                const fullDateFirst = race.FirstPractice.date.split('-')
                const fullTimeFirst = race.FirstPractice.time.split(':')
                const fullDateSecond = race.SecondPractice.date.split('-')
                const fullTimeSecond = race.SecondPractice.time.split(':')
                let fullDateSprintOr3;
                let fullTimeSprintOr3;
                if (race.ThirdPractice === undefined) {
                    trial2 = 'Sprint Shootout'
                    trial3 = 'Sprint'
                    fullDateSprintOr3 = race.Sprint.date.split('-')
                    fullTimeSprintOr3 = race.Sprint.time.split(':')
                    dateSprintOr3 = {
                        year: Number(fullDateSprintOr3[0]),
                        month: Number(fullDateSprintOr3[1]),
                        day: Number(fullDateSprintOr3[2]),
                        hour: Number(fullTimeSprintOr3[0]),
                        min: Number(fullTimeSprintOr3[1]),
                    }
                } else {
                    fullDateSprintOr3 = race.ThirdPractice.date.split('-')
                    fullTimeSprintOr3 = race.ThirdPractice.time.split(':')
                    dateSprintOr3 = {
                        year: Number(fullDateSprintOr3[0]),
                        month: Number(fullDateSprintOr3[1]),
                        day: Number(fullDateSprintOr3[2]),
                        hour: Number(fullTimeSprintOr3[0]),
                        min: Number(fullTimeSprintOr3[1]),
                    }
                }

                dateCourse = {
                    year: Number(fullDateRace[0]),
                    month: Number(fullDateRace[1]),
                    day: Number(fullDateRace[2]),
                    hour: Number(fullHourRace[0]),
                    min: Number(fullHourRace[1])
                }
                dateQualifying = {
                    year: Number(fullDateQualifying[0]),
                    month: Number(fullDateQualifying[1]),
                    day: Number(fullDateQualifying[2]),
                    hour: Number(fullHourQualifying[0]),
                    min: Number(fullHourQualifying[1])
                }
                dateFirst = {
                    year: Number(fullDateFirst[0]),
                    month: Number(fullDateFirst[1]),
                    day: Number(fullDateFirst[2]),
                    hour: Number(fullTimeFirst[0]),
                    min: Number(fullTimeFirst[1])
                }
                dateSecond = {
                    year: Number(fullDateSecond[0]),
                    month: Number(fullDateSecond[1]),
                    day: Number(fullDateSecond[2]),
                    hour: Number(fullTimeSecond[0]),
                    min: Number(fullTimeSecond[1])
                }
                nextGP = {
                    circuitName: race.Circuit.circuitName,
                    gpName: race.raceName,
                }
                newDatesAndHours()
            });
    }

    function newDatesAndHours() {
        const newCourse = DateTime.local(dateCourse.year, dateCourse.month, dateCourse.day, dateCourse.hour, dateCourse.min).plus({hours: 1})
        const newQualifying = DateTime.local(dateQualifying.year, dateQualifying.month, dateQualifying.day, dateQualifying.hour, dateQualifying.min).plus({hours: 1})
        const newFirst = DateTime.local(dateFirst.year, dateFirst.month, dateFirst.day, dateFirst.hour, dateFirst.min).plus({hours: 1})
        const newSecond = DateTime.local(dateSecond.year, dateSecond.month, dateSecond.day, dateSecond.hour, dateSecond.min).plus({hours: 1})
        const newSprintOr3 = DateTime.local(dateSprintOr3.year, dateSprintOr3.month, dateSprintOr3.day, dateSprintOr3.hour, dateSprintOr3.min).plus({hours: 1})
        newCourseDate = newCourse.setLocale('fr').toFormat("dd LLL yyyy")
        newQualifyingDate = newQualifying.setLocale('fr').toFormat("dd LLL yyyy")
        newFirstDate = newFirst.setLocale('fr').toFormat("dd LLL yyyy")
        newSecondDate = newSecond.setLocale('fr').toFormat("dd LLL yyyy")
        newSprintOr3Date = newSprintOr3.setLocale('fr').toFormat("dd LLL yyyy")
        newCourseTime = newCourse.toFormat("T")
        newQualifyingTime = newQualifying.toFormat("T")
        newFirstTime = newFirst.toFormat("T")
        newSecondTime = newSecond.toFormat("T")
        newSprintOr3Time = newSprintOr3.toFormat("T")
    }


</script>

<h1>Formule 1</h1>
<div class="GP">
    <h2>{nextGP.gpName}</h2>
    <h3>{nextGP.circuitName}</h3>
    <TabNextGP {trial2} {trial3} {newCourseDate} {newCourseTime} {newQualifyingDate} {newQualifyingTime} {newFirstDate}
               {newFirstTime} {newSecondDate} {newSecondTime} {newSprintOr3Date} {newSprintOr3Time}/>
</div>


<style>
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');

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

    .GP {
        display: flex;
        flex-direction: column;
        height: 100%;
        align-items: center;
    }
</style>

