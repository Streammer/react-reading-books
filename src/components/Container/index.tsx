import React, { Children, FC } from 'react'
import styles from './style.module.scss'
import classNames from 'classnames/bind'

const Container: FC = ({children}) => {
    return (
        <>
            <div className={classNames(styles.container)}>
                {children}
            </div>
        </>
    )
};

export default Container