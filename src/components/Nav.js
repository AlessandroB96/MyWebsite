import React from 'react';

function Nav({ handlePageChange }) {


    return (
        <header>

        <style>
             @import url('https://fonts.googleapis.com/css2?family=Dosis&display=swap');
             <link rel="stylesheet" href="https://fonts.sandbox.google.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
        </style>


            <ul class="menu-items"> 
                <li>
                    <a 
                    href="#about-me"
                    onClick={() => handlePageChange('about me')} 
                    class="nav">
                        ABOUT ME
                    </a>
                </li>
                <li>
                    <a href="#skills"
                       currentPage="Skills" 
                       onClick={() => handlePageChange('Skills')} 
                       class="nav">
                        SKILLS
                    </a>
                </li>
                <li>
                    <a href="#experience" 
                    onClick={() => handlePageChange('Experience')} 
                    class="nav">
                        EXPERIENCE
                    </a>
                </li>
                <li>
                    <a href="#projects" 
                    onClick={() => handlePageChange('Projects')} 
                    class="nav" >
                        PROJECTS
                    </a>
                </li>
                <li>
                    <a href="#resume" 
                    onClick={() => handlePageChange('Resume')}
                    class="nav">
                        RESUME
                    </a>
                </li>  
                <li>
                    <a href="#contact" 
                    onClick={() => handlePageChange('Contact')}
                    class="nav">
                        CONTACT
                    </a>
                </li>  
            </ul>
        </header>
    );
}

export default Nav;