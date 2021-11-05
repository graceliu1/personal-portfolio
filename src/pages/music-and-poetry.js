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
       

      <div style = {{backgroundColor: '#ffde85', maxWidth: '35%', boxShadow: ' 0px 2px 5px rgba(155, 155, 155, 0.8)'}}>
        <div style = {{margin: '40px'}}>
          <p className = {sectionName}>Poetry</p>
          
          <p> Why do I write poetry? It started as a habit in middle school. For me, poetry is how I express curious thoughts in 
          curious formats. There's a thousand small stories that I want to tell through words. 

          </p>
          <p> 
          Favorite poems/poem collections: "Remember" (Christina Rossetti), "Goblin Market" (Christina Rossetti), "The Rhodora" (
            Ralph Waldo Emerson),
            <em>Veinte poemas de amor y una canción desesperada</em> (Pablo Neruda)
          
          </p>

        </div>
      </div>
    </Section>

    <div>
     <img src = {inception_poem} style = {{minWidth:'250px'}}/>
    <img src = {somnium_poem} style = {{minWidth:'250px'}}/>
    </div>
    
    <Section sectionTitle = "Music">

      <div style = {{backgroundColor: '#bcdce8', maxWidth: '50%', marginRight: '30px', boxShadow: ' 0px 2px 5px rgba(155, 155, 155, 0.8)'}}>
        <div style = {{margin: '40px'}}>
          <p className = {sectionName}>Music</p>
          
          <p>  Whether quietly mouthing the lyrics to the newest pop hit at my desk or belting out solo Adele concerts in the shower, 
            I am constantly singing. 
          </p>
          <p>My favorite songs capture fleeting snapshots of daily life; when I hear Fight Song, I am immediately reminded of busy 
            summer days spent eating persimmons and running errands with my mother. 
          </p>
          <p> 
              
         The memories evoked from different songs stay with me long after the first time I hear them. To my friends, crooning Spanish pop
           hits bring back memories of loud karaoke nights at our houses. When I sing, I can almost taste the emotion behind every word. 
         </p>
          <p>
           
           Singing is the bridge into my personal photo album, where thousands of half-forgotten melodies will forever dance in my mind. 

          
          </p>

        </div>
        </div>
    <div>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/OJFxZJC057I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      
    </div>
    
</Section>
<div>
  <iframe width="560" height="315" src="https://www.youtube.com/embed/VB9TanDtUQ0?start=4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/9Ky44OeyLac" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

    

  </Layout>
)

export default FourthPage
