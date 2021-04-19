import React from "react";
// import PropTypes from "prop-types";


class App extends React.Component{
    state = { //state 에는 바꾸고 싶은 데이터를 넣는다
        count:"0",
    };
    add = () => {
        this.setState(current => ({count: current.count +1}));
        // this.setState({count: this.state.count -1});
    };
    minus = () => {
        this.setState(current => ({count: current.count -1}));
        // this.setState({count: this.state.count -1});
        //every time you call setState
        //react is going to Re render function with the new state
    };
  render(){
      return <div>
          <h1>The number is : {this.state.count}</h1>
          <button onClick={this.add}>ADD</button>
          <button onClick={this.minus}>Minus</button>
      </div>
  }

}//react automatically is going excuse your render methods in class component

export default App;
