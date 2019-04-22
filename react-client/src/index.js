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
      searchName :'',
      show : -1,
      loading : false,
      load : false,
      usersData : ApiDummyData
    }

    this.expandUser = this.expandUser.bind(this)
    this.removeUser = this.removeUser.bind(this)
    this.handleSearch = this.handleSearch.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

  }

  handleSearch(evt)
  {
    console.log(evt.target.value);
    const name = evt.target.name;

    this.setState({
      [name]: evt.target.value
    });
  }

  handleSubmit(evt)
  {
    //TODO: fazer a search
    evt.preventDefault();
  }

  expandUser(index){
    this.setState((prevState) => ({
      show : index
    }))

  }

  removeUser(index){
    this.setState((prevState) => ({
      usersData: prevState.usersData.filter( user => {
        return user.id !== index
      }),
      show : -1
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
    console.log(this.state.usersData);
    //const text  = this.state.loading ? 'Loading..' : "All users in the system"
    return (
      <div className="layout">
        <Navbar />
        <div id="content">
          <div className = "displayLeft">
            <form onSubmit={this.handleSubmit}>
               <div className="form-group">
                 <label htmlFor='Search'>
                   <input
                    type='text'
                    name='searchName'
                    className='form-control'
                    placeholder='Search user ...'
                    onChange={this.handleSearch} />
                 </label>
                 <button
                   type="submit"
                   className="btn btn-primary">Submit</button>
              </div>
            </form>

            <UserList
              usersData={this.state.usersData}
              expandUser={this.expandUser}
              searchName={this.state.searchName}/>
          </div>
          <div className="displayRight">
              <DisplayUser
                index={this.state.show}
                info={this.state.usersData}
                remove={this.removeUser}/>
          </div>
        </div>
      </div>
    );
  }

}

ReactDOM.render(<Manager />, document.getElementById("myContainer"));
