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
    const movies = [];

    const getMovies = (page) => {
      const uri = `https://api.themoviedb.org/3/search/keyword?api_key=403ffcb3b4481da342203f94fb6e937e&query=${query}&page=${page}`;
      axios.get(uri)
      .then((response) => {
        console.log(response)
        // const results = response.results;
        // results.forEach((movie) => {
        //     movies.push(movie.title)
        // })
        // if(response.page < response.total_pages) {
        //   getMovies(page++);
        // } else {
        //   // might be slow if there are a lot of pages, might need to set state with each call
        //   this.setState({movies: movies})
        // }
      })
      .catch((error) => {
        console.log('error ----->', error)
      })
    }
    getMovies(1);
  }

  render () {
    return (
    <div>
      <h1>Item List</h1>
      <SearchBar handleSearch={this.handleSearch}/>
      <MovieList movies={this.state.movies}/>
    </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));