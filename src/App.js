import Row from './Row';
import requests from './requests';
function App() {
	return (
		<div className="App">
			<p style={{ fontSize: '20px', fontWeight: 'bold' }}>Netflix Clone</p>
			<Row title="NETFLIX ORIGINAL" fetchUrl={requests.fetchNetflixOriginals} />
			<Row title="Trending NOW" fetchUrl={requests.fetchTrending} />
			<Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
			<Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
			<Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
		</div>
	);
}

export default App;
