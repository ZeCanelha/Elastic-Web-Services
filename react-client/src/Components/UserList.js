import React from 'react';

class UserList extends React.Component {

  render()
  {
    var newData = null;

    if (this.props.searchName !== '' )
    {
      newData = this.props.usersData.filter( user => {
        return ( user.name.includes(this.props.searchName) );
      })
    }
    else {
      newData = this.props.usersData
    }

    const bodyData = newData.map(user => {
      return(
        <tr key={user.id}>
          <td>{user.name}</td>
          <td>{user.address}</td>
          <td className={user.status === 'Rejected' ? 'table-danger' : null}>{user.status}</td>
          <td>
            <button
              className="btn btn-info"
              onClick={() => this.props.expandUser(user.id)}>More</button>
          </td>
        </tr>
      )
    });

    return (
      <div className='table-wrapper'>
        <table className='table'>
          <thead>
             <tr>
               <th>Username</th>
               <th>Address</th>
               <th>Status</th>
               <th>+Info</th>
             </tr>
           </thead>
           <tbody>
             {bodyData}
           </tbody>
        </table>
      </div>

    );
  }
}

export default UserList;
