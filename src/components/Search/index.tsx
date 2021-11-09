import React, { FC } from 'react'
import styles from './style.module.scss'
import cx from 'classnames'
import { useState } from 'react';

const Search: FC = () => {
    const [iconVisible, setIconVisible] = useState<boolean>(true)
    const [searchValue, setSearchValue] = useState<string>('')

    const hideIcon = () => {
        setIconVisible(false)
    }
    const showIcon = () => {
        if(!searchValue.length) {
            setIconVisible(true)
        }
        
    }
    const setValue = (e:React.SyntheticEvent<HTMLInputElement>)=> {
        setSearchValue((e.target as HTMLInputElement).value)
    }
    return (
        <>
            <input
                className={cx(styles.search, { [styles.icon]:iconVisible })}
                type="search"
                name="search"
                aria-label="Search through site content"
                onFocus={hideIcon}
                onBlur={showIcon}
                value={searchValue}
                onChange={setValue}
            />
        </>
    );
};

export default Search