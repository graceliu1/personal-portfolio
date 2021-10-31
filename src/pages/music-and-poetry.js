import * as React from "react"
import { Link } from "gatsby"

import {sectionName,
  sectionContainer,
  sectionContent,
  sectionAboutMe} from '../components/section.module.css'

import Layout from "../components/layout"
import Section from '../components/section'
import Button from '../components/button'
import Seo from "../components/seo"

import three_names_poem from "../images/three_names.png"
import pottery_memoirs_poem from "../images/pottery_memoirs.png"
import somnium_poem from "../images/somnium.png"
import inception_poem from "../images/inception.png"

const FourthPage = () => (
  <Layout>
    <Seo title="Music and Poetry" />
    
   
    <Section sectionTitle = "Poetry">
       <img src = {three_names_poem} style = {{minWidth:'150px'}}/>
    <img src = {pottery_memoirs_poem} style = {{minWidth:'150px'}}/>
       

      <div style = {{backgroundColor: '#ffde85', maxWidth: '50%'}}>
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
     <img src = {inception_poem} style = {{minWidth:'250px'}}/>
<img src = {somnium_poem} style = {{minWidth:'250px'}}/>
    
    <Section sectionTitle = "Music">

      <div style = {{backgroundColor: '#ffde85', maxWidth: '40%'}}>
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
