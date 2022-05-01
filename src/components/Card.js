import React from 'react';
import github from '../../src/assets/images/github-1.svg';

function Card() {

    const projects = [

        {   
            project_number: 'project4',
            title: 'TASKMASTER PRO',
            githubUrl: 'https://github.com/AlessandroB96/taskmaster-pro',
            live_url: 'https://alessandrob96.github.io/taskmaster-pro/',
            description: 'Edit, organize, and manage tasks'
        },
        {
            project_number: 'project3',
            title: 'GIT IT DONE',
            githubUrl: 'https://github.com/AlessandroB96/git-it-done',
            live_url: 'https://alessandrob96.github.io/git-it-done/',
            description: 'Search a github username/sort by language to assist users'
        },
        {
            project_number: 'project6',
            title: 'CODE QUIZ',
            githubUrl: 'https://github.com/AlessandroB96/codequiz',
            live_url: 'https://alessandrob96.github.io/codequiz/',
            description: 'Series of timed coding related questions'
            
        },
        {
            project_number: 'project8',
            title: 'WORKDAY SCHEDULER',
            githubUrl: 'https://github.com/AlessandroB96/WorkDayScheduler',
            live_url: 'https://alessandrob96.github.io/WorkDayScheduler/',
            description: 'Calendar app to save events for each hour of the day'
        },
        {
            project_number: 'project9',
            title: 'PORTFOLIO GENERATOR',
            githubUrl: 'https://github.com/AlessandroB96/portfolio-generator',
            live_url: '',
            description: 'Building an HTML portfolio generator using Node.js'
        },
        {
            project_number: 'project10',
            title: 'README GENERATOR',
            githubUrl: 'https://github.com/AlessandroB96/taskmaster-pro',
            live_url: '',
            description: 'Using express and npm inqurier to generate a README file'
        },
        {
            project_number: 'project7',
            title: 'THE FOOD CONCH',
            githubUrl: 'https://github.com/AlessandroB96/The-Food-Conch',
            live_url: 'https://alessandrob96.github.io/The-Food-Conch/',
            description: 'Enter your zip code to find nearby restuarants or choose a recipe to cook'
        },
        {
            project_number: 'project2',
            title: 'BUDGET TRACKER',
            githubUrl: 'https://github.com/AlessandroB96/BudgetTracker',
            live_url: 'https://hidden-caverns-61141.herokuapp.com/',
            description: 'Progressive Web Application where users can track their spending'
        },
        {
            project_number: 'project12',
            title: 'TECH BLOGGER',
            githubUrl: 'https://github.com/AlessandroB96/TechBloggr',
            live_url: 'https://techbloggr.herokuapp.com/',
            description: 'Blog site where users can post and discuss tech news'
        },
        {
            project_number: 'project13',
            title: 'GYM QUEST',
            githubUrl: 'https://github.com/AlessandroB96/GymQuest',
            live_url: 'https://gym-quest.herokuapp.com/',
            description: 'Full stack social media platform to connect with gym buddies'
        } 
    ]
return (
    <article class="projects" id="projects"> 
        <section id="projects-tag"> 
            <h1 class="project-title">PROJECTS</h1>
        </section>

    <section class="projects-content">

    {projects.map((data) => (

        <button class="btn" id="hoverbig" value="PLACEHOLDER">
            <section class={data.project_number} id="allcards">
                <p class="cards-title">{data.title}</p>
                    <div class="button-holder">
                        <img src={github} id="hoverbig" onClick={() => window.open(data.githubUrl,"_blank")} class="github3" alt="linkedin link" />
                        <button class="liveurl" id="hoverbig" onClick={() => window.open(data.live_url, "_blank")} value="PLACEHOLDER">LIVE URL</button>
                        </div>
                <p class="cards">{data.description}</p>
            </section>
        </button>
    ))}
    </section>
    </article>
)
}

export default Card;