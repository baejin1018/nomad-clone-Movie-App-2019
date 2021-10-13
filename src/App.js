import React from "react";
import PropTypes from "prop-types";
import axios from "axios";
import Movie from "./Movie";
import "./App.css";

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
  getMovies = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(
      "https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=rating"
    );
    this.setState({ movies, isLoading: false });
  };

  componentDidMount() {
    // 컴포넌트가 마운트된 직후 호출
    this.getMovies();
    // setTimeout(() => {
    //   //6초뒤에 isLoading을 false로 변경
    //   this.setState({ isLoading: false });
    // }, 6000);
  }

  render() {
    const { isLoading, movies } = this.state;
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loder_text">Loading...</span>
          </div>
        ) : (
          <div className="movies">
            {movies.map((movie) => (
              <Movie
                key={movie.id}
                id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
                genres={movie.genres}
              />
            ))}
          </div>
        )}
      </section>
    ); //isLoading이 ture면 Loading false면 We are ready 출력

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
