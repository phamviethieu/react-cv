import { useState } from 'react';
import Particles from 'react-particles-js';
import Typist from 'react-typist';


const TypelistFirstPrag = ({ executeScroll }) => {
    const [showCnt, setShowCnt] = useState(false);
    const [doneFirst, setDoneFirst] = useState(false);

    const onHeaderTyped = () => {
        setShowCnt(true);
      }
    
      const doneStepOne = () => {
        setDoneFirst(true);
      }

    return (
        <>
        <Particles 
        params={{
          "particles": {
            
              "size": {
                  "value": 2
              }
          },
          "interactivity": {
              "events": {
                  "onhover": {
                      "enable": true,
                      "mode": "repulse"
                  }
              }
          },
        
      }}/>
    <div className="wrapText"> 
        <div className="content">
          <Typist   
            avgTypingDelay={40}
            startDelay={500}
            onTypingDone={onHeaderTyped}
            cursor={{ hideWhenDone: true }}
            className="firstPrag-header"
          >
             <i class="fa fa-cog fa-spin" /> Hi ! 
            <Typist.Delay ms={500} />
  
          </Typist>
          {showCnt ? (
  
          <Typist
            cursor={{ hideWhenDone: true, element: "_"}}
            className="firstPrag-content"
            onTypingDone={doneStepOne}
          >
            - <span>I'm Pham Viet Hieu</span>
            {/* <Typist.Backspace count={8} delay={200} /> */}
            {/* <span> Pham Viet Hieu  </span> */}
            <Typist.Delay ms={200} />
            
            <br />
            If you interesting to me! Scroll down or 
            <br />
            <Typist.Delay ms={1000} />
              <button onClick={() => executeScroll('about')} className="btn mt-5 btn-primary"> 
                Click to start 
              </button> 
          </Typist>
          ) : ''}
        </div>
      </div>
    </>)
}

export default TypelistFirstPrag