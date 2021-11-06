import * as React from "react"
import { Link } from "gatsby"

import {sectionName,
  sectionContainer,
  sectionContent,
  section3,
  sectionAboutMe} from '../components/section.module.css'

import {
  websiteSnippet,
  websiteImage,
  websiteDescription,
  sectionRobotics,
  flowerImage
} from '../components/technology.module.css'

import {
  arrowIcon,
  buttonText,
} from "../components/main.module.css"


import { FaAngleRight} from "@react-icons/all-files/fa/FaAngleRight";

import Layout from "../components/layout"
import Section from '../components/section'
import Button from '../components/button'
import Seo from "../components/seo"

import website1_math from "../images/website1_math.png"
import website2_eluo from "../images/website2_eluo.png"
import website3_gma from "../images/website3_gma.png"
import website4_classify from "../images/website4_classify.png"

import robot1 from "../images/robot1.png"
import robot2 from "../images/robot2.jpg"
import robot3 from "../images/robot3.jpg"
import robot4 from "../images/robot4.jpg"

import team_award_picture from "../images/robotics_team1.jpg"
import girl_powered_picture from "../images/robotics_team2.png"

import flower_1 from "../images/flower_1.png"
import flower_2 from "../images/flower_2.png"

/**
          <Link to="/page-2/"><Button linkDescription = "see my projects" color = "pinkButton"></Button></Link>
          **/


/***

old code for website photos:
style = {{margin: '10px 15px 10px 15px', boxShadow: ' 0px 2px 5px rgba(155, 155, 155, 0.8)', maxWidth: '50%'}} 


***/

/**
  <img src = {flower_1} />
 <div>
                 
  <div className = {websiteSnippet}>
    <img className = {websiteImage} src = {website1_math}/>
    <p className = {websiteDescription}>I built this website for the school math department. </p>
  </div>

  <div className = {websiteSnippet}>
    <img className = {websiteImage} src = {website2_eluo}/>
    <p className = {websiteDescription}>I built this website for the school math department. </p>
  </div>
  </div>

  <div>

  <div className = {websiteSnippet}>
    <img className = {websiteImage} src = {website3_gma}/>
    <p className = {websiteDescription}>I built this website for the school math department. </p>
  </div>

  <div className = {websiteSnippet}>
    <img className = {websiteImage} src = {website4_classify}/>
    <p className = {websiteDescription}>I built this website for the school math department. </p>
  </div>
</div>
  
  */
const ThirdPage = () => (
  <Layout>
    <Seo title="Technology" />
  
      <Section sectionTitle = "Code Garden">
          <img className = {flowerImage} src = {flower_1}/>
          <div className = {section3} style = {{backgroundColor: '#c9ffd1', color: 'black'}}>
            <div>
              <p className = {sectionName}>Code Garden</p>
               <p>Welcome to my "garden" of code... in the form of websites! I enjoy building sites, both for fun and for projects.
               </p>
              <p>Last year, I embarked on a journey to learn full-stack developement. My skills are a work-in-progress 
              (including this website) and I hope to continue improving in the near future. </p>
               <p> And if you haven't noticed already, I like encorporating some visual design aspects into my work as well. Click on the website 
              previews to visit the links. Stop a while, smell the flowers!</p>


            </div>
          </div>
          <img className = {flowerImage} src = {flower_2}/>
        </Section>

  <div style = {{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
    <a href = "https://dublinhighmath.com"><img className = {websiteImage} src = {website1_math}/> </a>
    <a href = "https://eluo.herokuapp.com"><img className = {websiteImage} src = {website2_eluo}/> </a>
  </div>
  
  <div style = {{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
    <a href = "https://girlsmathassociation.com"><img className = {websiteImage} src = {website3_gma}/> </a>
    <a href = "https://classify.herokuapp.com"><img className = {websiteImage} src = {website4_classify}/> </a>
  </div>
  
    <hr style = {{height: '0px', borderTop: '2px black solid', paddingTop: '20px'}}></hr>


        
    <Section sectionTitle = "Robotics">

      <div className = {section3} style = {{backgroundColor: '#ffde85', maxWidth: '50%',  color: 'black'}}>
        <div>
          <p className = {sectionName}>Robotics Field</p>
          
          <p>
             One of the best parts of robotics was experimenting with various builds. Through taking mechanisms apart and trying new designs, I
              learned a lot about the basics of mechanical engineering.
          </p>
          <p>
                Above all, robotics is a team-centered experience. I've had the privilege of being on three different 
              teams during high school and meeting many lovely people in the club. 

          </p>

        </div>
      </div>
      <img style = {{maxWidth: '50%', marginLeft: '20px'}} src = {team_award_picture}/>
    </Section>
    
    <div style = {{display: 'flex', justifyContent: 'center'}}>
      <img style = {{margin: '10px 10px 10px 10px', maxHeight: '380px', justifyContent: 'center'}} src = {robot1}/>
      <img style = {{margin: '10px 10px 10px 10px', maxHeight: '380px', justifyContent: 'center'}} src = {robot2}/>
      <img style = {{margin: '10px 10px 10px 10px', maxHeight: '380px', justifyContent: 'center'}} src = {robot3}/>
    </div>

    <div style = {{display: 'flex', justifyContent: 'center'}}>
    <img style = {{margin: '10px 10px 10px 10px', maxHeight: '400px'}} src = {robot4}/>
    <img style = {{maxHeight: '400px'}} src = {girl_powered_picture}/>
    </div>

    <hr style = {{height: '0px', borderTop: '2px black solid', paddingTop: '20px'}}></hr>

    <Section sectionTitle = "Research">
       <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vSDVcBsrp4iZI_QqHPLvCnQ_O1xWDFsDbyamPz4HHICa27sOnxI9673yzobDfTyIU0f4mbPckRzFNxv/embed?start=false&loop=false&delayms=3000" frameborder="0" width="960" height="569" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
       <div className = {section3} style = {{maxWidth: '40%', marginLeft: '25px'}}>
           <div style = {{margin: '30px'}}>
             <p className = {sectionName}>Research</p>
             <p>This summer, I completed research on pnuemonia classification with transfer learning at the University of Connecticut.</p>
             <p>My project was advised by Professor Shengli Zhou and Professor Jinbo Bi. At the conclusion of the program,
               I gave a formal presentation, linked at the right.</p>
             <p>
                 Overall, the research process has been a journey of joy, frustration, and continuous learning/coding. I've become
                  intrigued by deep learning and hope to continue my pursuits in college.
             </p>
              <a href = "https://www.ee.uconn.edu/shengli-zhou/front-page/service/summerprogram2021/">
                <button className = {buttonText} >
                   see the program's webpage
                        <FaAngleRight className = {arrowIcon} />
                </button>
              </a>
           </div>
       </div>
    </Section>

  </Layout>
)

export default ThirdPage
