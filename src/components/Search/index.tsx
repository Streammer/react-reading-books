import React, { FC } from 'react'
import styles from './style.module.scss'

const Search: FC = () => {
    return (
        <>
            <input type="search" name="search" aria-label="Search through site content"></input>
        </>
    );
};

export default Search