import React, { Children, FC } from 'react'
import styles from './style.module.scss'

const Container: FC = ({ children }) => {
    return (
        <>
            <div className={styles.container}>
                {children}
            </div>
        </>
    )
};

export default Container