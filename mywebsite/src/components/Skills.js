import React from 'react';

function Skills() {
    return (
        <article class="skills" id="skills">
    <section id="about-me-tag">
            <h1 class="skills-tag-title">SKILLS</h1>
    </section>

    <br />

    <section class="skills-content">
        <div class="sidebysideLang">
            <p class="skills-tags">
                <span class="skills-categories">LANGUAGES:</span>
                <p class="skills-display"> HTML , CSS , JavaScript, NodeJS, Mongodb, Python </p>
            </p>
        </div>

        <div class="sidebysideTools">
            <p class="skills-tags">
                <span class="skills-categories">TOOLS:</span>
                <p class="skills-display"> Git, MongoDB Atlas, AWS, Figma, Unix, Insomnia</p>
            </p>
        </div>

        <div class="sidebysideCategories">
            <p class="skills-tags">
                <span class="skills-categories">FRAMEWORKS:</span> 
                <p class="skills-display">React, Mongoose, Express, Bootstrap</p>
            </p>
        </div>
    </section>  
</article>
    )
}

export default Skills