import { createContext } from 'react'

export const platformContext = createContext({
    platform: '',
    setPlatform: () => { }
});

export const categoryContext = createContext({
    category: '',
    setCategory: () => { }
});

export const sortContext = createContext({
    sort: '',
    setSort: () => { }
});

//Created Context hook for every filter type

