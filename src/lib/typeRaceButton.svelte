<script>
    export let value;
</script>

<div class="menuButtons">
    <label for="chooseRace">L'épreuve</label>
    <select bind:value id="chooseRace" name="raceName">
        <option value="results">Course</option>
        <option value="qualifying">Qualification</option>
        <option value="sprint">Sprint</option>
    </select>
</div>
<style>
    .menuButtons {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        align-items: center;
    }

    label {
        color: white;
        font-family: "Poppins", sans-serif;
        font-size: 1.5rem;
    }

    #chooseRace {
        border: 2px solid white;
        background-color: black;
        color: white;
        font-family: "Poppins", sans-serif;
        font-size: 1rem;
        padding-left: 0.5rem;
    }
</style>