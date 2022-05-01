import React from 'react';
import github from '../../src/assets/images/github-1.svg';
import linkedin from '../../src/assets/images/linkedin-1.svg';
import spotify from '../../src/assets/images/spotify.svg';

function Main() {

    return (

    <main class="flex-container">
        <section class="main-content">
            <h1 class="header-text">Alessandro Belaj</h1> 

            <div class="sub-text">Welcome to my webpage! I am Alessandro,</div>
            <div class="sub-text">a Mechanical Engineer turned Full Stack Web Developer</div> 
        </section>

        <section class="contact-container-main">
                    <section id="contact-content">
                        <button class="btn" onClick={() => window.open('https://github.com/AlessandroB96')} value="Go to my GitHub">
                        <div class="svg-container">
                            <img src={github} class="github" alt="linkedin link" />
                        </div>
                        </button>
                    </section>
            
                    <section id="contact-content">
                        <button class="btn" onClick={() => window.open('https://www.linkedin.com/in/alessandrobelaj/')} value="Go to my LinkedIn">
                            <div class="svg-container">
                            <img src={linkedin} class="LI" alt="linkedin link" />
                            </div>
                        </button>
                    </section>
            
                    <section id="contact-content" >
                        <button class="btn" onClick={() => window.open('https://open.spotify.com/user/abelaj7196?si=0827513f99934b69')} value="email me">
                            <div class="svg-container">
                            <img src={spotify} class="spotify" alt="spotify-link" />
                            </div>
                        </button>
                    </section>
            </section>
    </main> 

    
    );
}

export default Main;