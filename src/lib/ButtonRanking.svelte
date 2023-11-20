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

    @media screen and (max-width: 767px) {
        .buttonsRanking {
            font-size: 1rem;
            width: 35%;
        }
    }

    @media screen and (min-width: 768px) and (max-width: 1024px) {
        .buttonsRanking {
            font-size: 2rem;
            width: 35%;
        }
    }
</style>