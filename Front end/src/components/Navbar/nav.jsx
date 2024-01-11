import { NavLink } from "react-router-dom";
import "./nav.css";

function Nav() {
  
  const handleLogout = async () => {
    try {
      localStorage.clear();
      console.log("successfully logged out");
    } catch (err) {
      console.error("Error:", err);
    }
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg px-3 py-1">
        <div className="container ">
          <NavLink to="/home" className="nav-link">
            <img src="https://cdn-icons-png.flaticon.com/512/2210/2210184.png" className="logo" alt="Logo" width="70" height="70"/>
            <span className="px-3 logo-text align-middle">Web Development</span>
          </NavLink>
          <div className="d-flex justify-content-between">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" 
              data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown"
              aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
          <div className="collapse navbar-collapse flex-grow-0" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink to="/home" className="nav-link fw-bold"><i className="bi bi-house-door-fill"> Home</i></NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/profile" className="nav-link fw-bold"><i className="bi bi-person-circle"> Profile</i></NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/login" className="nav-link fw-bold" onClick={handleLogout}><i className="bi bi-door-open-fill"></i></NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;
