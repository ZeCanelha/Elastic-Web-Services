import React from 'react';
import ReactDOM from 'react-dom';

class Manager extends React.Component {
  constructor(props)
  {
    super(props)
    this.state = {
      loading : false,
      usersData : {}
    }
  }

  componentDidMount()
  {
    //API call
    this.setState({loading : true})
    fetch("https://swapi.co/api/people/2")
      .then(response => response.json())
      .then(data => {
        //console.log(data);
        this.setState(
          {
            loading : false,
            usersData : data
          })
      })
  }

  render()
  {
    const text  = this.state.loading ? 'Loading..' : "Api do cu do rose aberto a bombar " + this.state.usersData.name
    return (
      <div >
          <h1>{text}</h1>
      </div>
    );
  }

}

ReactDOM.render(<Manager />, document.getElementById("signup"));
