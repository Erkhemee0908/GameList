import { useContext, useState } from 'react'
import { Button, Grid, Menu, MenuItem } from '@mui/material';
import { platformContext } from '../Context';

const ITEM_HEIGHT = 48;



export const Platform = () => {


    const { setPlatform } = useContext(platformContext);

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
