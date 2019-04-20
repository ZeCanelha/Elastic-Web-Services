import React from 'react';

class UserList extends React.Component {

  render()
  {
    const bodyData = this.props.usersData.map((user,index) => {
      return(
        <tr key={index}>
          <td>{user.name}</td>
          <td>{user.address}</td>
          <td className={user.status=='Rejected' ? 'table-danger' : null}>{user.status}</td>
          <td>
            <button  className="btn btn-info" onClick={() => this.props.expandUser(index)}>More</button>
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
