import React from 'react';

function Nav({ currentPage, handlePageChange }) {

    currentPage = ['about me','skills', 'experience'];

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
                        {currentPage[0]}
                    </a>
                </li>
                <li>
                    <a href="#skills"
                       currentPage="Skills" 
                       onClick={() => handlePageChange('Skills')} 
                       class="nav">
                        skills
                    </a>
                </li>
                <li>
                    <a href="#experience" 
                    onClick={() => handlePageChange('Experience')} 
                    class="nav">
                        experience
                    </a>
                </li>
                <li>
                    <a href="#projects" 
                    onClick={() => handlePageChange('Projects')} 
                    class="nav" >
                        projects
                    </a>
                </li>
                <li>
                    <a href="#resume" 
                    onClick={() => handlePageChange('Contact')}
                    class="nav">
                        contact
                    </a>
                </li>  
            </ul>
        </header>
    );
}

export default Nav;