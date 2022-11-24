import React from 'react'
import './Footer.css'

const Footer = () => {
  return <>    
    <div className='footer-container'>
        <div className='footerText'>Connect With Me!</div>
            <footer className='footer-links'>
                <a href="https://github.com/shrushti-c" target='/blank'>
                    <img className='links' src="/images/gitHub.png" alt='GitHub Link'/>

                </a>
                <a href="mailto:shrushtichahande@gmail.com" target="/blank">
                <img className='links' src='/images/Gmail_icon_(2020).svg.png' alt="Gmail Link" />    
                </a>
                <a href="https://www.linkedin.com/in/shrushti-chahande-853830205/" target="/blank">
                <img className='links' src='/images/linkedin.png' alt='LinkedIn Link'/>
                </a>
                
            </footer>
<div className='footerText'>Shrushti Chahande</div>
            </div>
        
      
    
  </>

}

export default Footer
