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

/**** start of import statements for button ****/
import {
  arrowIcon,
  buttonText,
} from "../components/main.module.css"

import { FaAngleRight} from "@react-icons/all-files/fa/FaAngleRight";
/**** end of import statements for button ****/

const FifthPage = () => (
  <Layout>
    <Seo title="Community" />
      <Section sectionTitle = "GMA Math Contest">
          <div>
          <img style = {{maxWidth: '45%'}} src = {gma_award_ceremony_picture} />
          </div>
          <div className = {section2} style = {{marginLeft: '20px', minWidth: '45%'}}>
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
                <a href = "https://girlsmathassociation.com/contest.php" target = "_blank">
                      <button className = {buttonText} >
                         see an overview of our contest
                              <FaAngleRight className = {arrowIcon} />
                      </button>
                </a>
                <p><small>photos are used with parental permission, last names removed for privacy</small></p>
                
             </div>
          </div>
      </Section>
      <Section> 
        <div style = {{padding: '20px 50px 40px 50px', backgroundColor: '#C31644', color: 'white', width: '100%'}}>
              <a href = "https://www.independentnews.com/news/high-school-hosts-online-math-contest-for-girls/article_58ce4406-c63b-11ea-bd6a-fb38b2a180e9.html" target = "_blank">
                      <button className = {buttonText} >
                         a news article interview about our event in the local news!
                              <FaAngleRight className = {arrowIcon} />
                      </button>
                </a>
        </div>
      </Section>
        
      <img style = {{width: '100%'}} src = {shield_staff_meeting_picture} />
      
        <Section sectionTitle = "Dublin Shield" style = {{width: '100%'}}>
          <div style = {{padding: '40px 50px 40px 50px', backgroundColor: '#B48967', color: 'white', width: '100%'}}>
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
