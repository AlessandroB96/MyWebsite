import React from 'react';
import github from '../../src/assets/images/github-1.svg';
import linkedin from '../../src/assets/images/linkedin-1.svg';
import email from '../../src/assets/images/gmail-1.svg';

function Main() {
    return (

    <main class="flex-container">
        <section class="main-content">
            <h1 class="header-text">Alessandro Belaj</h1> 

            <div class="sub-text">Welcome to my webpage! I am Alessandro,</div>
            <div class="sub-text">a Mechanical Engineer turned Full Stack Web Developer</div> 
        </section>

        <section class="contact-container">
                    <section id="contact-content">
                        <button class="btn" onclick="window.location.href='https://github.com/AlessandroB96';" value="Go to my GitHub">
                        <div class="svg-container">
                            <img src={github} class="github" alt="linkedin link" />
                        </div>
                        </button>
                    </section>
            
                    <section id="contact-content">
                        <button class="btn" onclick="window.location.href='https://www.linkedin.com/in/alessandrobelaj/';" value="Go to my LinkedIn">
                            <div class="svg-container">
                            <img src={linkedin} class="LI" alt="linkedin link" />
                            </div>
                        </button>
                    </section>
            
                    <section id="contact-content" >
                        <button class="btn" onclick="window.location.href='mailto: abelaj7196@gmail.com';" value="email me">
                            <div class="svg-container">
                            <img src={email} class="gmail" alt="gmail-link" />
                            </div>
                        </button>
                    </section>
            </section>
    </main> 

    
    );
}

export default Main;