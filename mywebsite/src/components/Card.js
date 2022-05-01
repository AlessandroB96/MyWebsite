import React from "react";
import github from '../../src/assets/images/github-1.svg';

function Card() {
  return (

<article class="projects" id="projects"> 
    <section id="projects-tag"> 
        <h1 class="project-title">PROJECTS</h1>
    </section>

    <section class="projects-content">

    <button class="btn" id="hoverbig" value="PLACEHOLDER">
        <section class="project4" id="allcards">
            <p class="cards-title">TASKMASTER PRO</p>
                <div class="button-holder">
                    <img src={github} id="hoverbig" onClick={() => window.open("https://github.com/AlessandroB96/taskmaster-pro", "_blank")} class="github3" alt="linkedin link" />
                    <button class="liveurl" id="hoverbig" onClick={() => window.open("https://alessandrob96.github.io/taskmaster-pro/", "_blank")} value="PLACEHOLDER">LIVE URL</button>
                </div>
            <p class="cards">Edit, organize, and manage tasks </p>
        </section>
    </button>

    
    <button class="btn" id="hoverbig" value="PLACEHOLDER">
        <section class="project3" id="allcards">
            <p class="cards-title">GIT IT DONE</p>
            <div class="button-holder">
                    <img src={github} id="hoverbig" class="github3" alt="linkedin link" />
                    <button class="liveurl" id="hoverbig" onClick={() => window.open("https://alessandrob96.github.io/git-it-done/", "_blank")} value="PLACEHOLDER">LIVE URL</button>
                </div>
            <p class="cards">Search a github username/sort by language to assist users</p>
        </section>
    </button>
    
    <button class="btn" id="hoverbig" value="PLACEHOLDER">
        <section class="project6" id="allcards">
            <p class="cards-title">CODE QUIZ</p>
            <div class="button-holder">
                    <img src={github} id="hoverbig" onClick={() => window.open("https://github.com/AlessandroB96/codequiz", "_blank")} class="github3" alt="linkedin link" />
                    <button class="liveurl" id="hoverbig" onClick={() => window.open("https://alessandrob96.github.io/codequiz/", "_blank")} value="PLACEHOLDER">LIVE URL</button>
                </div>
            <p class="cards">Series of timed coding related questions</p>
        </section>
    </button>
    
    <button class="btn" id="hoverbig" value="PLACEHOLDER">
        <section class="project8" id="allcards">
            <p class="cards-title">WORKDAY SCHEDULER</p>
            <div class="button-holder">
                    <img src={github} id="hoverbig" onClick={() => window.open("https://github.com/AlessandroB96/WorkDayScheduler", "_blank")} class="github3" alt="linkedin link" />
                    <button class="liveurl" id="hoverbig" onClick={() => window.open("https://alessandrob96.github.io/WorkDayScheduler/", "_blank")} value="PLACEHOLDER">LIVE URL</button>
                </div>
            <p class="cards">Calendar app to save events for each hour of the day</p>
        </section>
    </button>
    
    
    <button class="btn" id="hoverbig" value="PLACEHOLDER">
        <section class="project9" id="allcards">
            <p class="cards-title">PORTFOLIO GENERATOR</p>
            <div class="button-holder">
                    <img src={github} id="hoverbig" onClick={() => window.open("https://github.com/AlessandroB96/portfolio-generator", "_blank")} class="github3" alt="linkedin link" />
                    <button class="liveurl" id="hoverbig" onClick={() => window.open("https://github.com/AlessandroB96/portfolio-generator", "_blank")} value="PLACEHOLDER">LIVE URL</button>
                </div>
            <p class="cards">Building an HTML portfolio generator using Node.js</p>
        </section>
    </button>
    
    <button class="btn" id="hoverbig" value="PLACEHOLDER">
        <section class="project10" id="allcards">
            <p class="cards-title">README GENERATOR</p>
            <div class="button-holder">
                    <img src={github} id="hoverbig" onClick={() => window.open("https://github.com/AlessandroB96/READMEgenerator", "_blank")} class="github3" alt="linkedin link" />
                    <button class="liveurl" id="hoverbig" onClick={() => window.open("https://github.com/AlessandroB96/READMEgenerator", "_blank")} value="PLACEHOLDER">LIVE URL</button>
                </div>
            <p class="cards">Using express and npm inqurier to generate a README file</p>
        </section>
    </button>
    
    <button class="btn" id="hoverbig" value="PLACEHOLDER">
        <section class="project7" id="allcards">
            <p class="cards-title">THE FOOD CONCH</p>
            <div class="button-holder">
                    <img src={github} id="hoverbig" onClick={() => window.open("https://github.com/AlessandroB96/The-Food-Conch", "_blank")} class="github3" alt="linkedin link" />
                    <button class="liveurl" id="hoverbig" onClick={() => window.open("https://alessandrob96.github.io/The-Food-Conch/", "_blank")} value="PLACEHOLDER">LIVE URL</button>
                </div>
            <p class="cards">Enter your zip code to find nearby restuarants or choose a recipe to cook</p>
        </section>
    </button>
    
    <button class="btn"  id="hoverbig" value="Go to my webpage and track your budget">
        <section class="project2" id="allcards">
            <p class="cards-title">BUDGET TRACKER</p>
            <div class="button-holder">
                    <img src={github} id="hoverbig" onClick={() => window.open("https://github.com/AlessandroB96/BudgetTracker", "_blank")} class="github3" alt="linkedin link" />
                    <button class="liveurl" id="hoverbig" onClick={() => window.open("https://hidden-caverns-61141.herokuapp.com/", "_blank")} value="PLACEHOLDER">LIVE URL</button>
                </div>
            <p class="cards">Progressive Web Application where users can track their spending</p>
        </section>
    </button>
    
    <button class="btn" id="hoverbig" value="PLACEHOLDER">
        <section class="project12" id="allcards">
            <p class="cards-title">TECH BLOGGER</p>
            <div class="button-holder">
                    <img src={github} id="hoverbig" onClick={() => window.open("https://github.com/AlessandroB96/TechBloggr", "_blank")} class="github3" alt="linkedin link" />
                    <button class="liveurl" id="hoverbig" onClick={() => window.open("https://techbloggr.herokuapp.com/", "_blank")} value="PLACEHOLDER">LIVE URL</button>
                </div>
            <p class="cards">Blog site where users can post and discuss tech news</p>
        </section>
    </button>

    <button class="btn" id="hoverbig" value="PLACEHOLDER">
        <section class="project13" id="allcards">
            <p class="cards-title">GYM QUEST</p>
            <div class="button-holder">
                    <img src={github} id="hoverbig" onClick={() => window.open("https://github.com/AlessandroB96/GymQuest", "_blank")} class="github3" alt="linkedin link" />
                    <button class="liveurl" id="hoverbig" onClick={() => window.open("https://gym-quest.herokuapp.com/", "_blank")} value="PLACEHOLDER">LIVE URL</button>
                </div>
            <p class="cards">Full stack social media platform to connect with gym buddies</p>
        </section>
    </button>
</section>
</article>
  );
}

export default Card;
