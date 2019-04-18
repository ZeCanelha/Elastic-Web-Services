import React from 'react';

class User extends React.Component {
  render(){
    console.log(this.props);
    return (
        <li key={this.props.key}>
            <p>{this.props.user.name},{this.props.user.mass}</p>
        </li>

    );
  }
}
export default User;
