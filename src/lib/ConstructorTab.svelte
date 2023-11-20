<script>
    export let tabOfConstructors;
</script>

<table>
    <tr>
        <th>Position</th>
        <th>Écurie</th>
        <th>Nationalité</th>
        <th>Victoires</th>
        <th>Points</th>
    </tr>
    {#each tabOfConstructors as {positionConstructor, constructorName, constructorCountry, winsNum, pointsNum}}
        <tr>
            <td>{positionConstructor}</td>
            <td>{constructorName}</td>
            <td>{constructorCountry}</td>
            <td>{winsNum}</td>
            <td>{pointsNum}</td>
        </tr>
    {/each}
</table>


<style>
    table {
        width: 90%;
        margin: 4rem 0 4rem 0;
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
            width: 170%;
            margin: 0;
        }
        tr {
            font-size: 2rem;
        }
    }
</style>