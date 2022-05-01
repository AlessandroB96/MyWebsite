import React, {useState} from 'react';
import { validateEmail } from '../utils/helpers';

function Contact() {

    const [formState, setFormState] = useState({ name: '', email: '', message: ''});
    const [errorMessage, setErrorMessage] = useState('');

    //destructure formState
    const { name, email, message } = formState;

    function handleSubmit(e) {
        e.preventDefault();
        console.log('Submit Form', formState);
        }

    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            // isValid conditional statement
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
              } else {
                setErrorMessage('');
              }
          } else {
            if (!e.target.value.length) {
              setErrorMessage(`${e.target.name} is required.`);
            } else {
              setErrorMessage('');
            }
          } 
          if (!errorMessage) {
        setFormState({...formState, [e.target.name]: e.target.value })
          }
      }

    return (
        <footer class="" id="">

            <div class="contact-contain">
                <div class="text-container">
                <h1 class="text" id="contact">CONTACT ME</h1>
                </div> 
            </div>
        <br />

        <div class="box-container">
            <form id="contact-form" onSubmit={handleSubmit}>
                <div class="name-line">
                    <label class="name" htmlFor="name">NAME:</label>
                    <input class="label"  name="name" defaultValue={name} type="text" placeholder="name..." onBlur={handleChange} />
                </div>
                <br />
                <div class="email-line">
                    <label class="email" htmlFor="email">EMAIL:</label>
                    <input class="label" name="email" defualtValue={email} type="email" placeholder="email address..." onBlur={handleChange} />
                </div>
                <br />
                <div class="message-line">
                    <label class="message" htmlFor="message">MESSAGE:</label>
                    <textarea name="message" defaultValue={message} placeholder="message..." onBlur={handleChange} />
                </div>
                {errorMessage && (
                    <div>
                        <p  className="error-text">{errorMessage}</p>
                    </div>

                )}
                
                <br />
                <div class="submit-container">
                <button class="submit" type="submit">SUBMIT</button>
                </div>
            </form>
        </div>
    </footer>
    )
}

export default Contact;