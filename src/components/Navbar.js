import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { IoIosSearch } from "react-icons/io";
import Logo from '../menu-images/logo.png';
import { FiMenu } from "react-icons/fi";
import  { ScrollRotate } from 'react-scroll-rotate';
import '../css/Navbar.css';


class Navbar extends Component {

  // function that sends searchValue from input to parent filterUpdate
  filterUpdate() {
    const val = this.searchValue.value;
    this.props.filterUpdate(val);
  }

  render() {

    return (
      <div className="w-100">

        {/* MOBILE */}
        <div className="d-flex flex-row d-md-none gray-background">
          <div className="logo-container-mobile">
            <Link to="/">
              <ScrollRotate method={"perc"} loops={0.5} animationDuration={0.7}>
                <img className="logo-mobile" src={Logo} alt="Hometown logo" />
              </ScrollRotate>

            </Link>
          </div>

          <div className="search-container-mobile">
            {/*
            <IoIosSearch size={30} stroke-width={1.5} className="search-icon-mobile"/>

            <form>
              <input
                className="search-bar-mobile no-outline gray-background"
                type="text"
                ref={ (value) => {this.searchValue = value} } // making reference into a callback function that stores input value as searchValue
                placeholder="Ex: Brooklyn..."
                onChange={this.filterUpdate.bind(this)}
              />
            </form>
            */}
          </div>

          {/* DROPDOWN */}
          <div class="btn-group dropdown-menu-mobile gray-background">
            <button type="button" class="btn black" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <FiMenu className="" size={30} stroke-width={1.8} />
            </button>
            <div className="test dropdown-menu dropdown-menu-right gray-background">

              <Link className="dropdown-item text-center" to="/"> Home </Link>
              <Link className="dropdown-item text-center" to="/submit"> Submit </Link>
              <Link className="dropdown-item text-center" to="/about"> About </Link>
            </div>
          </div>

        </div>

      </div>


    )
  }
}


export default Navbar;
