import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";
import {Link} from "react-router-dom";


//component에 state가 필요 없을 경우는 class component말고
//function을 써도 된다.
function Movie({ id, year, title, summary, poster, genres}){
    return (
      <Link to={{
        pathname:`/movie/${id}`,
        state:{
          year,
          title,
          summary,
          poster,
          genres
        }
      }} >
        <div className="movie">
          <img src={poster} alt={title} title={title} />
          <div className="movie__data">
            <h3 style={{}} className="movie__title">{title}</h3>
            <h5 className="movie__year">{year}</h5>
            <ul className="movie__genres">{genres.map((genre, index) => (
              <li key={index} className="genres__genre"> {genre}</li>) 
            )}</ul>
            <div className="movie__summary">{summary.slice(0, 135)}...</div>
            
            </div>
          </div>
        </Link>
      );
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Movie;