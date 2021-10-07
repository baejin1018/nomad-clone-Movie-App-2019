import React from "react";
import PropTypes from "prop-types";

const foodILike = [
  {
    id: 1,
    name: "Kimbap",
    Image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5fOoVC-3u7JujYkDHaKvGP54izogUldAYKQ&usqp=CAU",
    rating: 4.5,
  },
  {
    id: 2,
    name: "samgupsal",
    Image: "http://gdimg.gmarket.co.kr/941825754/still/600?ver=1611725944",
    rating: 5,
  },
  {
    id: 3,
    name: "ramen",
    Image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSuo12v5nXRrJhVUw6CGJvmk9HQZmmbZfG0A&usqp=CAU",
    rating: 4.5,
  },
];

// function renderFood(dish) {
//   return <Food key={dish.id} name={dish.name} picture={dish.Image} />;
// }

function Food({ name, picture, rating }) {
  return (
    <div>
      <h1>I like {name}</h1>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name} />
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

function App() {
  //return <div>{foodILike.map(renderFood)}</div>;
  return (
    <div>
      {foodILike.map((dish) => (
        <Food
          key={dish.id}
          name={dish.name}
          picture={dish.Image}
          rating={dish.rating}
        />
      ))}
    </div>
  );
}

export default App;
