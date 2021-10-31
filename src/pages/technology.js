import * as React from "react"
import { Link } from "gatsby"

import {sectionName, 
  sectionContent,
  sectionAboutMe} from '../components/section.module.css'

import {
  websiteImage,
} from '../components/technology.css'

import Layout from "../components/layout"
import Section from '../components/section'
import Button from '../components/button'
import Seo from "../components/seo"

import figureBear from "../images/portfolio_bear.png"
import math from "../images/website1_math.PNG"

const ThirdPage = () => (
  <Layout>
    <Seo title="Technology" />
       <p>Hello</p>
          
  <img src = {figureBear} />
      
    <Section sectionTitle = "Robotics" style = {{marginTop: '20px'}}>
         <div className = {sectionAboutMe}
         style = {{backgroundColor: 'rgb(120, 235, 177)'}}>
          
          <div className = {sectionContent} >
            <p className = {sectionName}>Robotic Field</p>
            
            <p>
            I'm a member of our schoool robotics club. 
            </p>

            <Link to="/"><Button linkDescription = "go back to the homepage" color = "greenButton"></Button></Link>
          </div>

          </div>
      </Section>



    

  </Layout>
)

export default ThirdPage
