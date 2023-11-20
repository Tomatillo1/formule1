<script>
    export let calendarTab;

</script>

<table>
    {#each calendarTab as {
        nameGP,
        circuitName,
        nationality,
        fullDateFirst,
        fullDateRace,
        fullDate2OrS,
        fullDateQual,
        fullDate3OrSprint,
        sprintOrNot
    }}
        {#if (sprintOrNot === 'sprint')}
            <tr class="spaceTab">
                <th>Nom du GP</th>
                <th>Circuit</th>
                <th>Pays</th>
                <th>Essai libre 1</th>
                <th>Qualification</th>
                <th>Shootout</th>
                <th>Sprint</th>
                <th>Course</th>
            </tr>
            <tr>
                <td>{nameGP}</td>
                <td>{circuitName}</td>
                <td>{nationality}</td>
                <td>{fullDateFirst}</td>
                <td>{fullDateQual}</td>
                <td>{fullDate2OrS}</td>
                <td>{fullDate3OrSprint}</td>
                <td>{fullDateRace}</td>
            </tr>
        {:else }
            <tr class="spaceTab">
                <th>Nom du GP</th>
                <th>Circuit</th>
                <th>Pays</th>
                <th>Essai libre 1</th>
                <th>Essai libre 2</th>
                <th>Essai libre 3</th>
                <th>Qualification</th>
                <th>Course</th>
            </tr>
            <tr>
                <td>{nameGP}</td>
                <td>{circuitName}</td>
                <td>{nationality}</td>
                <td>{fullDateFirst}</td>
                <td>{fullDate2OrS}</td>
                <td>{fullDate3OrSprint}</td>
                <td>{fullDateQual}</td>
                <td>{fullDateRace}</td>
            </tr>
        {/if}
    {/each}

</table>

<style>
    table {
        width: 150%;
        margin: 3rem 0 4rem 3rem;
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

    @media screen and (max-width: 767px) {
        table {
            width: 300%;
            margin: 0;
        }
        tr {
            font-size: 1rem;
        }
    }

    @media screen and (min-width: 768px) and (max-width: 1024px) {
        table {
            width: 300%;
            margin: 0;
        }
        tr {
            font-size: 2rem;
        }
    }
</style>