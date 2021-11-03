import React, { FC } from 'react'
import Container from '../Container'
import mainLogo from '../../assets/reading-book-logo.png'
import Search from '../Search'
import styles from './style.module.scss'

const Header: FC = () => {
	return (
		<header>
			<Container>
				<div className={styles.wrapper}>
					<img src={mainLogo} alt="Main logo image" className={styles.logoImage} />
					<Search />
				</div>
			</Container>
		</header>
	);
};

export default Header