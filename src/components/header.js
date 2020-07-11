import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Logo from './assets/svg/everestRoofingLogo.svg';
import LogoMobile from './assets/svg/LogoMobile.svg';

const Header = ({ siteTitle }) => (
  <div className="header">
    <div className="logoGroup">
      {/* Smaller logo for mobile devices */}
      <div className="mobile_logo">
        <LogoMobile />
      </div>
      <div className="regular_logo">
        <Logo />
      </div>
      <p> Everest Roofing {'&'} Plumbing</p>
    </div>
    <ul className="header-list">
      <li className="header-items"><Link to="/" activeClassName="active">Home</Link></li>
      <li className="header-items"><Link to="/services" activeClassName="active">Services</Link></li>
      <li className="header-items"><Link to="/about-us" activeClassName="active">About Us</Link></li>
      <li className="header-items"><Link to="/contact-us" activeClassName="active">Contact Us</Link></li>
    </ul>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
