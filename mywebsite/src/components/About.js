import React from 'react';

function About({content}) {
    return (
    <article class="about-me" id="about-me">
        <section class="about-me-tag">
                <h1 class="about-me-title">ABOUT ME</h1>
        </section>
        
        <section class="about-me-content"> 
            <p class="about-me-content">
                {content} 
            </p>
        </section> 
    </article>
    );
}

export default About