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
    let a = null
    if(this.props.index >= 0)
    {
      var image = "data:image/jpg;base64," + this.props.info[i].image
      var imageStyle = {
          height : '250px',
          width : '400px'
      }
      if (this.props.info[i].status === 0) {
        a = <button className="btn btn-info"
                onClick={() => this.props.approve(this.props.info[i].id)}>Approve User</button>
      }
      else {
        a = null;
      }
    }


    return(
      <div className="displayUser">
        <div className='textInfo'>
          {this.props.index >= 0 ? <img src={image} alt='John Doe' style ={imageStyle}></img> : null}
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
            <button className="btn btn-info"
                    onClick={() => this.props.remove(this.props.info[i].id)}>Reject User</button> : null}
          {a}
        </div>
      </div>
    )

  }
}

export default DisplayUser
