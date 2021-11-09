import { FC } from 'react'
import { Link } from 'react-router-dom'

import mainLogo from '../../assets/reading-book-logo.png'
import Search from '../Search'
import Navigation from '../Navigation'
import Container from '../Container'

import styles from './style.module.scss'

const Header: FC = () => {
	return (
		<header className={styles.header}>
			<Container>
				<div className={styles.wrapper}>
					<Link to='/'>
						<img src={mainLogo} alt="Main logo image" className={styles.logoImage} />
					</Link>
					<Navigation />
					<Search />
				</div>
			</Container>
		</header>
	);
};

export default Header