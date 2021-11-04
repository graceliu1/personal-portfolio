import * as React from "react"
import { Link } from "gatsby"

import {sectionName,
  sectionContainer,
  sectionContent,
  sectionAboutMe} from '../components/section.module.css'

import {
  websiteImage,
  sectionRobotics
} from '../components/technology.module.css'

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

import team_award_picture from "../images/robotics_team1.jpg"
import girl_powered_picture from "../images/robotics_team2.png"

/**
          <Link to="/page-2/"><Button linkDescription = "see my projects" color = "pinkButton"></Button></Link>
          **/


/***

old code for website photos:
style = {{margin: '10px 15px 10px 15px', boxShadow: ' 0px 2px 5px rgba(155, 155, 155, 0.8)', maxWidth: '50%'}} 


***/
const ThirdPage = () => (
  <Layout>
    <Seo title="Technology" />
  
      <Section sectionTitle = "Code Garden">

          <div style = {{backgroundColor: '#c9ffd1'}}>
            <div style = {{margin: '40px'}}>
              <p className = {sectionName}>Code Garden</p>
               <p>&#60; a collection of some of my full-stack work is shown below. hover over the images to see details. &#62;</p>


            </div>
          </div>

        </Section>

         

  <img className = {websiteImage} src = {website1_math}/>
  <img className = {websiteImage} src = {website2_eluo}/>
  <img className = {websiteImage} src = {website3_gma}/>
  <img className = {websiteImage} src = {website4_classify}/>


        
    <Section sectionTitle = "Robotics">

      <div className = {sectionRobotics} style = {{backgroundColor: '#ffde85', maxWidth: '70%'}}>
        <div style = {{margin: '30px'}}>
          <p className = {sectionName}>Robotics Field</p>
          
          <p>
             One of the best parts of my robotics experience was experimenting with various builds. Through taking mechanisms apart and trying new designs, I
              learned VEX Robotics. These pictures are combined from years on teams 5327R, 5327C, and 5327X. I've learned how to use the mechanical components 
              and how they can be integrated with programming to create successful robots. 

          </p>

        </div>
      </div>
      
    </Section>
    <img style = {{maxWidth: '500px'}} src = {team_award_picture}/>

    <img style = {{margin: '10px 10px 10px 10px', maxHeight: '300px'}} src = {robot1}/>
    <img style = {{margin: '10px 10px 10px 10px', maxHeight: '300px'}} src = {robot2}/>
    <img style = {{margin: '10px 10px 10px 10px', maxHeight: '300px'}} src = {robot3}/>
    <img style = {{margin: '10px 10px 10px 10px', maxHeight: '300px'}} src = {robot4}/>
      

     <img style = {{maxWidth: '500px'}} src = {girl_powered_picture}/>


    

  </Layout>
)

export default ThirdPage
