import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.css';
import './style.css'


class App extends React.Component {

  constructor(props)
  {
    super(props)
    // TODO: Upload de imagens
    this.state = {
      homeAddress: '',
      password: '',
      email: ''
    }

  this.handleSubmit = this.handleSubmit.bind(this)
  this.handleChange = this.handleChange.bind(this)

  }

  handleChange(evt)
  {
    this.setState({[evt.target.name]: evt.target.value})
  }
  handleSubmit(evt)
  {
    console.log(this.state.email);
    evt.preventDefault()
  }

  render(){
    return (
      <div className = "signupForm">
        <form onSubmit={this.handleSubmit}>
          <div className = 'form-group'>
            <label for="email">
              Email
              <input type = 'email' className = 'form-control' name = 'email' placeholder = 'Your email here...' onChange={this.handleChange} />
            </label>
          </div>
          <div className = 'form-group'>
            <label for="homeAddress">
              Address
              <input type = 'text' className = 'form-control' name = 'homeAddress'  placeholder = 'Your address here...' onChange={this.handleChange} />
            </label>
          </div>
          <div className = 'form-group'>
            <label for="password">
              Password
              <input type = 'password' className = 'form-control' name = 'password' placeholder = 'Your password here...' onChange={this.handleChange}/>
            </label>
          </div>
          <button type="submit" value="Submit" className = 'btn btn-primary'>Submit</button>
        </form>
      </div>

    );

  }
}

ReactDOM.render(<App />, document.getElementById('signup'));
