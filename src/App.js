import './App.css';
import { useEffect, useState, useRef } from 'react';
import WOW from 'wow.js';

import  Skill  from './components/Skill';
import  TypelistFirstPrag  from './components/TypelistFirstPrag';
import  Profile  from './components/Profile';
import  Experience  from './components/Experience';
import  Footer  from './components/Footer';
import Project from './components/Project';

function App() {
  const executeScroll = (to) => {
    if (to) {
      document.getElementById(to).scrollIntoView({ behavior: "smooth" })

    }
  } 
  useEffect(() => {
    new WOW().init();
    document.title = "Pham Viet Hieu"

  })

  return (
    <div className="App">
              {/* <nav>
                  <ul>
                      <li><a onClick={() => executeScroll('first')} >Home</a></li>
                      <li><a onClick={() => executeScroll('about')} >About</a></li>
                      <li><a onClick={() => executeScroll('experiences')}>Experiences</a></li>

                      <li><a onClick={() => executeScroll('third')}>Skills</a></li>
                      <li><a onClick={() => executeScroll('project')}>Projects</a></li>
                      <li><a onClick={() => executeScroll('fifth')}>Contact</a></li>
                      
                  </ul>
              </nav> */}
      {/* <div > <Particles className='first'/> </div> */}
        <div className="first" id="first">
            <TypelistFirstPrag executeScroll={executeScroll}/>
        </div>
        <div className="segment second" id="about">
            <Profile executeScroll={executeScroll}/>
        </div>
        <div className="experiences">
          <div className="container py-5 mt-4"  id="experiences">
              <Experience executeScroll={executeScroll}/>
          </div>
        </div>
     
        <div className="segment" id="third">
            <div className="container pt-5">
                <Skill />
            </div>
        </div>
        <div className="segment project" data-wow-offset="100" data-wow-delay="0.4s" id="project">
            <div className="container pt-5">
                <Project executeScroll={executeScroll}/>
            </div>
        </div>
        <div className="contact">
          <div className="row wow fadeInDown justify-content-center pt-5">
            <div>
              <a href="https://github.com/phamviethieu"> <i className="fa fa-2x mr-3 fa-github"></i> </a>
              <a href="https://www.linkedin.com/in/viet-hieu-pham-038552172"> <i className="fa fa-2x mr-3 fa-linkedin"></i>  </a>
              <a href="https://code4mylife.code.blog"> <i className="fa fa-2x mr-3 fa-rss"></i> </a>
              <a href=""><i className="fa fa-2x mr-3 fa-facebook-f"></i> </a>
            </div>
          </div>
        </div>
      {/* <div  className="segment hobbies pt-1" id="hobbies">
          <div className="wow bounceIn"  data-wow-offset="100" data-wow-delay="0.4s"> 
          <h1>Stuff to move</h1>
          </div>
      </div>
      <div  className="segment " data-wow-offset="100" data-wow-delay="0.4s">
          <div className="wow fadeInLeftBig"> 
          <h1>First we need some action to go to next step! </h1>
          </div>
      </div> */}
        <Footer />    
    </div>
  );
}

export default App;
