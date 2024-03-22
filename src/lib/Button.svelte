<script>
    export let whatName;
    export let whatPage;
</script>

<button class="menuButton" on:click={whatPage}>{whatName}</button>

<style>
    .menuButton {
        background: transparent;
        border: 1px solid white;
        color: white;
        font-size: 1.5rem;
        font-family: "Poppins", sans-serif;
        padding: 0.5rem 0.5rem 0.5rem 0.5rem;
        align-self: center;
        width: 20%;
    }

    @media screen and (max-width: 767px) {
        .menuButton {
            width: 50%;
            font-size: 1.25rem;
        }
    }

    @media screen and (min-width: 768px) and (max-width: 1024px) {
        .menuButton {
            width: 60%;
            font-size: 2.5rem;
        }
    }
</style>