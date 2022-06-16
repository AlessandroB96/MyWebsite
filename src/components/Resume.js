import React from 'react';
import downloadsvg from '../../src/assets/images/download.svg';
import resume from '../../src/resume/Alessandro_Belaj_Resume.pdf';

function Resume() {
    return (
        <div class="resume">
        <a href={resume} download="Alessandro_Belaj_Resume" class="pdf">
        <div class="resume-container">
            <img src={downloadsvg} class="download" alt="resume download button" />
            <div class="resume-title">
                RESUME 
            </div>
        </div>
        </a>
    </div>
    );
}

export default Resume;