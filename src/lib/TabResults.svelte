<script>
    export let tabResults;
    export let whatStyleRace;
</script>

<table>
    {#if whatStyleRace === 'race'}
        <tr>
            <th>Position</th>
            <th>Nom</th>
            <th>Écurie</th>
            <th>Grille</th>
            <th>Nombre de tours</th>
            <th>Temps</th>
            <th>Status</th>
            <th>Points</th>
        </tr>
        {#each tabResults as {place, fullName, constructor, gridPlace, numberLaps, timeRace, statusRace, pointsRace}}
            <tr>
                <td>{place}</td>
                <td>{fullName}</td>
                <td>{constructor}</td>
                <td>{gridPlace}</td>
                <td>{numberLaps}</td>
                <td>{timeRace}</td>
                <td>{statusRace}</td>
                <td>{pointsRace}</td>
            </tr>
        {/each}
    {:else if whatStyleRace === 'sprint'}
        <tr>
            <th>Position</th>
            <th>Nom</th>
            <th>Écurie</th>
            <th>Grille</th>
            <th>Nombre de tours</th>
            <th>Temps</th>
            <th>Status</th>
            <th>Points</th>
        </tr>
        {#each tabResults as {place, fullName, constructor, gridPlace, numberLaps, timeRace, statusRace, pointsRace}}
            <tr>
                <td>{place}</td>
                <td>{fullName}</td>
                <td>{constructor}</td>
                <td>{gridPlace}</td>
                <td>{numberLaps}</td>
                <td>{timeRace}</td>
                <td>{statusRace}</td>
                <td>{pointsRace}</td>
            </tr>
        {/each}
        {:else if whatStyleRace === 'qualifying'}
        <tr>
            <th>Position</th>
            <th>Nom</th>
            <th>Écurie</th>
            <th>Nationalité</th>
            <th>Q1</th>
            <th>Q2</th>
            <th>Q3</th>
        </tr>
        {#each tabResults as {positionNumber, fullName, constructorName, country, QOne, QTwo, QThree}}
            <tr>
                <td>{positionNumber}</td>
                <td>{fullName}</td>
                <td>{constructorName}</td>
                <td>{country}</td>
                <td>{QOne}</td>
                <td>{QTwo}</td>
                <td>{QThree}</td>
            </tr>
        {/each}
    {/if}
</table>


<style>
    table {
        width: 120%;
        margin: 3rem 0 4rem 0;
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
            width: 160%;
            margin: 0;
        }
        tr {
            font-size: 1rem;
        }
    }

    @media screen and (min-width: 768px) and (max-width: 1024px) {
        table {
            width: 160%;
            margin: 0;
        }
        tr {
            font-size: 2rem;
        }
    }
</style>