import * as React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

import {
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText,
  siteHeader,
  socialIcon,
  websiteLogo,
  active,
  navbar,
} from './layout.module.css'

import { FaEnvelopeSquare } from "@react-icons/all-files/fa/FaEnvelopeSquare";
import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin";
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram";

/*
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Row from 'react-bootstrap/Row'

import 'bootstrap/dist/css/bootstrap.min.css';*/
/*
        <a> <FaEnvelopeSquare className = {socialIcon} /> </a>
        <a> <FaLinkedin className = {socialIcon}/></a>
        <a> <FaInstagram className = {socialIcon}/></a>

       
*/
/*
OLD NAVBAR



      <Navbar expand = "lg" className = {siteHeader}>
        <Navbar.Brand href="/">
          <StaticImage className = {websiteLogo}
            alt="Personal Site Logo"
            src="../images/personal_website_logo.png"
          />

        </Navbar.Brand>
          


        <Nav>
          <Nav.Link className={navLinkText} className={active} href="#home">Home</Nav.Link>
          <Nav.Link className={navLinkText} href="#features">Technology</Nav.Link>
          <Nav.Link className={navLinkText} href="#pricing">Arts</Nav.Link>
          <div style = {{float: 'right'}}>
          <a> <FaEnvelopeSquare className = {socialIcon} /> </a>
          <a> <FaLinkedin className = {socialIcon}/></a>
          <a> <FaInstagram className = {socialIcon}/></a>
        </div>
        </Nav>

        
          

          
    </Navbar>
      

*/
const Layout = ({ pageTitle, children }) => {
  return (
  
    <main  >
      
      <title>{pageTitle}</title>
      
      <nav className = {siteHeader}>
          <div className = {navbar} style = {{paddingTop: '20px'}}>
          <Link to="/">
            <StaticImage className = {websiteLogo}
              alt="Personal Site Logo"
              src="../images/website_logo.png"
            />
          </Link>

          <div style = {{alignSelf: 'center'}}>
          <ul className={navLinks}>
            <li className={navLinkItem}>
              <Link to="/" className={navLinkText}>
                Home
              </Link>
            </li>
            <li className = {navLinkItem}>
                <Link to="/community" className={navLinkText}>
                  Community
                </Link>
            </li>
            <li className={navLinkItem}>
              <Link to="/technology" className={navLinkText}>
                Technology
              </Link>
            </li>
            <li className={navLinkItem}>
              <Link to="/music-and-poetry" className={navLinkText}>
                Music and Poetry
              </Link>
            </li>
          </ul>
        
          </div>
          </div>
           
          
      </nav>
      
      <div style = {{marginTop: '120px'}} className={container}>
      {children}

      <div sectionName = "Footer" style = {{
        fontFamily: `'Cabin', 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif`,
        fontSize: '20px',
        marginTop: '30px',
        marginBottom: '50px',
        textAlign: 'center',
        }}>
          <p>created by grace liu</p>
          <p style = {{fontSize: '10px'}}>p.s. this site was built with Gatsby - an open source frontend framework</p>
        </div>
      </div>
    </main>
  )
}
/*
TO PRINT OUT THE PAGE TITLE:
<h1 className={heading}>{pageTitle}</h1>

FOR  THE ORIGINAL NAV BAR:
<ul className={navLinks}>
  <li className={navLinkItem}>
    <Link to="/" className={navLinkText}>
      Home
    </Link>
  </li>
  <li className={navLinkItem}>
    <Link to="/about" className={navLinkText}>
      About
    </Link>
  </li>
</ul>
*/

/*
ORIGINAL SECTION OF SOCIAL MEDIA ICONS
<Link to="/">
          <StaticImage className = {websiteLogo}
            alt="Personal Site Logo"
            src="../images/personal_website_logo.png"
          />
        </Link>
        <Link to="google.com">
          <StaticImage className = {socialIcon}
            alt="Mail Icon"
            src="../images/mail_icon.png"
          />
        </Link>
        <Link to="linkedin.com">
          <StaticImage className = {socialIcon}
            alt="Linkedin Icon"
            src="../images/linkedin_icon.png"
          />
        </Link>
        <Link to="instagram.com">
          <StaticImage className = {socialIcon}
            alt="Instagram Icon"
            src="../images/instagram.png"
          />
        </Link>
*/
export default Layout
