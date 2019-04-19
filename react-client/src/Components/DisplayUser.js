import React from 'react'


class DisplayUser extends React.Component {

  render()
  {

    console.log(this.props.index);
    return(
      <div className="displayUser">
        {this.props.index >= 0 ? <img src="https://static.thenounproject.com/png/17241-200.png" alt='John Doe'></img> : null}
        <h2>
          {this.props.index >= 0 ? 'Username: ' + this.props.info[this.props.index].name : null}
        </h2>
        <h3>
          {this.props.index >= 0 ? 'Address: ' + this.props.info[this.props.index].address : null}
        </h3>
      </div>
    )

  }
}

export default DisplayUser
