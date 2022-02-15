import React, { useState, useEffect } from 'react';
import axios from './axios';
import './Row.css';

const baseUrl = 'https://image.tmdb.org/t/p/original/';
function Row({ title, fetchUrl }) {
	const [movies, setMovies] = useState([]);
	// snippet of code wich run based on specific condition

	useEffect(() => {
		// if [] that's mean run once when the row loads and don't run it again
		// if [movies] that's mean it will run once at the first time and run every single time the movies changes
		async function fetchData() {
			const request = await axios.get(fetchUrl);
			setMovies(request.data.results);
			return request;
		}
		fetchData();
	}, [fetchUrl]);

	console.log(movies);

	return (
		<div className="row">
			{/* title */}
			<h2>{title}</h2>

			<div className="row_posters">
				{/* several row posters */}
				{movies.map((movie) => (
					<img key={movie.id} className="row__poster" src={`${baseUrl}${movie.poster_path}`} alt={movie.name} />
				))}
			</div>

			{/* container -> posts */}
		</div>
	);
}

export default Row;
