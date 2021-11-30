import { styled } from '@mui/material/styles';
import { Button, Grid, Link, Menu, MenuItem } from '@mui/material';
import Typography from '@mui/material/Typography';
import { useState, createContext, useContext } from "react";
// import axios from 'axios';
import GameList from '../GameList.json'


const ITEM_HEIGHT = 48;

const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
});

// const GetGames = () => {
//     const [games, setGames] = useState([]);
//     const [isLoaded, setIsLoaded] = useState(false);
//     const [error, setError] = useState(null);

//     // This should get the games from theAPI
//     // Unfortunatly i'm getting an error
//     // blocked by CORS policy
//     useEffect(() => {
//         axios.get(`https://www.freetogame.com/api/games`)
//             .then(
//                 (result) => {
//                     setIsLoaded(true);
//                     setGames(result);
//                 },
//                 (error) => {
//                     setIsLoaded(true);
//                     setError(error);
//                 }
//             )
//     }, [])

//     if (error) {
//         return <div>Error: {error.message}</div>;
//     } else if (!isLoaded) {
//         return <div>Loading...</div>;
//     } else {
//         return (
//             ListGames(games)
//         )
//     }
// }




const platformContext = createContext({
    platform: '',
    setPlatform: () => { }
});

const categoryContext = createContext({
    category: '',
    setCategory: () => { }
});

const sortContext = createContext({
    sort: '',
    setSort: () => { }
});
// Created Context for each filter argument

const Games = () => {

    const [platform, setPlatform] = useState('');
    const plat = { platform, setPlatform };

    const [category, setCategory] = useState('');
    const cat = { category, setCategory };

    const [sort, setSort] = useState('');
    const so = { sort, setSort };



    return (
        <>
            <sortContext.Provider value={so}>
                <categoryContext.Provider value={cat}>
                    <platformContext.Provider value={plat}>
                        <Bar />
                        {/* {GetGames()} */}
                        <ListGames />
                    </platformContext.Provider>
                </categoryContext.Provider>
            </sortContext.Provider>
        </>

    )
}

const Bar = () => {
    return <>
        <Grid container spacing={2} marginTop={1} width={"90%"}>
            <Platform />
            <Category />
            <Sort />
        </Grid>
    </>
}

const Platform = () => {


    const { setPlatform } = useContext(platformContext);

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const showAll = () => {
        setPlatform('')
        console.log('ALL')
        handleClose()
    }

    const showPC = () => {
        setPlatform('PC')
        console.log('PC')
        handleClose()

    }

    const showWeb = () => {
        setPlatform('Web')
        console.log('WEB')
        handleClose()

    }
    //  Updated the value of the Context depending
    //  on the filter argument
    return <Grid item>
        <Button
            aria-label='platform'
            id="platform"
            aria-controls="basic-menu"
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
        >
            Platform
        </Button>
        <Menu
            id="platform"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
                'aria-labelledby': 'platform',
            }}
            PaperProps={{
                style: {
                    maxHeight: ITEM_HEIGHT * 4.5,
                    width: '20ch',
                },
            }}
        >
            <MenuItem onClick={showAll}>All</MenuItem>
            <MenuItem onClick={showPC}>PC</MenuItem>
            <MenuItem onClick={showWeb}>Borwser</MenuItem>
        </Menu>
    </Grid>
}


const Category = () => {
    const { setCategory } = useContext(categoryContext);

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const showAll = () => {
        setCategory('')
        handleClose()
    }
    const showMMO = () => {
        setCategory('MMO')
        handleClose()
    }
    const showMMORPG = () => {
        setCategory('MMORPG')
        handleClose()
    }
    const showShooter = () => {
        setCategory('Shooter')
        handleClose()
    }
    const showStrategy = () => {
        setCategory('Strategy')
        handleClose()
    }
    const showMOBA = () => {
        setCategory('MOBA')
        handleClose()
    }
    const showCard = () => {
        setCategory('Card')
        handleClose()
    }
    const showRacing = () => {
        setCategory('Racing')
        handleClose()
    }
    const showSports = () => {
        setCategory('Sports')
        handleClose()
    }
    const showSocial = () => {
        setCategory('Social')
        handleClose()
    }
    const showFighting = () => {
        setCategory('Fighting')
        handleClose()
    }
    //  Updated the value of the Context depending
    //  on the filter argument
    return <Grid item>
        <Button
            aria-label='Category'
            id="Category"
            aria-controls="long-menu"
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
        >
            Category
        </Button>
        <Menu
            id="Category"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
                'aria-labelledby': 'Category',
            }}
            PaperProps={{
                style: {
                    maxHeight: ITEM_HEIGHT * 4.5,
                    width: '20ch',
                },
            }}
        >
            <MenuItem onClick={showAll}>All</MenuItem>
            <MenuItem onClick={showMMO}>MMO</MenuItem>
            <MenuItem onClick={showMMORPG}>MMORPG</MenuItem>
            <MenuItem onClick={showShooter}>Shooter</MenuItem>
            <MenuItem onClick={showStrategy}>Strategy</MenuItem>
            <MenuItem onClick={showMOBA}>MOBA</MenuItem>
            <MenuItem onClick={showCard}>Card Game</MenuItem>
            <MenuItem onClick={showRacing}>Racing</MenuItem>
            <MenuItem onClick={showSports}>Sports</MenuItem>
            <MenuItem onClick={showSocial}>Social</MenuItem>
            <MenuItem onClick={showFighting}>Fighting</MenuItem>
        </Menu>
    </Grid>
}

const Sort = () => {
    const { setSort } = useContext(sortContext);

    let date = false;
    let alph = false;

    //  Added a check to toggle date and alphabetical sorting
    const sortRelevance = () => {
        setSort('rel')
    }
    const sortDate = () => {
        if (date) {
            setSort('dateUp');
        } else {
            setSort('dateDown');
        }
        date = !date;
        console.log(date)
    }
    const sortAlphabetical = () => {
        if (alph) {
            setSort('alphUp');
        } else {
            setSort('alphDown')
        }
        alph = !date;
        console.log(alph)
    }

    return <Grid item>
        <Button
            onClick={sortRelevance}
        >
            Relevance
        </Button>
        <Button
            onClick={sortDate}
        >
            Date
        </Button>
        <Button
            onClick={sortAlphabetical}
        >
            Alphabetical
        </Button>

    </Grid>
}

const ListGames = () => {

    const { platform } = useContext(platformContext);

    const { category } = useContext(categoryContext);

    const { sort } = useContext(sortContext);


    let games = GameList.games;

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
    //  Check all of the sorting argument
    //  sort baed on argument

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


export default Games;