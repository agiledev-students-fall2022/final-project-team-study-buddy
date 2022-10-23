import React from 'react';
import './More.css';

function More() {
  return (
      <div className='container'> 
        <div className='map'>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3020.3109102922936!2d-73.94168398458802!3d40.79916114021546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2f70423376a7b%3A0x30a29fe36645519f!2sEl%20Barrista%20cafe!5e0!3m2!1sen!2sus!4v1666538623209!5m2!1sen!2sus" 
            width="600" 
            height="450" 
            style={{ border: "0" }}
            allowfullscreen="" 
            loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>
      </div>
  );
}

export default More;