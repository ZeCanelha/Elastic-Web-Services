import React from 'react';
import ReactDOM from 'react-dom';

import Navbar from './Components/Navbar.js';
import UserList from './Components/UserList.js'

import './style.css'
import 'bootstrap/dist/css/bootstrap.css';


class Manager extends React.Component {
  constructor(props)
  {
    super(props)
    this.state = {
      loading : false,
      load : false,
      usersData : {}
    }
  }

  componentDidMount()
  {
    //API call
    this.setState({loading : true})
    fetch("https://swapi.co/api/people/")
      .then(response => response.json())
      .then(data => {
        console.log(data);
        this.setState(
          {
            loading : false,
            load : true,
            usersData : data
          })
      })

  }


  render()
  {
    const text  = this.state.loading ? 'Loading..' : "All users in the system"

    return (
      <div className="layout">
        <Navbar />
        <div id="content">
          <div className = "displayLeft">
            <h1>{text}</h1>
          </div>
          <div className="displayRight">
            <h1>Expandable</h1>
          </div>

        </div>


        //<UserList usersData={this.state.usersData} load={this.state.load}/>
      </div>
    );
  }

}

ReactDOM.render(<Manager />, document.getElementById("myContainer"));
