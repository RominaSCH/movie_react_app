import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";


//component에 state가 필요 없을 경우는 class component말고
//function을 써도 된다.
function Movie({year, title, summary, poster}){
    return (
        <div className="movie">
          <img src={poster} alt={title} title={title} />
          <div className="movie__data">
            <h3 style={{}} className="movie__title">{title} ({year})</h3>
            <p className="movie__summary">{summary}</p>
          </div>
        </div>
      );
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired
};

export default Movie;