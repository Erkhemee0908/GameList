import GameList from '../GameList.json'
import './Games.css';
import { styled } from '@mui/material/styles';
import { ButtonBase, Grid, Link } from '@mui/material';
import Typography from '@mui/material/Typography';


const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
});

const listGames = () => (

    GameList.games.map((game) => (
        <Grid container spacing={2} margin={2}>

            <Grid item>
                <Link href={game.freetogame_profile_url} underline="none" color="inherit">
                    <Img alt="thumbnail" src={game.thumbnail} />
                </Link>

            </Grid>
            <Grid item xs={12} sm container>
                <Grid item xs container direction="column" spacing={2}>
                    <Grid item xs>
                        <Typography gutterBottom variant="subtitle1" component="div">
                            {game.title}
                        </Typography>
                        <Typography variant="body2" gutterBottom>
                            {game.short_description}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            ID: {game.id}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Genre: {game.genre}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Platform: {game.platform}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Publisher: {game.publisher}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Developer: {game.developer}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Release date: {game.release_date}
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    ))
)

const Games = () => {
    return (
        <>
            <h1>
                Free Games List
            </h1>
            {
                listGames()
            }
        </>

    )
}


export default Games;