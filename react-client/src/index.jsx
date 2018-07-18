import React from 'react';
import ReactDOM from 'react-dom';
import MovieList from './components/MovieList.jsx';
import SearchBar from './components/SearchBar.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      movies: []
    };
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(e) {
    const query = e.target.value;
    this.setState({ movies: [] })
    let timeout = null;

    const getMovies = (page) => {
      const uri = `https://api.themoviedb.org/3/search/movie?api_key=403ffcb3b4481da342203f94fb6e937e&query=${query}&page=${page}`;
      axios.get(uri)
      .then((response) => {
        const movies = [];
        const results = response.data.results;
        results.forEach((movie) => { movies.push(movie.title) })
        this.setState({ movies: [...this.state.movies, ...movies] })
        if(response.data.page < response.data.total_pages) {
          clearTimeout(timeout);
          const newPage = page + 1;
          timeout = setTimeout(() => {
            getMovies(newPage);
          }, 500)
        }
      })
      .catch((error) => { console.log('error ----->', error) })
    }
    getMovies(1);
  }

  render () {
    return (
      <div className='application-container'>
        <div className='application'>
            <h1 className='application-title'>Andrew's Movie Finder</h1>
            <SearchBar handleChange={this.handleChange} handleSearch={this.handleSearch} />
            <MovieList movies={this.state.movies} />
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));