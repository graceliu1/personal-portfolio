import * as React from "react"
import { Link } from "gatsby"

import {sectionName,
  sectionContainer,
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

const FourthPage = () => (
  <Layout>
    <Seo title="Music and Poetry" />
       
    <Section sectionTitle = "Poetry">

      <div className = {sectionRobotics} style = {{backgroundColor: '#ffde85', maxWidth: '70%'}}>
        <div style = {{margin: '30px'}}>
          <p className = {sectionName}>Poetry</p>
          
          <p> Why do I write poetry? It started as a habit in middle school. For me, poetry is how I express curious thoughts in 
          curious formats. There's a thousand small stories that I want to tell through words. 

          </p>
          <p> 
          My favorite poets are: Christina Rossetti and Pablo Neruda. 
          
          </p>

        </div>
      </div>
      
    </Section>
    
    <Section sectionTitle = "Music">

      <div className = {sectionRobotics} style = {{backgroundColor: '#ffde85', maxWidth: '70%'}}>
        <div style = {{margin: '30px'}}>
          <p className = {sectionName}>Music</p>
          
          <p> Why do I write poetry? It started as a habit in middle school. For me, poetry is how I express curious thoughts in 
          curious formats. There's a thousand small stories that I want to tell through words. 

          </p>
          <p> 
          My favorite poets are: Christina Rossetti and Pablo Neruda. 
          
          </p>

        </div>
      </div>
      
    </Section>


    

  </Layout>
)

export default FourthPage
