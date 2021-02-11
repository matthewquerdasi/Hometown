import React, { Component } from 'react';
import '../css/About.css';


class About extends Component {

  render() {

    const data = this.props.data;
    const matt = data[0];
    const zoe = data[1];
    const hannah = data[2];

    const stickers = this.props.stickers;



    return (
      <div className="p-4 pl-md-5 pr-md-5 pt-md-5 text-left about-container">
        <h1>WHAT'S THE STORY HERE?</h1>

        <p>Design student Zoe Reifel grew up in sunny Santa Barbara, California. After she got to college (and met people that weren’t from Santa Barbara), she began to visit new friends in their hometowns, and found it to be an extraordinary experience. After all, what could be better than discovering a city with a guide who has a deep emotional connection to it, and has spent years vetting the best spots?</p>

        <p>Zoe found herself wishing she could visit every city with a twenty-something local as her guide, so she enlisted the help of her friend Matt and created Hometown, a space for college students to compile their favorite locations. Hometown can be used to help you plan your own adventures—or just for a pleasing read.</p>

        <p>This website was heavily inspired by Hannah Berman, Zoe’s best friend at college, and her favorite places in her hometown of Park Slope, Brooklyn.</p>

        <h1 className="mt-5 mt-md-0">WHO MADE THIS?</h1>

        <div className="row mb-5 text-center">
          {/* ZOE */}
          <div className="offset-1 col-10 offset-md-0 col-md-3 mb-4">
            <div className="col-10 offset-1 col-md-10 offset-md-1">
              {/* ROLE STICKER */}
              <div className="sticker-design">
                <div className="pt-n2 pl-2">
                  <img className="sticker" src={stickers.design}></img>
                </div>
              </div>

              <a href={zoe.bioWebsite} target="_blank">
                <img src={zoe.bioImage}></img>
              </a>
            </div>
            <div className="col-12 pt-3">
              <h4> {zoe.firstName} {zoe.lastName}</h4>
              <h5> {zoe.town}, {zoe.stateAbbrv} </h5>
            </div>
          </div>

          {/* MATT */}
          <div className="offset-1 col-10 offset-md-0 col-md-3 mb-4">
            <div className="col-10 offset-1 col-md-10 offset-md-1">
              {/* ROLE STICKER */}
              <div className="sticker-engineering">
                <div className="pt-n2 pl-2">
                  <img className="sticker" src={stickers.engineering}></img>
                </div>
              </div>

              <a className="" href={matt.bioWebsite} target="_blank">
                <img className="" src={matt.bioImage}></img>
              </a>
            </div>
            <div className="col-12 pt-3">
              <h4> {matt.firstName} {matt.lastName}</h4>
              <h5> {matt.town}, {matt.stateAbbrv} </h5>
            </div>
          </div>

          {/* HANNAH */}
          <div className="offset-1 col-10 offset-md-0 col-md-3 mb-4">
            <div className="col-10 offset-1 col-md-10 offset-md-1">
              {/* ROLE STICKER */}
              <div className="sticker-editing">
                <div className="pt-n2 pl-2">
                  <img className="sticker" src={stickers.editing}></img>
                </div>
              </div>

              <a href={hannah.bioWebsite} target="_blank">
                <img src={hannah.bioImage}></img>
              </a>
            </div>
            <div className="col-12 pt-3">
              <h4> {hannah.firstName} {hannah.lastName}</h4>
              <h5> {hannah.town}, {hannah.stateAbbrv} </h5>
            </div>
          </div>

          {/* LIA */}
          <div className="offset-1 col-10 offset-md-0 col-md-3 mb-4">
            <div className="col-10 offset-1 col-md-10 offset-md-1">
              {/* ROLE STICKER */}
              <div className="sticker-graphics">
                <div className="pt-n2 pl-2">
                  <img className="sticker" src={stickers.graphics}></img>
                </div>
              </div>

              <a href="https://www.liadibitonto.com/" target="_blank">
                <img src="./images/lia.jpeg"></img>
              </a>
            </div>
            <div className="col-12 pt-3">
              <h4> Lia DiBitonto</h4>
              <h5> Boerum Hill, NY </h5>
            </div>
          </div>
        </div>



        <h1 className="mt-5 mt-md-0">WANNA SUBMIT YOUR HOMETOWN?</h1>

        <p>Just click <a className="submit-click" href="https://forms.gle/jyf7vHMbRKuhwBM99" target="_blank"> here! </a></p>

      </div>


    )
  }
}


export default About;
