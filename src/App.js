import React from "react";


//function name's first alphabet must be upper?


// function renderLang(item){
//   return <Lang name={item.name} image={item.image} />;
// }

//map function gets array and return array what we want!

const langILike = [
  {
    id:1,
    name:"Python",
    image:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/768px-Python-logo-notext.svg.png"
  },
  {
    id:2,
    name:"Javascript",
    image:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png"
  },
  {
    id:3,
    name:"Django",
    image:"https://blog.kakaocdn.net/dn/cVaSOX/btqD9jVw36X/jHpIEqn2EAk7xdKMMmpEP0/img.png"
  },
  {
    id:4,
    name:"React",
    image:"https://www.pinclipart.com/picdir/middle/537-5374089_react-js-logo-clipart.png"
  },
  {
    id:5,
    name:"Tailwind",
    image:"https://ichi.pro/assets/images/max/640/1*5QD8DKhOjRe-gcYjozlLNQ.png"
  }
];

function Lang({name, image}){ //{name} = props.name
  return (
    <div>
      <span>I like {name}</span>
      <img src={image} alt={name} />
    </div>
  );
}

function App() {
  return (
  <div>
    {langILike.map(item => (
      <Lang key={item.id} name={item.name} image={item.image} />
    ))}
  </div>
  );
}

export default App;
