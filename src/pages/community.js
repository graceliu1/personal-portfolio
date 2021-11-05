import * as React from "react"
import { Link } from "gatsby"

import {sectionName,
  sectionContainer,
  sectionContent,
  section2,
  section3,
  section4,} from '../components/section.module.css'

import {
  websiteSnippet,
  websiteImage,
  websiteDescription,
  sectionRobotics
} from '../components/technology.module.css'

import Layout from "../components/layout"
import Section from '../components/section'
import Button from '../components/button'
import Seo from "../components/seo"

import gma_award_ceremony_picture from "../images/gma_award_ceremony.png"
import girl_powered_picture from "../images/robotics_team2.png"


const FifthPage = () => (
  <Layout>
    <Seo title="Community" />
      <Section sectionTitle = "GMA Math Contest">
          <img className = {websiteImage} src = {gma_award_ceremony_picture} />
          <div className = {section2}>
             <div>
                <p className = {sectionName}> </p>
                <p>
                  In the summers of 2020 and spring of 2021, I organized an online 
                  math contest for girls in grades 5-8! We had a total of over 200 participants.
                  
                </p>
                <p>
                    We shifted our plans for the GMA Math Contest to a virtual format 
                    
                    
                </p>
             </div>
          </div>
      </Section>
      <div style = {{backgroundColor: 'light pink', height: '70px'}}>
        <a><p>check out a news article interview about our event in the local news!</p></a>
      </div>
  
      <Section sectionTitle = "Dublin Shield">
  
      </Section>
  
      <Section sectionTitle = "Spanish Honors Society">
  
      </Section>
    

  </Layout>
)

export default FifthPage
