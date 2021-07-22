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

    <div className = {sectionAboutMe}>
      <Section sectionTitle = "Short Biography">
          
          <div className = {sectionContent} >
            <p className = {sectionName}>hello, i'm grace.</p>
            
            <p>i love creating - whether with code or words, my projects
              connect me to my community and open up new possibilities. </p>
            <p>
              feel free to learn more about me by scrolling down!
            </p>

            <Link to="/"><Button linkDescription = "go back to the homepage" color = "greenButton"></Button></Link>
          </div>
      </Section>
    </div>

  </Layout>
)

export default SecondPage
