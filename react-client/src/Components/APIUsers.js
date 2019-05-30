import React from 'react';

import '../style.css'
import 'bootstrap/dist/css/bootstrap.css';

import Navbar from './Navbar.js';
import UserList from './UserList.js'
import DisplayUser from './DisplayUser.js'


class APIUsers extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          date : '',
          searchName :'',
          show : -1,
          loading : false,
          load : false,
          errormessage : undefined,
          usersData : undefined
      };

      this.expandUser = this.expandUser.bind(this)
      this.removeUser = this.removeUser.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)
      this.handleChange = this.handleChange.bind(this)

    }

    handleChange(evt)
    {
      const name = evt.target.name;

      this.setState({
        [name]: evt.target.value
      });
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

    componentWillMount() {
        var theobject = this
        console.log('this =', this)
        console.log('this.props =', this.props)
        fetch("https://or7ea8wax8.execute-api.us-east-1.amazonaws.com/register/listallusers", {
            headers:{
              //'authorizationToken' : JSON.stringify({ 'token' : this.props.token })
              'Content-Type': 'application/json',
              'Accept': 'application/json'
            }
        }).then(data => data.json())
          .then(thedate => theobject.setState({usersData : thedate}))
          .catch(function(error) {
            console.log('There has been a problem with your fetch operation: ', error.message);
           });
    }

    render() {

      console.log('usersData =', this.state.usersData)

      if (this.state.usersData !== undefined) {
        return(
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
                        onChange={this.handleChange} />
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
                    remove={this.removeUser}
                    approve={this.approveUser}/>
              </div>
            </div>
          </div>
        )
      }
      else {
        return(
          <div className="layout">
            <Navbar />
            <h1>Loading information from API</h1>
          </div>

        )
      }


    }
}

export default APIUsers
