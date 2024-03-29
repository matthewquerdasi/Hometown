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
      <div className="navbarContainer d-flex d-md-none">
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
      </div>

    )
  }
}

export default Navbar;
