<script>
    export let newTab;

</script>

<div class="allPilotes">
    {#each newTab as {positionNumber, fullname, pointsNumber, nameDriver, constructorDriver, colorConstructor}}
        <div class="eachPilote">
            <p class="position">{positionNumber}</p>
            <div style="background: {colorConstructor};" class="whoPilote">
                <img class="headDriver" src="/dist/pilotes/{nameDriver}.png">
                <p class="piloteName">{fullname}</p>
                <img class="constructorDriver" src="/dist/constructor/{constructorDriver}.png">
            </div>
            <p class="points">{pointsNumber}</p>
        </div>
    {/each}
</div>



<style>
    @import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

    .allPilotes {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
    }

    .eachPilote {
        display: flex;
        flex-direction: row;
        width: 42%;
        padding: 0.75rem 2rem;
        text-align: center;
        font-size: 2rem;
        font-family: "Poppins", sans-serif;
        gap: 1rem;
    }

    .position, .points {
        background: white;
        border-radius: 5px;
        margin: 0;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .points {
        width: 20%;
    }

    .position {
        width: 10%;
    }

    .whoPilote {
        width: 70%;
        background: white;
        border-radius: 5px;
        display: flex;
        flex-direction: row;
        align-items: center;
        font-size: 1.75rem;
    }

    .piloteName {
        margin: 0;
        flex-grow: 1;
        color: white;
    }

    .headDriver, .constructorDriver {
        width: 50px;
        height: 50px;
        margin: 0;
    }

    .headDriver {
        padding-left: 0.5rem;
    }

    .constructorDriver {
        padding-right: 0.5rem;
    }

    .constructorDriver {
        border-radius: 0 5px 5px 0;
    }
</style>