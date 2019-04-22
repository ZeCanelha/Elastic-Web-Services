import React from 'react'


function searchId(array, element)
{

  for (var i in array) {
    if (array[i].id === element) {
        return i;
    }
  }
  return -1;
}

class DisplayUser extends React.Component {


  render()
  {

    let i = searchId(this.props.info,this.props.index)

    return(
      <div className="displayUser">
        <div className='textInfo'>
          {this.props.index >= 0 ? <img src="https://static.thenounproject.com/png/17241-200.png" alt='John Doe'></img> : null}
          <h3>
            {}
            {this.props.index >= 0 ? this.props.info[i].name : null}
          </h3>
          <h4>
            {this.props.index >= 0 ? this.props.info[i].address : null}
          </h4>
        </div>

        <div className="managerMethods">
          {this.props.index >= 0 ?
            <button  className="btn btn-info"
            onClick={() => this.props.remove(this.props.info[i].id)}>Delete User</button> :
            null}
        </div>
      </div>
    )

  }
}

export default DisplayUser
