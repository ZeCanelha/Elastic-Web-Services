import React from 'react';
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
            <form>
                Login <input type="text" value={this.state.login} onChange={this.handleLoginChange}/> <br/>
                Password <input type="password" value={this.state.password} onChange={this.handlePasswordChange}/> <br/>
                <input type="button" value="submit" onClick={this.props.login.bind(this.props.parent, this.state.login, this.state.password)}/>
            </form>
        )
    }
}


export default Login
