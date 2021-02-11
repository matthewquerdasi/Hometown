import React, { Component } from 'react';
import '../css/BioSidebar.css';
import '../css/bootstrap.min.css';


class BioSidebar extends Component {

  render() {

    const location = this.props.selectedLocation;

    return (
      <div className="biosidebar-container sticky-top">

        <div className="biosidebar-content">

          <div className="circle-container-bio">
            <div className="pl-2 pt-2">
              <h5 className="circle-bio"> {location.id} </h5>
            </div>
          </div>

          <img src={location.sidebar_image}></img>

          <iframe src={location.map_link} tabIndex="0"></iframe>
        </div>


        <footer className="biosidebar-footer text-center">
          <hr></hr>

          <a href={location.directions_link} target="_blank">
            <div className="biosidebar-btn">
              GET DIRECTIONS
            </div>
          </a>

          <hr></hr>

          <a href={location.extralink_link} target="_blank">
            <div className="biosidebar-btn">
              {location.extralink_title}
            </div>
          </a>

        </footer>

      </div>


    )

  }
}



export default BioSidebar;
