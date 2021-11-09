import React from 'react'
import Container from '../Container'
import { Link } from 'react-router-dom'

import styles from './style.module.scss'

const Footer = () => {
    const currentYear = new Date().getFullYear()
    return (
        <>
            <footer className={styles.footer}>
                <Container>
                    <div className={styles.wrapper}>
                        <span>Reading books APP</span>
                        <nav className={styles.footerNavigation}>
                            <Link to='/'>About</Link>
                            <Link to='/'>Contacts</Link>
                        </nav>
                        <span>Copyright © {currentYear} <a href="mailto:Lukdmitrij@yandex.ru">Lukdmitrij@yandex.ru</a>  All Rights Reserved</span>
                    </div>
                </Container>
            </footer>
        </>
    );
};

export default Footer