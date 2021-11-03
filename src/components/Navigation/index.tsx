import React, {FC} from 'react'
import styles from './style.module.scss'


const Navigation: FC = () => {
    return (
        <>
            <nav className={styles.navigation}>
                <div>item1</div>
                <div>item2</div>
                <div>item3</div>
            </nav>
        </>
    );
};

export default Navigation