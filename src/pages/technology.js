import * as React from "react"
import { Link } from "gatsby"

import {sectionName, 
  sectionContent,
  sectionAboutMe} from '../components/section.module.css'

import {
  websiteImage,
  sectionRobotics
} from '../components/technology.css'

import Layout from "../components/layout"
import Section from '../components/section'
import Button from '../components/button'
import Seo from "../components/seo"

import website1_math from "../images/website1_math.png"
import website2_eluo from "../images/website2_eluo.png"
import website3_gma from "../images/website3_gma.png"
import website4_classify from "../images/website4_classify.png"

import robot1 from "../images/robot1.png"
import robot2 from "../images/robot2.jpg"
import robot3 from "../images/robot3.jpg"
import robot4 from "../images/robot4.jpg"

const ThirdPage = () => (
  <Layout>
    <Seo title="Technology" />
       <p className = {sectionName}>Code Garden</p>
  

  <img  className = {websiteImage} src = {website1_math}/>
  <img style = {{margin: '10px 15px 10px 15px', boxShadow: ' 0px 2px 5px rgba(155, 155, 155, 0.8)', maxHeight: '300px'}} className = {websiteImage} src = {website2_eluo}/>
  <img style = {{margin: '10px 15px 10px 15px', boxShadow: ' 0px 2px 5px rgba(155, 155, 155, 0.8)', maxHeight: '300px'}} className = {websiteImage} src = {website3_gma}/>
  <img style = {{margin: '10px 15px 10px 15px', boxShadow: ' 0px 2px 5px rgba(155, 155, 155, 0.8)', maxHeight: '300px'}} className = {websiteImage} src = {website4_classify}/>


      
    <Section sectionTitle = "Robotics" style = {{marginTop: '20px', minWidth: '80%'}}>
         <div className = {sectionRobotics} style = {{backgroundColor: 'rgb(120, 235, 177)'}}>
          
          <div className = {sectionContent} >
            <p className = {sectionName}>Robotic Field</p>
            
            <p>
            I'm a member of our schoool robotics club. 
            </p>

            <Link to="/"><Button linkDescription = "go back to the homepage" color = "greenButton"></Button></Link>
          </div>

          </div>
      </Section>
    <img style = {{margin: '10px 10px 10px 10px', width: '150px'}} src = {robot1}/>
      <img style = {{margin: '10px 10px 10px 10px', width: '150px'}} src = {robot2}/>
        <img style = {{margin: '10px 10px 10px 10px', width: '150px'}} src = {robot3}/>
          <img style = {{margin: '10px 10px 10px 10px', width: '150px'}} src = {robot4}/>
      



    

  </Layout>
)

export default ThirdPage
