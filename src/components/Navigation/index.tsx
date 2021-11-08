import React, {FC} from 'react'
import styles from './style.module.scss'
import { Link } from 'react-router-dom';

const Navigation: FC = () => {
    return (
        <>
            <nav className={styles.navigation}>
                <Link to ='#'>item1</Link>
                <Link to ='#'>item2</Link>
                <Link to = '#'>item3</Link>
            </nav>
        </>
    );
};

export default Navigation