import React from 'react';

/* Admin login component
  *
  * POST : Para mandar as informações de Login
  *
*/

class Login extends React.Component {

  render()
  {
    return(
      <div className = 'adminLogin'>
        <form onSubmit={this.props.submit}>
          <div className='form-group'>
            <label htmlFor="Username">
              Username
              <input
                type = 'text'
                name = 'adminPassword'
                className = 'form-control'
                onChange = {this.props.change} />
            </label>
          </div>
          <div className='form-group'>
            <label htmlFor="Password">
              Password
              <input
                type = 'password'
                name = 'adminUsername'
                className = 'form-control'
                onChange = {this.props.change} />
            </label>
          </div>
          <button
            type="submit"
            className="btn btn-primary">Login</button>
        </form>
      </div>

    )
  }

}

export default Login
