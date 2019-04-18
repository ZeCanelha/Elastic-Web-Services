import React from 'react';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className='container-fluid'>
        <a className="navbar-brand" href="#">
          <img src='http://icons.iconarchive.com/icons/pelfusion/long-shadow-media/512/Settings-icon.png'
            style={{"width" : "80px", "padding" : "20px" }} alt ='logo'></img>
            Manager Interface
          </a>
        <button type="button" id="sidebarCollapse" className="btn btn-dark">
            <i className="fas fa-power-off"></i>
              <span style={{"padding" : "10px" }} className="navbar-text">
                Logout
              </span>
        </button>
      </div>
    </nav>
  );
}

export default Navbar
