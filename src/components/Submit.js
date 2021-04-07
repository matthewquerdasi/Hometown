import React, { Component } from 'react';
import '../css/Submit.css';


class Submit extends Component {

  render() {
    return (
      <div className="p-4 pl-md-5 pr-md-5 pt-md-5 text-left submit-container">
        <h1 className="">SUBMIT YOUR HOMETOWN</h1>
        <p>Do you think that where you grew up is the best place on Earth? Tell us about it!</p>

        <p>We’re looking to showcase your favorite spots in your hometown. Think of this like putting together an itinerary to show a friend around—coffee shops, restaurants, stores, parks, day trips, scenic routes… pretty much anything! We look for writing with character and high quality original photography. We also love to feature local businesses, especially those owned by BIPOC, women, or members of the LGBTQ+ community.  </p>

        <p>To submit a piece, click the button below. After submitting, you should hear back from us in 2-3 days.</p>

        <a className="submit-button" href="https://forms.gle/jyf7vHMbRKuhwBM99" target="_blank">SUBMIT</a>
      </div>


    )
  }
}


export default Submit;
