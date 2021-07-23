import * as React from "react"
import { Link } from "gatsby"

import {sectionName, 
  sectionContent,
  sectionAboutMe} from '../components/section.module.css'


import Layout from "../components/layout"
import Section from '../components/section'
import Button from '../components/button'
import Seo from "../components/seo"

const SecondPage = () => (
  <Layout>
    <Seo title="About Me" />

   
      <Section sectionTitle = "Short Biography" style = {{marginTop: '20px'}}>
         <div className = {sectionAboutMe}
         style = {{backgroundColor: 'rgb(250, 209, 198)'}}
      >
          
          <div className = {sectionContent} >
            <p className = {sectionName}>about me</p>
            
            <p style = {{lineHeight: '1.5'}}>

            Grace Liu is a senior at Dublin High School in Dublin, California. 
            Her passion lies in engineering for social good. 
            She is heavily involved in student leadership on campus. Grace is the founder 
            of the Girls Math Association, an nonprofit organization dedicated to 
            encourage the participation of middle school girls in competitive problem
            solving. Grace's interests lie at the intersection of a variety of subjects, 
            including electrical engineering, computer science, economics, and international
            relations. Her exploration of engineering includes full-stack developement, 
            algorithmic problem-solving, and robotics. As a student who enjoys both 
            STEM and the humanities, she also serves as Editor-in-Chief of her school newspaper.
            Grace hopes to continue combatting inefficiency and inequality in communities
            through technological solutions in college and beyond. In her free time, 
            Grace enjoys reading science-fiction books (especially dystopian), singing in 
            different languages, and writing a bit of poetry. 
            </p>

            <Link to="/"><Button linkDescription = "go back to the homepage" color = "greenButton"></Button></Link>
          </div>

          </div>
      </Section>
    

  </Layout>
)

export default SecondPage
