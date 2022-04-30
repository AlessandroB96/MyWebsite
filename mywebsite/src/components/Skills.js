import React from 'react';
import html from '../assets/images/html.svg';
import css from '../assets/images/css3.svg';
import js from '../assets/images/js.svg';
import git from '../assets/images/git.png';
import react from '../assets/images/react.png';
import nodejs from '../assets/images/nodejs.png';
import mongo from '../assets/images/mongo.png';

function Skills() {
    
    return (

    <div>
             <section class="skills-tag">
                    <h1 class="skills-tag-title">SKILLS</h1>
             </section>
       
     <article class="skills" id="skills">

    <section class="skills-content">
        <div class="sidebysideLang">
            <p class="skills-tags-lang">
                <span class="skills-categories">LANGUAGES:</span>
                <p class="skills-display"> HTML , CSS , JavaScript, NodeJS, Mongodb, Python, SQL </p>
            </p>
        </div>

        <div class="sidebysideTools">
            <p class="skills-tags-tools">
                <span class="skills-categories">TOOLS:</span>
                <p class="skills-display"> Git, MongoDB Atlas, AWS, Figma, Unix, Insomnia</p>
            </p>
        </div>

        <div class="sidebysideCategories">
            <p class="skills-tags-frame">
                <span class="skills-categories">FRAMEWORKS:</span> 
                <p class="skills-display">React, Mongoose, Express, Bootstrap</p>
            </p>
        </div>
    </section>  
</article>

    <div class="icon-container">
        <div class="html">
            <img src={html} alt="html"></img>
        </div>
        <div class="css">
            <img src={css} alt="css"></img>
        </div>
        <div class="js">
            <img src={js} alt="js"></img>
        </div>
        <div class="git">
            <img src={git} alt="git"></img>
        </div>
        <div class="react">
            <img src={react} alt="react"></img>
        </div>
        <div class="nodejs">
            <img src={nodejs} alt="nodejs"></img>
        </div>
        <div class="mongo">
            <img src={mongo} alt="mongo"></img>
        </div>
    </div>
</div>
    )
}

export default Skills