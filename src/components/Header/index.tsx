import React, { FC } from 'react';
import Container from '../Container';
import styles from './style.module.scss'

const Header: FC = () => {
	console.log(styles);
	return (
		<header>
			<Container>
				<h1>header</h1>
			</Container>
		</header>
	);
};

export default Header;