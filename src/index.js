import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
//react application은 한 번에 하나의 component(App.js)만
//rendering 할 수 있다.
//다른건 App.js에 넣음

ReactDOM.render(<App />, document.getElementById('root'));

