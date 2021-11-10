import React, { useEffect, useState } from 'react'
import Container from '../Container'

import getData from '../../fakeApi'
import {Book} from '../../types/types';


const Main = () => {
	const [books, setBooks] = useState<Book[]>([])

	useEffect(() => {
		getData()
			.then(response => {
				setBooks(response.default.books)
			})
	}, [])
	console.log(books)
	return (
		<>
			<main>
				<Container>
					<h1>Main</h1>
					{books.map((book) => (
						<h2 key={book.image}>{book.capture}</h2>
					))}
				</Container>
			</main>
		</>
	);
};

export default Main