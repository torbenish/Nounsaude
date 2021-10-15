import { useState } from "react";
import { NavStyle } from "./style";
import { Link } from "react-router-dom";
function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  return (
    <div>
      <NavStyle>
        <nav className="navbar">
          <Link to="/" className="navbar-logo">
          NOUN <i class='fa fa-transgender-alt'/>
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/assineja" className="nav-links" onClick={closeMobileMenu}>
                Assine já
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/blog" className="nav-links" onClick={closeMobileMenu}>
                Blog 
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/signup" className="nav-links" onClick={closeMobileMenu}>
                Fale Conosco
              </Link>
            </li>
            <Link to="/signup"><button type="button" class="btn btn-primary-outline">Como funciona</button></Link>
          </ul>
        </nav>
      </NavStyle>
    </div>
  );
}

export default Navbar;