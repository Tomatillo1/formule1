<script>
    export let tabGrid;
</script>

<table>
    <tr>
        <th>Position</th>
        <th>Nom</th>
        <th>Écurie</th>
        <th>Nationalité</th>
        <th>Q1</th>
        <th>Q2</th>
        <th>Q3</th>
    </tr>
    {#each tabGrid as {positionNumber, fullName, constructorName, country, QOne, QTwo, QThree}}
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
</table>


<style>
    table {
        width: 90%;
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
</style>