import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { IoIosSearch } from "react-icons/io";
import Logo from '../menu-images/logo.png';
import '../css/Search.css';


class Search extends Component {

  // function that sends searchValue from input to parent filterUpdate
  filterUpdate() {
    const val = this.searchValue.value;
    this.props.filterUpdate(val);
  }

  render() {

    return (
      <div className="">

        {/* MOBILE */}
        <div className="d-flex flex-row d-md-none gray-background">
          <div className="logo-container-mobile">
            <Link to="/">
              <img className="logo-mobile" src={Logo} alt="Hometown logo" />
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
        </div>


        {/* DESKTOP */}
        <div className="row no-gutters search-container-desktop d-none d-md-flex">
          <IoIosSearch size={25} stroke-width={1.5} className="search-icon-desktop"/>

          <form>
            <input
              className="search-bar-desktop no-outline"
              type="text"
              ref={ (value) => {this.searchValue = value} } // making reference into a callback function that stores input value as searchValue
              placeholder="Ex: Boston..."
              onChange={this.filterUpdate.bind(this)}
            />
          </form>

          {/*
          <div className="row no-gutters">
            <p> You searched {this.props.filterText} </p>
          </div>
          */}
        </div>

      </div>


    )
  }
}


export default Search;
