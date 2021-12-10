import { Grid } from '@mui/material';
import { useState, useEffect } from "react";
import axios from 'axios';

import { platformContext, categoryContext, sortContext } from './Context';

import { Platform } from './filter/Platform';
import { Category } from './filter/Category';
import { Sort } from './filter/Sort';
import { ListGames } from './ListGames';
// import GameList from '../GameList.json'

const GetGames = () => {
    const [games, setGames] = useState([])

    useEffect(() => {
        // GET request using axios inside useEffect React hook
        axios.get('http://localhost:8080/')
            .then(response => setGames(response.data));

        // empty dependency array means this effect will only run once (like componentDidMount in classes)
    }, []);

    return ListGames(games);
}



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
                        {GetGames()}
                        {/* {ListGames(games)} */}
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



export default Games;