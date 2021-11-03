import React, { FC } from 'react'
import Container from '../Container'
import styles from './style.module.scss'

import mainLogo from '../../assets/reading-book-logo.png'

const Header: FC = () => {
	return (
		<header>
			<Container>
				<div className={styles.wrapper}>
					<img src={mainLogo} alt="Main logo image" className={styles.logoImage} />
				
				</div>
			</Container>
		</header>
	);
};

export default Header