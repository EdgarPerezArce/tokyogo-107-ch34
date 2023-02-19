import "./about.css";
import { useState } from 'react';


function About() {
    const [visible, setVisible] = useState(false);
    const [phoneVisible, setPhoneVisible] = useState(false);
    
    function getEmail(){
        return (visible) ? 'tokyogo@gmail.com' : '';
    }

    function toggleEmail() {
        setVisible(!visible);
    }
    function validateCode(e) {
        const text = e.target.value;
        if (text.toLowerCase() === "cool") {
            setPhoneVisible(true);
        } else {
            setPhoneVisible(false);
        }
    }

    function getNumber(){
        return phoneVisible ? '813-556-4658' : '';
    }
    return(
        <div className="about">
            <h2>About Me</h2>
            <h4>I'm Edgar Perez</h4>
            <h6>{getEmail()}</h6>
            {/* /* <button onClick={() => window.location = 'tokyogo@gmail.com'} class="btn btn-sm btn-dark">Click to see my email</button> */}
            <button onClick={toggleEmail} class="btn btn-sm btn-dark">Click to see my email</button>

            <hr/>

            <p>Type the code to see my phone number</p>
            <input onChange={validateCode} placeholder='code'></input>

            <h6 classname='mt-3'>{getNumber()}</h6>
        </div>

    );
}

export default About;

