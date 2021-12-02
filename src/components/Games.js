import { Grid } from '@mui/material';
import { useState } from "react";
// import axios from 'axios';

import { platformContext, categoryContext, sortContext } from './Context';

import { Platform } from './filter/Platform';
import { Category } from './filter/Category';
import { Sort } from './filter/Sort';
import { ListGames } from './ListGames';



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



export default Games;