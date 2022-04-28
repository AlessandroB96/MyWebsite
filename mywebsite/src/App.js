import React from 'react';
import './App.css';
import Nav from './components/Nav';
import Main from './components/Main';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Card from './components/Card';

function App() {
  return (
<div>
    <Nav />
    <Main />
    <About 
      content="I graduated from City College's Grove School of Engineering with a Bachelors of Engineering
      in Mechanical Engineering in the Spring of 2021.
      Starting December of 2021, I enrolled in Columbia University's Full Stack Software Engineering Coding Bootcamp and I will graduate in April of 2022! I also love pasta, I enjoy hiking, binging TV shows, but most importantly, I love soccer! "
    />
    <Skills />
    <Experience />

    <section id="projects-tag"> 
        <h1 class="project-title">PROJECTS</h1>
    </section>

  <article class="all-cards-container">
    <div class="card-container">
        <Card 
          projectNumber="project4"
          projectTitle="TASKMASTER PRO"
          projectDescription="Edit, organize, and manage tasks"
          url="https://alessandrob96.github.io/taskmaster-pro/"
          value="click this button to go to taskmaster pro"
        />
        <Card 
          projectNumber="project1"
          projectTitle="RUN BUDDY"
          projectDescription="Sign up and pick a trainer"
          url="https://alessandrob96.github.io/taskmaster-pro/"
          value="click this button to go to taskmaster pro"
        />
        <Card 
          projectNumber="project3"
          projectTitle="GIT IT DONE"
          projectDescription="Search a github username or sort by language to assist users"
          url="https://alessandrob96.github.io/git-it-done/"
          value="Go to my webpage created for Run Buddy"
        />
        <Card 
          projectNumber="project5"
          projectTitle="PASSWORD GENERATOR"
          projectDescription="Front end webpage that generates a password based on user criteria"
          url="https://alessandrob96.github.io/PasswordGenerator/"
          value="Go to my webpage created for Run Buddy"
        />
        <Card 
          projectNumber="project6"
          projectTitle="CODE QUIZ"
          projectDescription="Series of timed coding related questions"
          url="https://alessandrob96.github.io/codequiz/"
          value="Go to my webpage created for Run Buddy"
        />
        <Card 
          projectNumber="project8"
          projectTitle="WORKDAY SCHEDULER"
          projectDescription="Calendar app to save events for each hour of the day"
          url="https://alessandrob96.github.io/WorkDayScheduler/"
          value="Go to my webpage created for Run Buddy"
        />
        <Card 
          projectNumber="project9"
          projectTitle="PORTFOLIO GENERATOR"
          projectDescription="Building an HTML portfolio generator using Node.js"
          url="https://github.com/AlessandroB96/portfolio-generator"
          value="Go to my webpage created for Run Buddy"
        />
        <Card 
          projectNumber="project10"
          projectTitle="README GENERATOR"
          projectDescription="Using express and npm inqurier to generate a README file"
          url="https://github.com/AlessandroB96/READMEgenerator"
          value="Go to my webpage created for Run Buddy"
        />
        <Card 
          projectNumber="project7"
          projectTitle="THE FOOD CONCH"
          projectDescription="Front-end application utilizing a CSS framework, 2 server-side APIs, and local storage"
          url="https://alessandrob96.github.io/The-Food-Conch/"
          value="Go to my webpage created for Run Buddy"
        />
        <Card 
          projectNumber="project2"
          projectTitle="BUDGET TRACKER"
          projectDescription="Progressive Web Application where users can track their spending"
          url="https://hidden-caverns-61141.herokuapp.com/"
          value="Go to my webpage created for Run Buddy"
        />
        <Card 
          projectNumber="project12"
          projectTitle="TECH BLOGGER"
          projectDescription="Blog site where users can post and discuss tech news"
          url="https://techbloggr.herokuapp.com/"
          value="Go to my webpage created for Run Buddy"
        />
        <Card 
          projectNumber="project13"
          projectTitle="GYM QUEST"
          projectDescription="Full stack social media platform to connect with gym buddies"
          url="https://gym-quest.herokuapp.com/"
          value="Go to my webpage created for Run Buddy"
        />
    </div>
  </article>
  <Contact />
</div>
  );
}

export default App;
