import * as React from "react"
import { Link } from "gatsby"

import {sectionName, 
  sectionContent,
  sectionAboutMe} from '../components/section.module.css'


import Layout from "../components/layout"
import Section from '../components/section'
import Button from '../components/button'
import Seo from "../components/seo"

const ThirdPage = () => (
  <Layout>
    <Seo title="Technology" />

   
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
