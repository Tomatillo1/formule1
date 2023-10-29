<script>
    import {Router, Route, Link, useNavigate} from "svelte-navigator";
    import Home from './pages/Home.svelte'
    import NextGP from './pages/NextGP.svelte'
    import Grid from './pages/Grid.svelte'
    import Calendar from './pages/Calendar.svelte'
    import Results from './pages/Results.svelte'
    import Ranking from './pages/Ranking.svelte'
</script>
<Router>
    <Route path="/">
        <Home/>
    </Route>
    <Route path="nextgp">
        <NextGP/>
    </Route>
    <Route path="grid">
        <Grid/>
    </Route>
    <Route path="calendar">
        <Calendar/>
    </Route>
    <Route path="results">
        <Results/>
    </Route>
    <Route path="ranking">
        <Ranking/>
    </Route>
</Router>