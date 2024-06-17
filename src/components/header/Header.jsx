// import "./Header.scss";
// const Header = () => {
//   return <div></div>;
// };
// export default Header;

import React, { Component } from "react";
export class Header extends Component {
  render() {
    return (
      <>
        <header>
          <div className="container">
            <div className="header-left">
              <img src="LOGO.png" alt="LOGO" />
              <div className="header-links">
                <a href="#">Home</a>
                <a href="#About">About</a>
                <a href="#Services">Services</a>
                <a href="#Articles">Articles</a>
                <a href="#Contact">Contact</a>
              </div>
            </div>
            <div className="header-right">
              <p onClick={() => setCount(count + 1)}>Cart ({count})</p>
              <button className="global_btn">Get a free quote</button>
            </div>
          </div>
        </header>
      </>
    );
  }
}
export default Header;
