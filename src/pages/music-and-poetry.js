import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from 'gatsby-plugin-image'

import {sectionName,
  sectionContainer,
  sectionContent,
  sectionAboutMe,
  poetryBlock,
  poetryBlock1, 
  poemName} from '../components/section.module.css'

import Layout from "../components/layout"
import Section from '../components/section'
import Button from '../components/button'
import Seo from "../components/seo"

import three_names_poem from "../images/three_names.png"
import pottery_memoirs_poem from "../images/pottery_memoirs.png"
import somnium_poem from "../images/somnium.png"
import inception_poem from "../images/inception.png"

import qing_hua_ci_cover from '../images/qing_hua_ci_cover.png'
import all_of_me_cover from '../images/all_of_me_cover.png'

/*


       <img src = {three_names_poem} style = {{minWidth:'150px'}}/>
      <img src = {pottery_memoirs_poem} style = {{minWidth:'150px'}}/>
      
     <img src = {inception_poem} style = {{maxWidth:'250px'}} />
    <img src = {somnium_poem} style = {{maxWidth:'250px'}}/>
      
    <div className = {poetryBlock} className = {poetryBlock1} style = {{backgroundColor: '#e0a82f', color: 'white'}}>
      <p className = {poemName}>three names</p>
      <p> 
        
      </p>
    </div>


*/
const FourthPage = () => (
  <Layout>
    <Seo title="Music and Poetry" />
    
    <Section sectionTitle = "Poetry">
          <div style = {{height: '800px'}}>
          <StaticImage 
              alt="Three Names Poem"
              src="../images/poem_1.png"
           />
           </div>
          <div style = {{height: '800px'}}>
           <StaticImage
              alt="Pottery Memoirs Poem"
              src="../images/poem_2.png"
           />
                </div>
                
      
      <div style = {{backgroundColor: '#f2e399', maxWidth: '30%', boxShadow: ' 0px 2px 5px rgba(155, 155, 155, 0.8)'}}>
        <div style = {{margin: '40px'}}>
          <p className = {sectionName}>Poetry</p>
          
          <p> I picked up a habit of writing poetry in middle school. Over the years, it's become how I express curious thoughts in 
          strange formats. Noticing the small things around me motivates me to share stories through poems/ 

          </p>
          <p> 
          Some of my favorite poems: 
            <ul>
              <li>"The Rhodora" (Emerson)</li>
              <li> "Goblin Market" (Rossetti) </li>
              <li>"One Hundred Love Sonnets: XVII" (Neruda)</li>
              <li>"Ode to a Large Tuna in the Market" (Neruda)</li>
              <li>"The Moon Was But a Chin of Gold" (Dickinson)</li>

            </ul>
          </p>

        </div>
      </div>
    </Section>
    <Section>
    <div>
    <StaticImage style = {{width: '50%'}}
      alt="Tiger Poem"
      src="../images/poem4.png" 
    />
    <StaticImage style = {{width: '50%}}
      src="../images/poem3.png" 
    />
        
    </div>
    </Section>
    
    <Section sectionTitle = "Music">

      <div style = {{backgroundColor: '#bcdce8', maxWidth: '50%', marginRight: '30px', boxShadow: ' 0px 2px 5px rgba(155, 155, 155, 0.8)'}}>
        <div style = {{margin: '40px'}}>
          <p className = {sectionName}>Music</p>
          
          <p>  Whether quietly mouthing the lyrics to the newest pop hit at my desk or belting out solo Adele concerts in the shower, 
            I love singing. 
          </p>
          <p>My favorite songs provide fleeting snapshots of daily life; when I hear Fight Song, I am immediately reminded of busy 
            summer days spent eating persimmons and running errands with my mother. 
          </p>
          <p> 
              
         The memories captured in melodies stay with me for years. With my friends, crooning Spanish pop
           hits bring back memories of loud karaoke nights at our houses. 
         </p>
          <p>
           
           Singing is the bridge into my personal photo album, where thousands of half-forgotten melodies will forever dance in my mind. 

          
          </p>

        </div>
        </div>
        
    <div>
      
      <iframe width="560" height="315" src="https://www.youtube.com/embed/VB9TanDtUQ0?start=4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/9Ky44OeyLac" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

    
    </div>

</Section>

    <div style = {{width: '100%', display: 'flex', alignItem: 'center', justifyContent: 'center'}}>
       
        <a href = "https://youtu.be/8awpUoMMNL0" target = "_blank" ><img src = {qing_hua_ci_cover} style = {{maxWidth: '100%'}}/></a>
        <a href = "https://youtu.be/OJFxZJC057I" target = "_blank"  ><img src = {all_of_me_cover} style = {{maxWidth: '100%', marginLeft: '20px'}}/></a>
       </div>

    

  </Layout>
)

export default FourthPage
