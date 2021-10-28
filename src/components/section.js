import * as React from 'react'
import {
  section,
  sectionContainer,
} from './section.module.css'

const Section = ({ sectionTitle, sectionWidth, children }) => {
  return (
    <div className = {section} >
        <div className = {sectionContainer}>
        
            {children}
        </div>
       
    </div>
    
  )
}
export default Section