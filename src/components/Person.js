import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Bio from './Bio.js';
import '../css/Person.css';
import '../css/bootstrap.min.css';



class Person extends Component {

  // function that sends selectedCard from input to parent cardUpdate
  cardUpdate(person) {
    this.props.cardUpdate(person);
  }

  render() {

    const data = this.props.data;
    {/*
    const filterText = this.props.filterText;
    const selectedCard = this.props.selectedCard;
    */}

    // creating constant that filters data based on filterText and returns all valid entries
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/">
              {
                data.map((person)=>
                <div key={person.id} className="">
                  <Link to={"/user/"+person.id} onClick={this.cardUpdate.bind(this, person)}>
                    <div className='card-container '>
                      <div className='card person mb-0'>
                        <div className="card-content" key={person.id}>
                          <div className='card-image'>
                            <img src={person.cardImage}></img>
                          </div>
                          <h1 className="mt-3">{person.town}, {person.stateAbbrv}</h1>
                          <h3 className="lead"> by {person.firstName} {person.lastName}</h3>
                        </div>
                      </div>
                    </div>

                  </Link>
                </div>)
              }
            </Route>

            <Route exact path="/user/:id">
              <Bio />
            </Route>

          </Switch>
        </Router>
      </div>
        )
      }

  }

export default Person;
