import { useContext, useState } from 'react'
import { Button, Grid, Menu, MenuItem } from '@mui/material';
import { categoryContext } from '../Context';

const ITEM_HEIGHT = 48;

export const Category = () => {
    const { setCategory } = useContext(categoryContext);

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    //  Updated the value of the Context depending
    //  on the filter argument
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
