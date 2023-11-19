<script>
    import {useNavigate} from "svelte-navigator";

    const navigate = useNavigate()
    import Button from '../lib/Button.svelte'

    function page1() {
        navigate('/nextgp')
    }

    function page2() {
        navigate('/grid')
    }

    function page3() {
        navigate('/calendar')
    }

    function page4() {
        navigate('/results')
    }

    function page5() {
        navigate('/ranking')
    }

</script>

<h1>Formule 1</h1>
<div class="menu">
    <Button whatName="Prochain GP" whatPage={page1}/>
    <Button whatName="La grille" whatPage={page2}/>
    <Button whatName="Calendrier" whatPage={page3}/>
    <Button whatName="Résultats" whatPage={page4}/>
    <Button whatName="Classements" whatPage={page5}/>
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

    .menu {
        display: flex;
        flex-direction: column;
        width: 100%;
        gap: 1rem;
        height: 100%;
        justify-content: center;
    }

    @media screen and (min-width: 768px) and (max-width: 1024px) {
        h1 {
            font-size: 4rem;
        }
    }
</style>