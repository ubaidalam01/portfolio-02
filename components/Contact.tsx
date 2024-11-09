  "use client"
  import { useState } from "react";
  import { headerItems } from '@/Constants/Constants'
  import React from 'react'
  import './Contact.css'  
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
  import { faTwitter, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';


  const Contact = () => {

  const [showPopup, setShowPopup] = useState(false);

  const handleTwitterClick = (e:any) => {
    e.preventDefault();
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

    return (
      <section
        id={ headerItems.contact.page}
        className="contact-section">
        <h2 id='ct-h2'
        
        >Contact <span id='ct-sp' 
       
        >Me</span></h2>
        <p id='ct-p'
        
        >
          If you’d like to get in touch, feel free to send me a message using the form below or reach
          out on social media!
        </p>
        <form 
        
        >
          <div id='ct-div1'
          
          >
            <label htmlFor="name" 
           
            >
              Name
            </label>
            <input 
              type="text"
              id="name"
              placeholder="Your Name"
              className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:border-teal-600" 
            />
          </div>
          <div id='ct-div2'
          
          >
            <label id='ct-lb1'
            htmlFor="email"
            
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Your Email"
              
            />
          </div>
          <div id='ct-div3'
          className="mb-4"
          >
            <label id='ct-lb2'
            htmlFor="message"
             
              >
              Message
            </label>
            <textarea
              id="message"
              placeholder="Your Message"
              rows={4}
             
            />
          </div>
          <button id='ct-btn'
            type="submit">
            Send Message
          </button>
        </form>
        <div id='ct-div4'>
          <a href="" onClick={handleTwitterClick} className="text-2xl hover:text-teal-400">
    <FontAwesomeIcon icon={faTwitter} />
  </a>
  <a href="https://www.linkedin.com/in/ubaid-alam-a8b2242b5" className="text-2xl hover:text-teal-400">
    <FontAwesomeIcon icon={faLinkedin} />
  </a>
  <a href="https://github.com/ubaidalam01" className="text-2xl hover:text-teal-400">
    <FontAwesomeIcon icon={faGithub} />
  </a>
        </div>

     {showPopup && (
        <div className="fixed inset-0 bg-gray-700 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded shadow-lg max-w-sm mx-auto text-center">
            <h2 className="text-xl font-semibold text-red-500">Twitter is Banned in Pakistan</h2>
            <p className="mt-2 text-red-500">Unfortunately, Twitter is banned in your region.</p>
            <button 
              onClick={handleClosePopup} 
              className="mt-4 px-4 py-2 bg-teal-400 text-white rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
      </section>
    )
  }

  export default Contact
