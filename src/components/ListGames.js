import { useContext } from "react";
import Typography from '@mui/material/Typography';
import { Grid, Link, styled } from '@mui/material';

import { platformContext, categoryContext, sortContext } from "./Context";

const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
});

export const ListGames = async () => {

    const { platform } = useContext(platformContext);

    const { category } = useContext(categoryContext);

    const { sort } = useContext(sortContext);


    let games = await fetch('https://get-free-games.erkhemee09083428.workers.dev/');

    games = games.filter(a => a.platform.includes(platform))

    games = games.filter(a => a.genre.includes(category))

    //  checking the platform and category filter
    //  applying where neccecary

    switch (sort) {
        case 'dateDown':
            games.sort((a, b) => a.release_date.localeCompare(b.release_date));
            break;
        case 'dateUp':
            games.sort((a, b) => b.release_date.localeCompare(a.release_date));
            break;
        case 'alphDown':
            games.sort((a, b) => a.title.localeCompare(b.title));
            break;
        case 'alphUp':
            games.sort((a, b) => b.title.localeCompare(a.title));
            break;
        case 'rel':
            games.sort((a, b) => a.id < b.id);
            break;
        default:
            break;
    }


    //Template for game info card

    return games.map((game) => (
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