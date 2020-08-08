import React from "react";

function Header() {
  return (
    <div>
      <div className="nav-bar">
        <div className="image"></div>

        <div className="navigation-options">
          <div className="option">
            <a href="#">Home</a>
            <div className="inner-box home-innerbox">
              <div>Home Version 1</div>
              <div>Home Version 2</div>
              <div>Home Version 3</div>
              <div>Home Version 4</div>
            </div>
          </div>

          <div className="option">
            <a href="#">Pages</a>
            <div className="inner-box page-innerbox">
              <div>404 Page</div>
              <div>Contact Us</div>
              <div>Coming Soon</div>
              <div>Pricing Plan</div>
              <div>Login - Register</div>
              <div>Testimonials</div>
            </div>
          </div>

          <div className="option">
            <a href="#">Movies &amp; TV Shows</a>
            <div className="inner-box movie-innerbox">
              <div>Movie List 1</div>
              <div>Movie List 2</div>
              <div>Movie Grid 1</div>
              <div>Movie Grid 2</div>
              <div>Movie Grid 3</div>
              <div>Movie Grid 4</div>
            </div>
          </div>

          <div className="option">
            <a href="#">Blog</a>
            <div className="inner-box blogs-innerbox">
              <div>Blog List</div>
              <div>Post With Gallery</div>
              <div>Post With Vimeo</div>
              <div>Post With Youtube</div>
              <div>Post with Audio</div>
            </div>
          </div>

          <a href="#">Contact Us</a>
        </div>

        <div className="login">
          <div className="search"></div>
          <div className="button">Login</div>
        </div>
      </div>


      <div className="banner">
        <div className="inner-box">
          <h2 className="banner-text">Movie Grid 3</h2>
          <a>Home</a> | <a>Movie grid 3</a>
        </div>
      </div>
    </div>
  );
}

export default Header;
