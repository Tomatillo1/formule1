<script>
    export let trial2 = 'Essai libre 2 '
    export let trial3 = 'Essai libre 3 '
    export let newCourseDate;
    export let newCourseTime;
    export let newQualifyingDate;
    export let newQualifyingTime;
    export let newFirstDate;
    export let newFirstTime;
    export let newSecondDate;
    export let newSecondTime;
    export let newSprintOr3Date;
    export let newSprintOr3Time;

</script>
<table>
    <tr>
        <th>Épreuve</th>
        <th>Dates</th>
        <th>Heures</th>
    </tr>
    <tr>
        <td>Essai libre 1</td>
        <td>{newFirstDate}</td>
        <td>{newFirstTime}</td>
    </tr>
    <tr>
        <td>{trial2}</td>
        <td>{newSecondDate}</td>
        <td>{newSecondTime}</td>
    </tr>
    <tr>
        <td>{trial3}</td>
        <td>{newSprintOr3Date}</td>
        <td>{newSprintOr3Time}</td>
    </tr>
    <tr>
        <td>Qualifications</td>
        <td>{newQualifyingDate}</td>
        <td>{newQualifyingTime}</td>
    </tr>
    <tr>
        <td>Course</td>
        <td>{newCourseDate}</td>
        <td>{newCourseTime}</td>
    </tr>
</table>

<style>
    table {
        width: 60%;
        margin-top: 4rem;
        border-collapse: collapse;
    }

    th, td {
        border: 2px solid white;
    }

    tr {
        color: white;
        text-align: center;
        font-family: "Poppins", sans-serif;
        font-size: 1.5rem;
    }
    th {
        font-weight: 600;
    }
</style>