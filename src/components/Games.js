import GameList from '../GameList.json'
import { styled } from '@mui/material/styles';
import { Grid, Link, } from '@mui/material';
import Typography from '@mui/material/Typography';


const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
});

const listGames = () => (

    GameList.games.map((game) => (
        <Grid container spacing={2} margin={2} width={"90%"}>

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
)

const Games = () => {
    return (
        <>
            {
                listGames()
            }
        </>

    )
}


export default Games;