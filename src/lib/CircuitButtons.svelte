<script>
    export let value;
</script>

<div class="menuButtons">
    <label for="chooseRace">Nom du GP</label>
    <select bind:value id="chooseRace" name="raceName">
        <option value="1">Bahrein</option>
        <option value="2">Arabie Saoudite</option>
        <option value="3">Australie</option>
        <option value="4">Azerbaïjan</option>
        <option value="5">Miami</option>
        <option value="6">Monaco</option>
        <option value="7">Espagne</option>
        <option value="8">Canada</option>
        <option value="9">Autriche</option>
        <option value="10">Grande Bretagne</option>
        <option value="11">Hongrie</option>
        <option value="12">Belgique</option>
        <option value="13">Pays Bas</option>
        <option value="14">Italie</option>
        <option value="15">Singapour</option>
        <option value="16">Japon</option>
        <option value="17">Quatar</option>
        <option value="18">États Unis</option>
        <option value="19">Mexique</option>
        <option value="20">Brésil</option>
        <option value="21">Las Vegas</option>
        <option value="22">Abou Dabi</option>
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

    @media screen and (min-width: 768px) and (max-width: 1024px) {
        label {
            font-size: 2rem;
        }
        #chooseRace {
            font-size: 1.5rem;
        }
    }
</style>