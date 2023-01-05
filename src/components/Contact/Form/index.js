import React, { useState } from 'react';

// import our helper functions
import { validateEmail } from '../../../utils/helpers';

function Contact() {
    // define our variables which will hold state for our form
    const [formState, setFormState] = useState({ name: "", email: "", message: "" });
    const { name, email, message } = formState; // assign them to deconstructed variables for easier use

    // define state for our error message
    const [error, setError] = useState("");

    // sync state with our form
    function handleChange(e) {
        if (e.target.name === "email") {
            const isValid = validateEmail(e.target.value);
            if (!isValid) {
                setError("Please enter a valid email address.");
            } else {
                setError("");
            }
        } else {
            if (!e.target.value.length) {
                setError(`${e.target.name} is required!`);
            } else {
                setError("");
            }
        }

        // sync state with form
        setFormState({ ...formState, [e.target.name]: e.target.value });
    }

    // handle form submission (dummy code at present)
    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }

    return (
        <div style={{width: '100%'}}>
            {/* inputs for contact section: name, email, message */}
            <form id="contact-form" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" defaultValue={name} onBlur={handleChange} />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" defaultValue={email} onBlur={handleChange} />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea name="message" rows="6" defaultValue={message} onBlur={handleChange} />
                </div>
                {error && (
                    <div>
                        <p className="error">{error}</p>
                    </div>
                )}
                <button type="submit">Contact Me</button>
            </form>
        </div>
    );
}

export default Contact;
