<script>
    import {onMount} from 'svelte';

    onMount(() => {
        grid()
    })
    function grid()  {
       fetch('https://ergast.com/api/f1/current/last/qualifying.json')
           .then(response => {
               return response.json();
           })
           .then(data => {

           })
    }
</script>

<h1>Formule 1</h1>

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
</style>