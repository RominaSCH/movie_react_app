import React from "react";
import axios from "axios";
import Movie from "./Movie";
// import PropTypes from "prop-types";

class App extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };
  getMovies = async () => {
    //async 가 있어야 await 이 가능
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(
      "https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=rating"
    );
    this.setState({ movies, isLoading: false });
    //{movies(stete's movies):movies(axios movies)} = {movies} because ES6!
  }; //await이 끝나야 async가 실행될 수 있다?
  componentDidMount() {
    //render 시에 가장 먼저 호출되는 life cycle method
    this.getMovies();
  }

  render() {
    const { isLoading, movies } = this.state;
    return (
      <section class="container">
        {isLoading ? (
          <div class="loader">
            <span class="loader__text">Loading...</span>
          </div>
        ) : (
          <div class="movies">
            {movies.map(movie => (
              <Movie
                key={movie.id}
                id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}/> ))}
          </div>
        )}
      </section>
    );
  }
} //react automatically is going excuse your render methods in class component

export default App;
