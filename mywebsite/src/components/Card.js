import React from "react";

function Card() {
  return (

<article class="projects" id="projects"> 
    <section id="projects-tag"> 
        <h1 class="project-title">PROJECTS</h1>
    </section>

    <section class="projects-content">

    <button class="btn" id="hoverbig" onClick={() => window.open("https://alessandrob96.github.io/taskmaster-pro/", "_blank")} value="PLACEHOLDER">
        <section class="project4" id="allcards">
            <p class="cards-title">TASKMASTER PRO</p>
            <p class="cards">Edit, organize, and manage tasks </p>
        </section>
    </button>

    <button class="btn" id="hoverbig" onClick={() => window.open("https://alessandrob96.github.io/run-buddy/", "_blank")} value="Go to my webpage created for Run Buddy">
        <section class="project1" id="allcards">
            <p class="cards-title">RUN BUDDY</p>
            <p class="cards">Sign up and pick a trainer</p>
        </section>
    </button>

    
    <button class="btn" id="hoverbig" onClick={() => window.open("https://alessandrob96.github.io/git-it-done/", "_blank")} value="PLACEHOLDER">
        <section class="project3" id="allcards">
            <p class="cards-title">GIT IT DONE</p>
            <p class="cards">Search a github username or sort by language to assist users</p>
        </section>
    </button>
    
    <button class="btn" id="hoverbig" onClick={() => window.open("https://alessandrob96.github.io/PasswordGenerator/", "_blank")} value="PLACEHOLDER">
        <section class="project5" id="allcards">
            <p class="cards-title">PASSWORD GENERATOR</p>
            <p class="cards">Front end webpage that generates a password based on user criteria</p>
        </section>
    </button>
    
    <button class="btn" id="hoverbig" onClick={() => window.open("https://alessandrob96.github.io/codequiz/", "_blank")}  value="PLACEHOLDER">
        <section class="project6" id="allcards">
            <p class="cards-title">CODE QUIZ</p>
            <p class="cards">Series of timed coding related questions</p>
        </section>
    </button>
    
    <button class="btn" id="hoverbig" onClick={() => window.open("https://alessandrob96.github.io/WorkDayScheduler/", "_blank")} value="PLACEHOLDER">
        <section class="project8" id="allcards">
            <p class="cards-title">WORKDAY SCHEDULER</p>
            <p class="cards">Calendar app to save events for each hour of the day</p>
        </section>
    </button>
    
    
    <button class="btn" id="hoverbig" onClick={() => window.open("https://github.com/AlessandroB96/portfolio-generator", "_blank")} value="PLACEHOLDER">
        <section class="project9" id="allcards">
            <p class="cards-title">PORTFOLIO GENERATOR</p>
            <p class="cards">Building an HTML portfolio generator using Node.js</p>
        </section>
    </button>
    
    <button class="btn" id="hoverbig" onClick={() => window.open("https://github.com/AlessandroB96/READMEgenerator", "_blank")} value="PLACEHOLDER">
        <section class="project10" id="allcards">
            <p class="cards-title">README GENERATOR</p>
            <p class="cards">Using express and npm inqurier to generate a README file</p>
        </section>
    </button>
    
    <button class="btn" id="hoverbig" onClick={() => window.open("https://alessandrob96.github.io/The-Food-Conch/", "_blank")} value="PLACEHOLDER">
        <section class="project7" id="allcards">
            <p class="cards-title">THE FOOD CONCH</p>
            <p class="cards">Front-end application utilizing a CSS framework, 2 server-side APIs, and local storage</p>
        </section>
    </button>
    
    <button class="btn"  id="hoverbig" onClick={() => window.open("https://hidden-caverns-61141.herokuapp.com/", "_blank")} value="Go to my webpage and track your budget">
        <section class="project2" id="allcards">
            <p class="cards-title">BUDGET TRACKER</p>
            <p class="cards">Progressive Web Application where users can track their spending</p>
        </section>
    </button>
    
    <button class="btn" id="hoverbig" onClick={() => window.open("https://techbloggr.herokuapp.com/", "_blank")} value="PLACEHOLDER">
        <section class="project12" id="allcards">
            <p class="cards-title">TECH BLOGGER</p>
            <p class="cards">Blog site where users can post and discuss tech news</p>
        </section>
    </button>

    <button class="btn" id="hoverbig" onClick={() => window.open("https://gym-quest.herokuapp.com/", "_blank")} value="PLACEHOLDER">
        <section class="project13" id="allcards">
            <p class="cards-title">GYM QUEST</p>
            <p class="cards">Full stack social media platform to connect with gym buddies</p>
        </section>
    </button>
</section>
</article>
  );
}

export default Card;
