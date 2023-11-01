<script>
    export let newTab;
    let tab = JSON.parse(window.localStorage.getItem('key'));
    let tabChange;
    if (tab === null) {
         tabChange = newTab
    } else {
        tabChange = tab
    }
</script>

<table>
    <tr>
        <th>Position</th>
        <th>Nom</th>
        <th>Écurie</th>
        <th>Nationalité</th>
        <th>Victoire</th>
        <th>Points</th>
    </tr>
    {#each tabChange as {positionNumber, fullname, constructorDriver, nationalityCountry, winsNumber, pointsNumber}}
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
</style>