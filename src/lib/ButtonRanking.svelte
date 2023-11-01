<script>
    export let colorBorder;
    export let name;
    export let whatAction;

</script>

<button class="buttonsRanking" style="border-color: {colorBorder}" on:click={whatAction}>{name}</button>

<style>
    .buttonsRanking {
        background: black;
        border: 1px solid;
        color: white;
        font-size: 1.5rem;
        font-family: "Poppins", sans-serif;
        width: 18%;
    }
</style>