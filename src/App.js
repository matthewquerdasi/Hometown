import React,{ Component, useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import ReactGA from 'react-ga';
import Person from './components/Person.js';
import Bio from './components/Bio.js';
import BioSidebar from './components/BioSidebar.js';
import Search from './components/Search.js';
import Menu from './components/Menu.js';
import About from './components/About.js';
import Submit from './components/Submit.js';
import Navbar from './components/Navbar.js';
import NotFoundPage from './components/NotFoundPage.js';
import ScrollToTop from './components/ScrollToTop.js';
import PersonsData from './data/persons.json';
import StickersData from './data/stickers.json';
import MenuData from './data/menu.json';
import './css/App.css';
import './css/bootstrap.min.css';



class App extends Component {


  constructor(props){
    super(props);
    this.state = {
      filterText: '',
      selectedCard: '',
      selectedLocation: '1'
    }
  }

  // function that takes a value that updates the filterText
  filterUpdate(value) {
    this.setState({
      filterText: value
    })
  }

  // function updates selectedCard passed from Person to Bio
  cardUpdate(value) {
    this.setState({
      selectedCard: value,
      selectedLocation: value.locations[0]
    })
  }

  // function updates selectedLocation passed between Bio and Biosidebar
  locationUpdate(value) {
    this.setState({
      selectedLocation: value
    })
  }

  render () {

    return (
      <Router>
        <ScrollToTop />
        <div className='App'>

          <div className='row no-gutters'>
            <div className='col-3 position-fixed'>
              <div className="Menu">
                <Menu
                  data={MenuData}
                />
              </div>

            </div>


            {/* MOBILE NAVBAR */}
            <div className="Navbar d-flex d-md-none">
              <Navbar
              />
            </div>


            <div className='offset-md-3 col-12 col-md-9 '>

              <Switch>
                <Route exact path="/"
                  render={() =>
                    <div>
                      <div className="Search d-none d-md-flex">
                        <Search
                          filterText={this.state.filterText}
                          filterUpdate={this.filterUpdate.bind(this)}
                        />
                      </div>


                      <Person
                        data={PersonsData}
                        filterText={this.state.filterText}
                        selectedCard={this.state.selectedCard}
                        cardUpdate={this.cardUpdate.bind(this)}
                      />
                    </div>}
                />

                {/* changed here from "/bio"} */}
                <Route exact path="/bio"
                  render={() =>
                    <div className="row no-gutters">
                      <div className="col-12 col-md-8">
                        <Bio
                          selectedCard={this.state.selectedCard}
                          selectedLocation={this.state.selectedLocation}
                          locationUpdate={this.locationUpdate.bind(this)}
                        />
                      </div>

                      <div className="d-none d-md-block col-md-4">
                        <BioSidebar
                          selectedLocation={this.state.selectedLocation}
                          locationUpdate={this.locationUpdate.bind(this)}
                        />
                      </div>
                    </div>
                  }
                />

                {/* Mobile bio side bar link */}
                <Route exact path="/more-info"
                  render={() =>
                    <div className="row no-gutters">

                      <div className="col-12 d-block d-md-none">
                        <BioSidebar
                          selectedLocation={this.state.selectedLocation}
                          locationUpdate={this.locationUpdate.bind(this)}
                        />
                      </div>

                    </div>
                  }
                />



                <Route exact path="/about"
                  render={() =>
                    <div>
                      <About
                        data={PersonsData}
                        stickers={StickersData}
                      />
                    </div>
                  }
                />

                <Route exact path="/submit"
                  render={() =>
                    <div>
                      <Submit />
                    </div>
                  }
                />

                <Route component={NotFoundPage} />

              </Switch>

            </div>
          </div>
        </div>
      </Router>
    )
  }
}


export default App;
