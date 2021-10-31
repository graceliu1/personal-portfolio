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

import website1_math from "../images/website1-math.png"
import website2_eluo from "../images/website2-eluo.png"
import website3_gma from "../images/website3-gma.png"
import website4_classify from "../images/website4-classify.png"

const ThirdPage = () => (
  <Layout>
    <Seo title="Technology" />
     
            
      <img style = {{boxShadow: ' 0px 2px 5px rgba(155, 155, 155, 0.8)'}} className = {websiteImage} src = {website1_math}/>
      <img style = {{boxShadow: ' 0px 2px 5px rgba(155, 155, 155, 0.8)'}} className = {websiteImage} src = {website2_eluo}/>
      <img style = {{boxShadow: ' 0px 2px 5px rgba(155, 155, 155, 0.8)'}} className = {websiteImage} src = {website3_gma}/>
      <img style = {{boxShadow: ' 0px 2px 5px rgba(155, 155, 155, 0.8)'}} className = {websiteImage} src = {website4_classify}/>
              
   
      <Section sectionTitle = "Short Biography" style = {{marginTop: '20px'}}>
         <div className = {sectionAboutMe}
         style = {{backgroundColor: 'rgb(250, 209, 198)'}}
      >
          
          <div className = {sectionContent} >
            <p className = {sectionName}>Full-Stack Projects</p>
            
            <p style = {{lineHeight: '1.5'}}>
            Text 1
            </p>

            <Link to="/"><Button linkDescription = "go back to the homepage" color = "greenButton"></Button></Link>
          </div>

          </div>
      </Section>

    <Section sectionTitle = "Robotics" style = {{marginTop: '20px'}}>
         <div className = {sectionAboutMe}
         style = {{backgroundColor: 'rgb(250, 209, 198)'}}
      >
          
          <div className = {sectionContent} >
            <p className = {sectionName}>Robotics</p>
            
            <p style = {{lineHeight: '1.5'}}>
            Text 1
            </p>

            <Link to="/"><Button linkDescription = "go back to the homepage" color = "greenButton"></Button></Link>
          </div>

          </div>
      </Section>



    

  </Layout>
)

export default ThirdPage
