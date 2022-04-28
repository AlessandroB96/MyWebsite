import React from 'react';

function Contact() {
    return (
        <footer class="" id="">

            <div class="contact-container">
                <div class="text-container">
                <h1 class="text">CONTACT ME</h1>
                </div> 
            </div>
        <br />

        <div class="box-container">
            <form id="contact-form">
                <div class="name-line">
                    <label class="name" htmlFor="name">NAME:</label>
                    <input class="label" type="text" placeholder="name..." />
                </div>
                <br />
                <div class="email-line">
                    <label class="email" htmlFor="email">EMAIL:</label>
                    <input class="label" type="email" placeholder="email address..." />
                </div>
                <br />
                <div class="message-line">
                    <label class="message" htmlFor="message">MESSAGE:</label>
                    <textarea name="message" placeholder="message..." />
                </div>
                    <div>
                        <p  className="error-text"></p>
                    </div>
                <br />
                <div class="submit-container">
                <button class="submit" type="submit">SUBMIT
                </button>
                </div>
            </form>
        </div>
    </footer>
    )
}

export default Contact;