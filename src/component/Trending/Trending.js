import React, { Component } from "react";
import axios from "axios";
import { Link, withRouter } from "react-router-dom";

class Trending extends Component {
  state = {
    trendingMovies: [],
  };

  componentDidMount() {
    axios
      .get(
        "https://api.themoviedb.org/3/trending/movie/day?api_key=b7d3d78da112d71a39b066cbc166d0c0"
      )
      .then((response) =>
        this.setState({ trendingMovies: response.data.results })
      );
  }

  render() {
    console.log("+++", this.location);
    return (
      <>
        <h1> Trending today</h1>
        <ul>
          {this.state.trendingMovies.map((movie) => (
            <li key={movie.id}>
              <Link
                to={{
                  pathname: `${this.props.match.url}movies/${movie.id}`,
                  state: { from: "/" },
                }}
              >
                {movie.title}
              </Link>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default withRouter(Trending);
