import React from "react";
import PropTypes from "prop-types";


//function name's first alphabet must be upper?


// function renderLang(item){
//   return <Lang name={item.name} image={item.image} />;
// }

//map function gets array and return array what we want!

const langILike = [
  {
    id:1,
    name:"Python",
    image:"https://live.staticflickr.com/3763/13541540425_63372041e1_n.jpg",
    rating:4
  },
  {
    id:2,
    name:"Javascript",
    image:"https://cdn.iconscout.com/icon/free/png-256/javascript-2752148-2284965.png",
    rating:4.9
  },
  {
    id:3,
    name:"Django",
    image:"https://img.stackshare.io/service/994/4aGjtNQv.png",
    rating:5
  },
  {
    id:4,
    name:"React",
    image:"https://seeklogo.com/images/R/react-logo-7B3CE81517-seeklogo.com.png",
    rating:4.7
  },
  {
    id:5,
    name:"Tailwind",
    image:"https://d25hn4jiqx5f7l.cloudfront.net/companies/logos/medium/tailwind_1513362838.jpg?1513362838",
    rating:3.5
  }
];

function Lang({name, image, rating}){ //{name} = props.name
  return (
    <div>
      <h1>I like {name}</h1>
      <h3>{rating}/5.0</h3>
      <img src={image} alt={name} />
    </div>
  );
}

Lang.propTypes = { //무조건 propTypes로 이름지어야함
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  rating: PropTypes.number
  //isRequired 가 없다면 있어도 없어도 알려주지 않음.
  //string, number, boolean, array, function, object, symbol, node element, instanceof, Oneof and others check
}; //자료형이 맞게 잘 들어갔나 체크하는거 강의 #2.4

function App() {
  return (
  <div>
    {langILike.map(item => (
      <Lang key={item.id} name={item.name} image={item.image} rating={item.rating} />
    ))}
  </div>
  );
}

export default App;
