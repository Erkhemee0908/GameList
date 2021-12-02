import { useContext } from 'react'
import { Button, Grid } from '@mui/material';
import { sortContext } from '../Context';

export const Sort = () => {
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
