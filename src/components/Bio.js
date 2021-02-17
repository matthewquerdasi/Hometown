import React, { Component, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {withRouter} from 'react-router-dom';
import { FiArrowRight } from "react-icons/fi";
import PersonsData from '../data/persons.json';
import '../css/Bio.css';
import '../css/bootstrap.min.css';



class Bio extends Component {

  // calls parent locationUpdate in App on updated location
  locationUpdate(location) {
    this.props.locationUpdate(location);
  }


  render() {

    const id = this.props.match.params.id

    const sp = PersonsData.filter(person => {
      return person.id == id
    })

    const selectedPerson = sp[0]

    const locations = selectedPerson.locations

    {/* locationList contains all location html info  */}
    const locationsList = locations
      .map(place => {
        return (
          <div>
            <div className="hover-container">

              <Link onClick={this.locationUpdate.bind(this, place)}>
                {/* not displaying number and arrow for header */}
                <div className={place.display}>
                  <div className="row mb-n1 text-decoration-none">

                    <div className="title-container">
                      <div className="circle-container">
                        <div className="">
                          <h5 className="circle"> {place.id} </h5>
                        </div>
                      </div>

                      <h2> {place.title} </h2>
                    </div>


                    <div className="d-none d-md-flex">
                      <FiArrowRight size={30} stroke-width={1.8} className="arrow" />
                    </div>

                  </div>
                </div>

                {/* BUSINESS STICKER */}
                <div className="sticker-container">
                  <div className="pt-n2 pl-2">
                    <img className="sticker" src={place.sticker}></img>
                  </div>
                </div>


                <img src={place.image}></img>
              </Link>
            </div>

            <div className="mb-4">
              <p className="font-italic"> {place.image_description} </p>
              <p className=""> {place.description} </p>
              {/* FOOTER SENTENCE */}
              <p className="footer-sentence font-italic"> {place.footer} </p>


              {/* MOBILE MORE INFO */}
              <div className="d-block d-md-none text-center w-100 mb-5">
                <Link to='/more-info' onClick={this.locationUpdate.bind(this, place)}>
                  <a className="more-info-button" href="https://docs.google.com/document/d/13I4PmqQXgp6heMTp-MBW2etH9PQ4Zg94U4TuVKYWVd4/edit" target="_blank">MORE INFO</a>
                </Link>
              </div>


            </div>
          </div>
        )
      })

    return(
      <div className="bio-container">
          <div className="bio-content">
            <h1>{selectedPerson.town}, {selectedPerson.stateAbbrv}</h1>
            <h3 className="mb-4"> By {selectedPerson.firstName} {selectedPerson.lastName}, {selectedPerson.school} '{selectedPerson.classYear} </h3>

            <div>
              {locationsList}
            </div>

            <div className="personal-bio row">
              <div className="col-8 offset-2 offset-md-0 col-md-3">
                <a href={selectedPerson.bioWebsite} target="_blank">
                  <img src={selectedPerson.bioImage}></img>
                </a>
              </div>
              <div className="col-12 col-md-9 text-center text-md-left mt-2 mt-md-0">
                <h4> {selectedPerson.firstName} {selectedPerson.lastName}</h4>
                <p className="">{selectedPerson.bioBlurb} </p>
              </div>
            </div>
          </div>
      </div>
    )
  }
}

export default withRouter(Bio);
