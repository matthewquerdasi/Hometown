import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import PersonsData from '../data/persons.json';
import '../css/BioSidebar.css';
import '../css/bootstrap.min.css';



class BioSidebar extends Component {


  render() {

    {/* setting start location based on url or parent route */}
    if(this.props.selectedLocation == 1) {
      const id = this.props.match.params.id

      const sp = PersonsData.filter(person => {
        return person.id == id
      })

      const startLocation = sp[0].locations[0]

      var location = startLocation

    } else {
      var location = this.props.selectedLocation
    }


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



export default withRouter(BioSidebar);
