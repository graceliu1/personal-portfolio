import * as React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

import { FaAngleRight} from "@react-icons/all-files/fa/FaAngleRight";
import './main.module.css'
import {
    arrowIcon,
    buttonText,
    pinkButton, 
    greenButton,
} from "./main.module.css"

const Button = ({ linkDescription, color, children }) => {
    return (
        <a href = "google.com" target = "_blank">
            <button className = {buttonText} >
                {linkDescription}
                <FaAngleRight className = {arrowIcon} />
            </button>
            
        </a>
        
        
    )
  }

  export default Button