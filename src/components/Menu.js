import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../css/Menu.css';
import Logo from '../menu-images/logo.png';
import  { ScrollRotate } from 'react-scroll-rotate';


class Menu extends Component {

  render() {

    const MenuData = this.props.data;
    console.log(MenuData);

    return (
      <div className="menu d-none d-md-block">
        <Link to="/">
          {/* logo spin */}
          <ScrollRotate method={"perc"} loops={0.5} animationDuration={0.7}>
            <img className="logo" src={Logo} alt="Hometown logo" />
          </ScrollRotate>
        </Link>

        <hr></hr>

        <div className="menu-text-box text-left">
          <h1 className="mb-3">{MenuData.header}</h1>
          <h5 className="">{MenuData.description}</h5>
        </div>

        <footer className="menu-footer text-center">
          <hr></hr>

          <Link className="text-decoration-none" to="/about">
            <div className="menu-btn">
              ABOUT
            </div>
          </Link>

          <hr></hr>

          <Link className="text-decoration-none" to="/submit">
            <div className="menu-btn">
              SUBMIT
            </div>
          </Link>

        </footer>


      </div>


    )
  }
}


export default Menu;
