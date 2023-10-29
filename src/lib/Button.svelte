<script>
    export let whatName;
    export let whatPage;
</script>

<button class="menuButton" on:click={whatPage}>{whatName}</button>

<style>
    .menuButton {
        background: black;
        border: 1px solid white;
        color: white;
        font-size: 1.5rem;
        font-family: "Poppins", sans-serif;
        padding: 0.5rem 0.5rem 0.5rem 0.5rem;
        align-self: center;
        width: 20%;
    }
</style>