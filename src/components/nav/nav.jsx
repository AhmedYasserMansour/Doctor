import './nav.css';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.png';

const NavBar = _ => {
  const navigate = useNavigate();
  const location = useLocation(); 
  const isDoctorPath = location.pathname.endsWith('/doctor');

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid m-0">
        <NavLink className="navbar-brand" to="/doctor">
          <img src={logo} alt="logo" />
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink
                className={({ isActive }) => `nav-link ${isActive && isDoctorPath ? 'active' : ''}`}
                aria-current="page"
                to="/doctor"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item dropdown">
              <NavLink
                className={({ isActive }) => `nav-link dropdown-toggle ${isActive ? 'active' : ''}`}  
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                to="/"
              >
                Pages
              </NavLink>
              <ul className="dropdown-menu">
                <li><NavLink className="dropdown-item" to="about">About Us</NavLink></li>
                <li><NavLink className="dropdown-item" to="ourteam">Our Team</NavLink></li>
                <li><NavLink className="dropdown-item" to="faqs">FAQs</NavLink></li>
                <li><NavLink className="dropdown-item" to="booking">Booking</NavLink></li>
                <li><NavLink className="dropdown-item" to="login">Login/Register</NavLink></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <NavLink
                className="nav-link dropdown-toggle"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                to="/"
              >
                Services
              </NavLink>
              <ul className="dropdown-menu">
                <li><NavLink className="dropdown-item" to="service">Service</NavLink></li>
                <li><NavLink className="dropdown-item" to="service-detail">Service Detail</NavLink></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <NavLink
                className="nav-link dropdown-toggle" 
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                to="/"
              >
                Blogs
              </NavLink>
              <ul className="dropdown-menu">
                <li><NavLink className="dropdown-item" to="blog">Blog</NavLink></li>
                <li><NavLink className="dropdown-item" to="blog-details">Blog Details</NavLink></li>
              </ul>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                aria-current="page" 
                to="contact"
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
          <button onClick={() => navigate("contact")} className="contact-btn ms-4">
            Contact Us <i className="fa-solid fa-chevron-right"></i>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
