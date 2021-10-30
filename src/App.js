import './App.css';
import Banner from './components/Banner';
import Row from './components/Row';
import requestes from './requestes';
function App() {
  return (
    <div className='App'>
      {/* {Nav} */}
      <Banner />
      <Row title='NETFLIX ORIGINALS' fetchUrl={requestes.fetchNetflixOriginals} isLargeRow={true} />
      <Row title='Trending Now' fetchUrl={requestes.fetchTrending} />
      <Row title='Top Rated' fetchUrl={requestes.fetchTopRated} />
      <Row title='Action Movies' fetchUrl={requestes.fetchActionMovies} />
      <Row title='Comed Movies' fetchUrl={requestes.fetchComedMovies} />
      <Row title='HorrorMovies' fetchUrl={requestes.fetchHorrorMovies} />
      <Row title='RomanceMovies' fetchUrl={requestes.fetchRomanceMovies} />
      <Row title='Documentaries' fetchUrl={requestes.fetchDocumentaries} />
    </div>
  );
}

export default App;
