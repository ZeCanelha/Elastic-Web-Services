import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../style.css'
/* Admin login component
  *
  * POST : Para mandar as informações de Login
  *
*/

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {login : '', password : ''}

        this.handleLoginChange = this.changeLogin.bind(this);
        this.handlePasswordChange = this.changePassword.bind(this);
    }

    changeLogin(event) {
        this.setState({ login : event.target.value })
    }

    changePassword(event) {
        this.setState({ password : event.target.value })
    }

    render () {
        return (
          <div className = 'adminLogin'>
            <h3>Manager Login</h3>
            <form>
              <div className = 'form-group'>
                Login
                <input className='form-control'
                type="text"
                value={this.state.login}
                onChange={this.handleLoginChange}
                />
              </div>
              <div className = 'form-group'>
                Password <input
                className='form-control'
                type="password" value={this.state.password}
                onChange={this.handlePasswordChange}
                />
              </div>
              <div className = 'form-group'>
                <input
                  type="button"
                  value="Login"
                  onClick={this.props.login.bind(this.props.parent, this.state.login, this.state.password)}
                  className = 'btn btn-primary'
                  />
              </div>

            </form>
          </div>

        )
    }
}


export default Login
