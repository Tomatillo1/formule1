<script>
    export let leftColumn;
    export let rightColumn;

</script>
<div class="bothColumn">
    <div class="leftColumn">
        {#each leftColumn as {positionNumber, fullName, constructorName, colorConstructor, nameDriver}}
            <div class="eachPilote">
                <p class="position">P{positionNumber}</p>
                <div class="allInfos">
                    <img style="background-color: {colorConstructor}" class="constructorDriver" src="/dist/constructor/{constructorName}.png">
                    <p style="background-color: {colorConstructor}" class="namePilote">{fullName}</p>
                    <img style="background-color: {colorConstructor}" class="headDriver" src="/dist/pilotes/{nameDriver}.png">
                </div>
            </div>
        {/each}
    </div>
    <div class="rightColumn">
        {#each rightColumn as {positionNumber, fullName, constructorName, colorConstructor, nameDriver}}
            <div class="eachPilote">
                <p class="position">P{positionNumber}</p>
                <div class="allInfos">
                    <img style="background-color: {colorConstructor}" class="constructorDriver" src="/dist/constructor/{constructorName}.png">
                    <p style="background-color: {colorConstructor}" class="namePilote">{fullName}</p>
                    <img style="background-color: {colorConstructor}" class="headDriver" src="/dist/pilotes/{nameDriver}.png">
                </div>
            </div>
        {/each}
    </div>
</div>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

.bothColumn {
    display: flex;
    width: 100%;
    flex-grow: 1;
    justify-content: center;
    padding: 2rem 0;
    gap: 3rem;
}

.rightColumn, .leftColumn {
    display: flex;
    flex-direction: column;
    width: 50%;
    gap: 1.5rem;
}

.leftColumn {
    align-items: end;
}

.rightColumn {
    align-items: start;
    margin-top: 3rem;
}

.eachPilote {
    display: flex;
    flex-direction: column;
    width: 40%;
    gap: 0.5rem;
}

.position {
    color: white;
    font-family: "Poppins", sans-serif;
    font-size: 1rem;
}

.allInfos {
    display: flex;
    flex-direction: row;
    border-left: 1px solid white;
    border-top: 1px solid white;
    gap: 0.5rem;
    padding: 0.5rem 0 0 0.5rem;
}

.namePilote {
    display: flex;
    background-color: white;
    font-family: "Poppins", sans-serif;
    color: white;
    flex-grow: 1;
    padding-left: 1rem;
    align-items: center;
    font-size: 1rem;
}

.constructorDriver, .headDriver {
    width: 30px;
    height: 30px;
}

p {
    margin: 0;
}

</style>