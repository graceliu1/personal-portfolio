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
import shield_staff_meeting_picture from "../images/shield_staff_meeting.png"


const FifthPage = () => (
  <Layout>
    <Seo title="Community" />
      <Section sectionTitle = "GMA Math Contest">
          <img style = {{width: '70%'}} src = {gma_award_ceremony_picture} />
          <div className = {section2}>
             <div>
                <p className = {sectionName}>Girls Math Association - Annual Math Contest</p>
                <p>
                  In the summers of 2020 and spring of 2021, I organized an online 
                  math contest for girls in grades 5-8! We had a total of over 200 participants.
                  
                </p>
                <p>
                    Inspired by a similar event I attended when I was in middle school, 
                      my team and I decided to make this a virtual experience due to COVID-19.  
                    
                    
                </p>
                <p><small>photos are used with parental permission, last names removed for privacy</small></p>
                
             </div>
          </div>
      </Section>
      <Section> 
            <div className = {section3} style = {{width: '100%'}}>
                 <a href = 'https://www.independentnews.com/news/high-school-hosts-online-math-contest-for-girls/article_58ce4406-c63b-11ea-bd6a-fb38b2a180e9.html'><p>a news article interview about our event in the local news!</p></a>
            </div>
      </Section>
        
      <img style = {{width: '100%'}} src = {shield_staff_meeting_picture} />
      <Section sectionTitle = "Dublin Shield">
          <div className = {section4}>
            <p className = {sectionName}></p>
            <p>A staff meeting at lunch for the Dublin Shield -- my high school's student newspaper. </p>
          </div>
      </Section>
  
      <Section sectionTitle = "Spanish Honors Society">
  
      </Section>
    
<p><em>this page is currently under ~intensive~ developement</em></p>

  </Layout>
)

export default FifthPage
