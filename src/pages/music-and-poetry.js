import * as React from "react"
import { Link } from "gatsby"

import {sectionName,
  sectionContainer,
  sectionContent,
  sectionAboutMe,
  poetryBlock,
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
import qing_hua_ci_cover from "..images/qing_hua_ci_cover.png"
import all_of_me_cover from "..images/all_of_me_cover.png"*/

/*
<p>
        i. grace \n
        my father saw a Catherine on stage in 2004,\n
        wanted to name me after her glamour. \n
        but that year, many saw the same movie. \n
        the name catherine slipped out their lips \n
        to touch the foreheads of their newborns \n
        - and so out my mother’s lips \n
        tumbled <em>Grace</em>\n
        <br></br>
        ii. liu xing yu \n
        she calls me meteor rain.\n
        a tribute to the jewels that shower the night,\n
        inhaled into my fluttering lungs.\n
        i hold my breath in the dark,\n
         a thousand and one dreams \n
        spiraling across my mind. \n
        for what are shooting stars, \n
        but the last phase of a dying star?\n
        <br></br>
        iii. bao ya\n
        my nickname sounds like roasted duck\n
        in my mother’s tongue, it is.\n
        crispy skin, honey-sweet \n
        fat and salt and joy.\n
        she told me before i existed, \n
        my father proclaimed that\n
        a son would be called bao dan\n
        a daughter would be called\n
        treasured daughter\n
        <em>(bao ya)</em>\n


      </p>






*/
const FourthPage = () => (
  <Layout>
    <Seo title="Music and Poetry" />
    
    <div className = {poetryBlock} style = {{backgroundColor: '#e0a82f', color: 'white'}}>
      <p className = {poemName}>three names</p>
      <p> 
        {`
Hi~
this is a test message.
`}
      </p>
    </div>


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
      
      <iframe width="560" height="315" src="https://www.youtube.com/embed/VB9TanDtUQ0?start=4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/9Ky44OeyLac" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

    
    </div>

</Section>

    <div style = {{width: '100%', display: 'flex', alignItem: 'center', justifyContent: 'center'}}>
       
        <a href = "https://youtu.be/8awpUoMMNL0"><img src = {qing_hua_ci_cover} style = {{maxWidth: '50%'}}/></a>
        <a href = "https://youtu.be/OJFxZJC057I" ><img src = {all_of_me_cover} style = {{maxWidth: '50%', marginLeft: '20px'}}/></a>
       </div>

    

  </Layout>
)

export default FourthPage
