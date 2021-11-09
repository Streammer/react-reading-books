import React, {FC} from 'react'
import styles from './style.module.scss'
import { Link } from 'react-router-dom'


const Navigation: FC = () => {
    return (
        <>
            <nav className={styles.navigation}>
                <Link to ='/'>Popular</Link>
                <Link to ='/'>New</Link>
                <Link to ='/'>Catalog</Link>
            </nav>
        </>
    );
};

export default Navigation