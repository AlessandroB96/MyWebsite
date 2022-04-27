import React from 'react';

function Nav() {
    return (
        <header>

        <style>
             @import url('https://fonts.googleapis.com/css2?family=Dosis&display=swap');
        </style>

            <ul class="menu-items"> 
                <li>
                    <a href="#about-me" class="nav">about me</a>
                </li>
                <li>
                    <a href="#skills" class="nav">skills</a>
                </li>
                <li>
                    <a href="#experience" class="nav">experience</a>
                </li>
                <li>
                    <a href="#projects" class="nav">projects</a>
                </li>
                <li>
                    <a href="#resume" class="nav">contact</a>
                </li>  
            </ul>
        </header>
    );
}

export default Nav;