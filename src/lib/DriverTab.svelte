<script>
    export let newTab;

</script>

<table>
    <tr>
        <th>Position</th>
        <th>Nom</th>
        <th>Écurie</th>
        <th>Nationalité</th>
        <th>Victoires</th>
        <th>Points</th>
    </tr>
    {#each newTab as {positionNumber, fullname, constructorDriver, nationalityCountry, winsNumber, pointsNumber}}
        <tr>
            <td>{positionNumber}</td>
            <td>{fullname}</td>
            <td>{constructorDriver}</td>
            <td>{nationalityCountry}</td>
            <td>{winsNumber}</td>
            <td>{pointsNumber}</td>
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
            width: 170%;
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