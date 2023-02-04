import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import {
  section1, section2, section3, section4, section5, section6,
  sectionName, sectionContent, sectionImageProfilePhoto,
  sectionImage, sectionImage2,sectionImage3, sectionImage4, sectionImage5, sectionImage6,
  footer, imageSection, section1_Right,

  section1_BearImage, section1_ProfilePhoto
} from '../components/section.module.css'

import { FaAngleRight} from "@react-icons/all-files/fa/FaAngleRight";

import {
  arrowIcon,
  buttonText,
} from "../components/main.module.css"

import { highlightTextPink, highlightTextOrange} from '../components/main.module.css'
import Layout from "../components/layout"
import Section from '../components/section'
import Button from '../components/button'
import Spacer from '../components/spacer'
import Seo from "../components/seo"

/* BELOW ARE THE FIGURES */
import figure1 from  "../images/square_profile_photo.png" /*"../images/introduction_figure.png"*/
import figureBear from "../images/portfolio_bear.png"
import figure2 from "../images/programming_figure.png"
import figure3 from "../images/math_figure.png"
import figure4 from "../images/engineering_figure.png"
import figure5 from "../images/poetry_figure.png"
import figure6 from "../images/music_figure.png"

const IndexPage = () => (
  
  <Layout pageTitle="Home Page" >
     <Seo title="Home" />
    <div>
    
    <Section sectionTitle = "welcome" >
        
        <div className = {section1}>
          
          <div className = {sectionContent} >
            <p className = {sectionName}>hello, i'm grace!</p>
            
            <p>i'm a first-year student at princeton intending on concentrating in CS.</p>

            <p>i'm fascinated by the intersection of  <span className = {highlightTextPink} style = {{zIndex: '0'}}>engineering, art, and
society</span>, as well as hands-on user applications that improve efficiency. i love building things.</p>
              
            <p>in the past, i was  involved with girls who code, my school robotics club, the <em> dublin shield</em>, the <em>spanish honors society</em>,
             the <em>gwc</em>, and more. i'm currently joining student organizations like the SWE and AASA in university. 
             
            </p>
            <p>some of my other interests are reading, singing, and poetry.
            </p>
            <p>check out some <span className = {highlightTextPink} style = {{zIndex: '0'}}>~cool visuals~</span> of my projects and teams on this site!
            </p>
            
            <Spacer></Spacer>
            <Link to="/community">
                
                  <button className = {buttonText} >
                      dive into my community
                      <FaAngleRight className = {arrowIcon} />
                  </button>
                  
              
              
            </Link>
          </div>
        
        </div>

        <div className = {section1_Right} >
          <img className = {section1_BearImage} src = {figureBear}/>
        
            
            <img style = {{boxShadow: ' 0px 2px 5px rgba(155, 155, 155, 0.8)'}} className = {section1_ProfilePhoto} src = {figure1}/>


        </div>
        
        
    </Section>
  
     
    <Section sectionTitle = "engineering">
      <div style = {{display: 'flex', justifyContent: 'center', alignItems: 'center',  minWidth: '35%'}}>
          <img className = {sectionImage4} src = {figure4}/>
        </div>
     

      <div className = {section4}>

        <div style = {{color: 'white'}}>
          <p className = {sectionName}>engineering</p>
          <p>i've been a part of gael force robotics, my school's 
            VEX robotics club, for all of my high school experience. teams i've been on include 
            teams 5327U, 5327C, and 5327R. i code in robot-c, help build our robot, and
            document the process for competitions. 
          </p>
          <p>robotics teaches me about the hardware side of engineering. 
            i enjoy fusing together my programming and building skills 
            to create a functional product.
          </p>
          <p>
            i am also a member of my school's engineering and design 
            academy. the academy fuses entrepenuership skills with engineering. 
            i participate in our annual entrepenuership competition and build a 
            variety of projects throughout the school year. 
          </p>
        <Link to="/technology">
        <Button linkDescription = "check out our robot + my projects" color = "pinkButton"></Button>
        </Link>
        </div>
      
      </div>
      
    </Section>
    
  

    <Section sectionTitle = "math">
        
        <div className = {section3}>

          <div>
            <p className = {sectionName}>math</p>
            <p>solving tricky problems exercises my logical skills. 
              i like problem-solving because it broadens my understanding 
              of difficult topics. 
            </p>
            <p>
              one of my favorite parts of doing math is the collaborative aspect. 
              whether teaching others or listening to explanations, i enjoy visualizing the 
              different solutions to each problem. 
           </p>
           <p>i'm also big on encouraging a supportive environment for women and girls to explore
              problem-solving with math. i direct an annual competition for the <em>girls math association</em>, so 
              take a look at our site!
            </p>
            <Link to="/community">
            <Button linkDescription = "check out a math event i hosted" color = "pinkButton"></Button>
            </Link>
          </div>

        </div>

        <div style = {{display: 'flex', justifyContent: 'center', alignItems: 'center', minWidth: '35%'}}>
          <img className = {sectionImage3} src = {figure3}/>
        </div>
    </Section>
    
    <Section sectionTitle = "programming">
        <div style = {{display: 'flex', justifyContent: 'center', alignItems: 'center', minWidth: '35%'}}>
          <img className = {sectionImage2} src = {figure2}/>
        </div>
        <div className = {section2}>
            <div>
              <p className = {sectionName}>programming</p>
              <p>to me, the ability to code is freedom to explore and make anything i want to. through web dev, i'm able to 
              fuse design and technical aspects. 
              </p>

              <p>
              i develop sites for both personal pursuits and community endeavors. i'm gaining experience in full-stack development - 
              languages including html, css, javascript, php, and react.js.

              </p>
              <p>
              as president of my school's <em>girls who code</em> club, i teach 
                members the basics of Python and Java in workshops and events. 
              </p>
              <p>
                aside from full-stack, i'm currently exploring algorithms. i program in 
                java, python, and some c++.

              </p>

              <Link to="/technology"><Button linkDescription = "see my projects" color = "pinkButton"></Button></Link>
            </div>
        </div>
      
    </Section>
   
    

    <Section sectionTitle = "poetry">
      
      <div className = {section5}>
        <div>
          <p className = {sectionName}>poetry</p>
          <p>on the surface, poetry is very different from 
            the neatly ordered lines of code on the rest of 
            this website.
            </p>
            
          <p>but poetry isn't all that different
            from programming. the words fit together like puzzle
            pieces, interlocking and melding into a cohesive 
            picture. i change an indent, add a word,
              and the mood of the entire poem shifts. </p>
          
          <p style = {{textTransform: 'lowercase'}}>
            writing poetry allows me to notice the small things in life. 
            the empty night space between two houses, scorched hills, half a 
            moon cake on my plate.
          </p>

          <p>
            i've compiled a small anthology of my poems on this portfolio.
          </p>
          <Link to="/music-and-poetry">
          <Button linkDescription = "a collection of my poems" color = "greenButton"></Button>
          </Link>
        </div>

        
      </div>

      <div style = {{display: 'flex', justifyContent: 'center', alignItems: 'center',  minWidth: '35%'}}>
          <img className = {sectionImage5} src = {figure5}/>
       </div>
       
    </Section>
  
    
    <Section sectionTitle = "music">
        <div style = {{display: 'flex', justifyContent: 'center', alignItems: 'center',  minWidth: '35%'}}>
          <img className = {sectionImage6} src = {figure6}/>
        </div>
        
        <div className = {section6}>
          <div style = {{color: 'white'}}>
            <p className = {sectionName}>music</p>
            <p>i enjoy listening to music, making music with my voice,
              and making music with my hands.
            
            </p>
            <p>
              aside from karoake nights, i like to make covers of my 
              favorite songs to share. i've also recently started a tiktok 
              account for music! some of my piano pieces and covers are on the music 
              page on this portfolio.

            </p>
            <Link to="/music-and-poetry">
            <Button linkDescription = "covers of songs" color = "greenButton"></Button>
            </Link>
          </div>
        </div>

    </Section>

    </div>
  </Layout>
 
)
/**<p>
              i develop sites for both personal pursuits 
              and community endeavors. as president of my school's <em>girls who code</em> club, i teach 
              members the basics of coding. i have experience with full-stack development - including these
              languages: html, css, javascript, php, and react.js. other frameworks and api's
              i've used include heroku, ocr, and gatsby. 
            </p> */

/*<Layout>
    <Seo title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <StaticImage
      src="../images/gatsby-astronaut.png"
      width={300}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    />
    <p>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </p>
    
  </Layout>*/

export default IndexPage
