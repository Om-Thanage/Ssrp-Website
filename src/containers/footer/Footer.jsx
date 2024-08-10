import  { useEffect } from 'react'
import './Footer.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

function Footer() {
  useEffect(()=>{
    AOS.init({duration:"2000"});

  },[]);
  return (
    
    <div className='Footer'>
         
            <a href="https://ssrp-website-beta.vercel.app/" target="_blank" rel="noopener noreferrer"><img className="social-media-img"  src='/assets/images/socialmedia_images/facebook.svg' alt="Facebook" /></a>
            <a href="https://github.com/SOMAIYA-SPACE-RESEARCH-PROJECT" target="_blank" rel="noopener noreferrer"><img className="social-media-img"  src='/assets/images/socialmedia_images/github.svg' alt="GitHub" /></a>
            <a href="https://www.instagram.com/team_ssrp/" target="_blank" rel="noopener noreferrer"><img className="social-media-img" src='/assets/images/socialmedia_images/instagram.svg'  alt="Instagram" /></a>
 
            <a href="/home"><img className="ssrp-logo-img" src='/assets/images/socialmedia_images/logo.png'  alt="SSRP logo" /></a>
 
            <a href="https://www.linkedin.com/company/somaiya-space-research-project-ssrp/" target="_blank" rel="noopener noreferrer"><img className="social-media-img" src='/assets/images/socialmedia_images/linkedin.svg'   alt="LinkedIn" /></a>
            <a href="https://twitter.com/team_ssrp" target="_blank" rel="noopener noreferrer"><img className="social-media-img" src='/assets/images/socialmedia_images/twitter.svg'  alt="Twitter" /></a>
            <a href="https://youtube.com/@somaiyaspaceresearchproject?si=2Ye33Ito9PmoDvGZ" target="_blank" rel="noopener noreferrer"><img className="social-media-img" src='/assets/images/socialmedia_images/youtube.svg'  alt="YouTube" /></a>
                  
    </div>
  )
}

export default Footer;