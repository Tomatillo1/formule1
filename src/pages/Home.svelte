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
<div class="backgroundHome">
    <div class="homeFilterBlack">
        <div class="imageLogo">
            <img class="logoMainPage" src="/dist/logo-formule-1.png" alt="">
        </div>
        <div class="menu">
            <Button whatName="Prochain GP" whatPage={page1}/>
            <Button whatName="La grille" whatPage={page2}/>
            <Button whatName="Calendrier" whatPage={page3}/>
            <Button whatName="Résultats" whatPage={page4}/>
            <Button whatName="Classements" whatPage={page5}/>
        </div>
    </div>
</div>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
    
    .menu {
        display: flex;
        flex-direction: column;
        width: 100%;
        gap: 2rem;
        flex-grow: 1;
    }

    .logoMainPage {
        height: 125px;
        width: 400px;
    }

    .imageLogo {
        display: flex;
        justify-content: center;
        padding: 2rem 0 3rem 0;
    }

    .backgroundHome {
        background-image: url("/dist/fond-ecran-accueil.jpg");
        background-position-y: bottom;
        height: 100%;
    }

    .homeFilterBlack {
        background-color: rgba(0,0,0,0.6);
        height: 100%;
    }
</style>