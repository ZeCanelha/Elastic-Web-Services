import React from 'react';
import ReactDOM from 'react-dom';

import Login from './Components/Login.js'
import APIUsers from "./Components/APIUsers"

import './style.css'
import 'bootstrap/dist/css/bootstrap.css';


class Manager extends React.Component {
  constructor(props)
  {
    super(props)

    this.state = {
      adminUsername : '',
      adminPassword : '',
      token : undefined,
      searchName :'',
      show : -1,
      loading : false,
      load : false,
      errormessage : undefined,
      usersData : {}
    }

    this.expandUser = this.expandUser.bind(this)
    this.removeUser = this.removeUser.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)

  }


  /*
   *
   * TODO:
   *    *
   * Functions to handle administrator login
   * handleLoginChange sets state with respective adminUsername and adminPassword
   * handleLoginSubmit executes a POST request to confirm login and in return gets the access authToken
   * used as the authorizer
   *
   */

   handleChange(evt)
   {
     const name = evt.target.name;

     this.setState({
       [name]: evt.target.value
     });
   }

   authenticated(token) {
        this.setState({ token : token, errormessage : undefined })
    }

    failedauthenticated() {
        this.setState({ token : undefined, errormessage : 'Authentication Error' })
    }

   doLogin(login,password)
   {
     var theobject = this
     var formParameters = {
        method: 'POST', // or 'PUT'
        body: JSON.stringify({ 'adminUsername': login, 'adminPassword' : password}),
        headers:{
          'Content-Type': 'application/json'
            }
        }

     fetch('https://or7ea8wax8.execute-api.us-east-1.amazonaws.com/register/login', formParameters)
        .then(function(data) {
          if (data.status!== 200) {
            theobject.failedauthenticated()
            throw new Error(data.status)
          }
          else {
                var json = data.json();
                return json;
          }
        })
        .then(function(thetoken) {
            console.log('message =', thetoken)
            if ('token' in thetoken)
                theobject.authenticated(thetoken['token'])
        }).catch(function(error) {
          console.log('There has been a problem with your fetch operation: ', error.message);
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

  approveUser(index){
      //TODO
  }


  render()
  {
    //const text  = this.state.loading ? 'Loading..' : "All users in the system"

    console.log(this.state.token);

     if (this.state.errormessage !== undefined)
         var errormessage = <h2>{this.state.errormessage}</h2>
     else
         var errormessage = <div/>
     if (this.state.token === undefined)
         return (
             <div>
                 {errormessage}
                 <Login parent={this} login={this.doLogin}
                   />
             </div>
         )
     else
         return (
           <APIUsers token={this.state.token} />
         )
  }

}

ReactDOM.render(<Manager />, document.getElementById("myContainer"));
