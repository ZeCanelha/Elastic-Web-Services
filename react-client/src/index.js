import React from 'react';
import ReactDOM from 'react-dom';

import Navbar from './Components/Navbar.js';
import UserList from './Components/UserList.js'
import DisplayUser from './Components/DisplayUser.js'

import ApiDummyData from './ApiDummyData.js'
import './style.css'
import 'bootstrap/dist/css/bootstrap.css';


class Manager extends React.Component {
  constructor(props)
  {
    super(props)

    this.state = {
      show : -1,
      loading : false,
      load : false,
      usersData : ApiDummyData
    }

    this.expandUser = this.expandUser.bind(this)

  }

  expandUser(index){
    this.setState((prevState) => ({
      show : index
    }))


  }

  // componentDidMount()
  // {
  //   //API call -> promise
  //   this.setState({loading : true})
  //   fetch("https://swapi.co/api/people/")
  //     .then(response => response.json())
  //     .then(data => {
  //       console.log(data);
  //       this.setState(
  //         {
  //           loading : false,
  //           load : true,
  //           usersData : data
  //         })
  //     })
  //
  // }


  render()
  {
    const text  = this.state.loading ? 'Loading..' : "All users in the system"
    console.log(this.state.show);
    return (
      <div className="layout">
        <Navbar />
        <div id="content">
          <div className = "displayLeft">
            <h1>{text}</h1>
            <UserList usersData={this.state.usersData} expandUser={this.expandUser}/>
          </div>
          <div className="displayRight">
              <DisplayUser index={this.state.show} info={this.state.usersData}/>
          </div>
        </div>
      </div>
    );
  }

}

ReactDOM.render(<Manager />, document.getElementById("myContainer"));
