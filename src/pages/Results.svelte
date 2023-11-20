<script>
    import ButtonSendResult from "../lib/ButtonSendResult.svelte";
</script>

<h1>Formule 1</h1>
<div class="resultTab">
    <ButtonSendResult/>
</div>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

    h1 {
        color: white;
        text-align: center;
        margin-bottom: 0;
        font-family: "Poppins", sans-serif;
        font-size: 2.5rem;
        outline: none;
    }

    .resultTab {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    @media screen and (max-width: 767px) {
        .resultTab {
            display: flex;
            flex-direction: column;
            align-items: start;
            overflow-y: hidden;
            overflow-x: auto;
            margin: 0 1.5rem 1.5rem 1.5rem;
        }
    }

    @media screen and (min-width: 768px) and (max-width: 1024px) {
        h1 {
            font-size: 4rem;
        }
        .resultTab {
            display: flex;
            flex-direction: column;
            align-items: start;
            overflow-y: hidden;
            overflow-x: auto;
            margin: 0 1.5rem 1.5rem 1.5rem;
        }
    }
</style>