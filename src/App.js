import React from "react";
import axios from "axios";
// import PropTypes from "prop-types";


class App extends React.Component{
    state = { 
        isLoading: true,
        movies: [],
    };
    getMovies = async() => { //async 가 있어야 await 이 가능
        const movies = await axios.get("https://yts-proxy.nomadcoders1.now.sh/list_movies.json");
        console.log(movies);
    }//await이 끝나야 async가 실행될 수 있다?
    componentDidMount(){ //render 시에 가장 먼저 호출되는 life cycle method
        this.getMovies();
    }

  render(){
      const {isLoading} = this.state;
      return <div>{this.state.isLoading ? "Loading" : "We are ready"}</div>
  }

}//react automatically is going excuse your render methods in class component

export default App;
