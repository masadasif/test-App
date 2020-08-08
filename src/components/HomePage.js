import React, { Component } from "react";

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: null,
      error: false,
      message: "",
      query: "",
    };
  }

  //Getting data from API
  componentDidMount() {
    const apiKey = "1e448e0dfcdbb565f5d329820065b4d2";
    fetch("https://api.themoviedb.org/3/movie/popular?api_key=" + apiKey).then(
      (response) => {
        if (response.status === 200) {
          response.json().then((moviesData) => {
            this.setState({ movies: moviesData.results });
          });
        } else {
          const message =
            response.status === 401
              ? "You are unauthorized to perform this action"
              : "Movies not found";
          this.setState({
            error: true,
            message: message,
          });
        }
      }
    );
  }

  handleChange(evt) {
    this.setState({
      query: evt.target.value,
    });
  }

  render() {
    if (this.state.error) {
      return <div className="error">{this.state.message}</div>;
    }
    return (
      <div className="HomePage">
        <input
        className="search-input"
          type="text"
          value={this.state.query}
          placeholder="Enter Movie Name or Year.."
          onChange={this.handleChange.bind(this)}
        />
        <div className="movies-component">
        {/*Filter for Search*/}
          {this.state.movies
            ? this.state.movies
                .filter(
                  (movie) =>
                    movie.title
                      .toLowerCase()
                      .includes(this.state.query.toLowerCase()) ||
                    movie.release_date
                      .toLowerCase()
                      .includes(this.state.query.toLowerCase())
                )
                .map((item, i) => (
                  <div className="each-movie" key={i}>
                    <div className="image">
                      <img
                        height="400px"
                        width="100%"
                        src={
                          "https://image.tmdb.org/t/p/w300_and_h450_bestv2/" +
                          item.poster_path
                        }
                      />{" "}
                    </div>
                    <div className="inner-box">
                      <h1 className="movie-name">{item.title}</h1>
                      <div className="movie-ratings">
                        <h3 className="rating">{item.vote_average}/10</h3>
                        <h3 className="genre">{item.release_date}</h3>
                      </div>
                      <h4 className="movie-bio">
                        {item.overview.substring(1, 120)}
                      </h4>
                      <div className="button">Details</div>
                    </div>
                  </div>
                ))
            : null}
        </div>

      </div>
    );
  }
}
