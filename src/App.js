import React from "react";

function Favorite(props){
  console.log(props);
  return <h3>I Like Programming</h3>;
}

function App() {
  return <div>
    <h1>Hello World</h1>
    <Favorite name="python" />
    </div>
}

export default App;
