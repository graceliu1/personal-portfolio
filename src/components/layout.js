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
} from './layout.module.css'

import { FaEnvelopeSquare } from "@react-icons/all-files/fa/FaEnvelopeSquare";
import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin";
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram";

/*
        <a> <FaEnvelopeSquare className = {socialIcon} /> </a>
        <a> <FaLinkedin className = {socialIcon}/></a>
        <a> <FaInstagram className = {socialIcon}/></a>

        <ul className={navLinks}>
            <li className={navLinkItem}>
              <Link to="/" className={navLinkText} className={active}>
                Home
              </Link>
            </li>
            <li className={navLinkItem}>
              <Link to="/about" className={navLinkText}>
                Technology
              </Link>
            </li>
            <li className={navLinkItem}>
              <Link to="/about" className={navLinkText}>
                Arts
              </Link>
            </li>
          </ul>
*/
const Layout = ({ pageTitle, children }) => {
  return (
  
    <main className={container} >
      
      <title>{pageTitle}</title>
      
      <nav className = {siteHeader}>
        

        <a> <FaEnvelopeSquare className = {socialIcon} /> </a>
          <a> <FaLinkedin className = {socialIcon}/></a>
          <a> <FaInstagram className = {socialIcon}/></a>
          <Link to="/">
          <StaticImage className = {websiteLogo}
            alt="Personal Site Logo"
            src="../images/personal_website_logo.png"
          />
        </Link>
          
      </nav>
      
      {children}

      <div sectionName = "Footer" style = {{
        fontFamily: `'Cabin', 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif`,
        fontSize: '20px',
        fontWeight: 'bold',
        marginTop: '30px',
        marginBottom: '50px',
        textAlign: 'center',
        }}>
          <p>created by grace liu</p>
          <p style = {{fontSize: '10px'}}>p.s. this site was built with Gatsby - an open source frontend framework</p>
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