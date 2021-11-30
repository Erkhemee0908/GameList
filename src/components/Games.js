import { styled } from '@mui/material/styles';
import { Grid, Link, } from '@mui/material';
import Typography from '@mui/material/Typography';
import { useState, useEffect } from "react";
import axios from 'axios';
import GameList from '../GameList.json'


const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
});

const GetGames = () => {
    const [games, setGames] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState(null);

    // This should get the games from theAPI
    // Unfortunatly i'm getting an error
    // blocked by CORS policy
    useEffect(() => {
        axios.get(`https://www.freetogame.com/api/games`)
            .then(
                (result) => {
                    setIsLoaded(true);
                    setGames(result);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            listGames(games)
        )
    }
}





const listGames = () => {


    return GameList.games.map((game) => (
        <Grid key={game.id} container spacing={2} margin={2} width={"90%"}>

            <Grid item>
                <Link href={game.freetogame_profile_url} underline="none" color="inherit">
                    <Img alt="thumbnail" src={game.thumbnail} />
                </Link>

            </Grid>
            <Grid item xs={12} sm container>
                <Grid item xs container direction="column" spacing={2}>
                    <Grid item xs>
                        <Typography gutterBottom variant="h4" component="div">
                            {game.title}
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                            {game.short_description}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            <b>Genre:</b> {game.genre}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            <b>Platform:</b> {game.platform}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            <b>Publisher:</b> {game.publisher}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            <b>Developer:</b> {game.developer}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            <b>Release date:</b> {game.release_date}
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    ))
}

const Games = () => {

    return (
        <>

            {/* {GetGames()} */}
            {listGames()}
        </>

    )
}


export default Games;