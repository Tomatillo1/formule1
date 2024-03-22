<script>
    export let tabOfConstructors;
</script>

<div class="allConstructors">
    {#each tabOfConstructors as {positionConstructor, constructorName, constructorName2, pointsNum, colorConstructor}}
        <div class="eachConstructors">
            <p class="position">{positionConstructor}</p>
            <div style="background: {colorConstructor};" class="whoConstructor">
                <img class="constructorDriver" src="/dist/constructor/{constructorName}.png">
                <p class="constructorName">{constructorName2}</p>
                <img class="constructorCar" src="/dist/cars/{constructorName}.jpg">
            </div>
            <p class="points">{pointsNum}</p>
        </div>
    {/each}
</div>


<style>
    @import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

    .allConstructors {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        gap: 1.5rem;
    }

    .eachConstructors {
        display: flex;
        flex-direction: row;
        width: 60%;
        text-align: start;
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

    .whoConstructor {
        width: 70%;
        background: white;
        border-radius: 5px;
        display: flex;
        flex-direction: row;
        align-items: center;
        font-size: 1.75rem;
        gap: 1rem;
        padding: 0.25rem 0;
    }

    .constructorName {
        margin: 0;
        flex-grow: 1;
        color: white;
        text-align: center;
    }

    .constructorDriver {
        width: 50px;
        height: 50px;
        margin: 0;
        border-radius: 5px 0 0 5px;
        padding-left: 0.5rem;
    }

    .constructorCar {
        width: 250px;
        height: 50px;
        border-radius: 0 5px 5px 0;
        padding-right: 1rem;
    }

</style>