import React from "react";
import PropTypes from "prop-types";

class App extends React.Component {
  state = {
    isLoading: true,
    movies: [],
    //count: 0,
  };
  // add = () => {
  //   this.setState((currrent) => ({
  //     count: currrent.count + 1,
  //   }));
  // };
  // minus = () => {
  //   this.setState((currrent) => ({
  //     count: currrent.count - 1,
  //   }));
  // };

  // componentDidMount(){
  //   console.log("Commponent rendered");
  // }

  // componentDidUpdate(){
  //   console.log("I hust updated");
  // }

  componentDidMount() {
    // 컴포넌트가 마운트된 직후 호출
    setTimeout(() => {
      //6초뒤에 isLoading을 false로 변경
      this.setState({ isLoading: false });
    }, 6000);
  }

  render() {
    const { isLoading } = this.state;
    return <div>{isLoading ? "Loading..." : "We are ready"}</div>; //isLoading이 ture면 Loading false면 We are ready 출력

    // <div>
    //   <h1>The number is : {this.state.count}</h1>
    //   <button onClick={this.add}>Add</button>
    //   <button onClick={this.minus}>Minus</button>
    // </div>
  }
}

export default App;

// const foodILike = [
//   {
//     id: 1,
//     name: "Kimbap",
//     Image:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5fOoVC-3u7JujYkDHaKvGP54izogUldAYKQ&usqp=CAU",
//     rating: 4.5,
//   },
//   {
//     id: 2,
//     name: "samgupsal",
//     Image: "http://gdimg.gmarket.co.kr/941825754/still/600?ver=1611725944",
//     rating: 5,
//   },
//   {
//     id: 3,
//     name: "ramen",
//     Image:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSuo12v5nXRrJhVUw6CGJvmk9HQZmmbZfG0A&usqp=CAU",
//     rating: 4.5,
//   },
// ];

// function renderFood(dish) {
//   return <Food key={dish.id} name={dish.name} picture={dish.Image} />;
// }

// function Food({ name, picture, rating }) {
//   return (
//     <div>
//       <h1>I like {name}</h1>
//       <h4>{rating}/5.0</h4>
//       <img src={picture} alt={name} />
//     </div>
//   );
// }

// Food.propTypes = {
//   name: PropTypes.string.isRequired,
//   picture: PropTypes.string.isRequired,
//   rating: PropTypes.number.isRequired,
// };

// function App() {
//   //return <div>{foodILike.map(renderFood)}</div>;
//   return (
//     <div>
//       {foodILike.map((dish) => (
//         <Food
//           key={dish.id}
//           name={dish.name}
//           picture={dish.Image}
//           rating={dish.rating}
//         />
//       ))}
//     </div>
//   );
//}
