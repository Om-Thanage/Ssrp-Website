import  { useEffect } from 'react';
import './Team.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import teamSections from './TeamData';
import Navbar from '../../containers/navbar/Navbar';

function Team() {


  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  useEffect(() => {
    if(window.innerWidth > 576) {
    setTimeout(() => {
      const vh = window.innerHeight * 0.18; // Calculating 15vh in pixels
      window.scrollTo(0, window.innerHeight - vh );
    }, 1000);}
  }, []);


  const renderMembers = (members, executives) => {
    return (
      <div className='team-content'>
        {executives && executives.length > 0 && (
          <div className='Team-head'>
            {executives.map((executive) => (
              <div className="head-card" data-aos={executive.animation} key={executive.name}>
                <div className="head-card-photo">
                  <img className='head-photo' src={executive.img} alt={executive.name} />
                </div>
                <h2 className='name'>{executive.name}</h2>
                <h5 className='designation'>{executive.designation}</h5>
                <div className="hover-overlay">
                  <div className="hover-icons">
                    <i className="fas fa-info-circle">
                      <a href={executive.linkedIn} target="_blank" rel="noopener noreferrer">
                        <img className="social-media-img" src='/assets/images/socialmedia_images/linkedin.svg' alt="LinkedIn" />
                      </a>
                    </i>
                    <i className="fas fa-user-circle">
                      <a href={executive.Github} target="_blank" rel="noopener noreferrer">
                        <img className="social-media-img" src='/assets/images/socialmedia_images/github.svg' alt="GitHub"  />
                      </a>
                    </i>
                  </div>
                </div>
                <div className="hover-overlay-phone">
                  <i className="fas fa-info-circle">
                    <a href={executive.linkedIn} target="_blank" rel="noopener noreferrer">
                      <img className="social-media-img-phone" src='/assets/images/socialmedia_images/linkedin.svg' alt="LinkedIn" />
                    </a>
                  </i>
                </div>
              </div>
            ))}
          </div>
        )}
        {members && members.length > 0 && (
          <div className='Team-head'>
            {members.map((member) => (
              <div className="head-card" data-aos={member.animation} key={member.name}>
                <div className="head-card-photo">
                  <img className='head-photo' src={member.img} alt={member.name} />
                </div>
                <h2 className='name'>{member.name}</h2>
                <h5 className='designation'>{member.designation}</h5>
                  <div className="hover-icons">
                    <i className="fas fa-info-circle">
                      <a href={member.linkedIn} target="_blank" rel="noopener noreferrer">
                        <img className="social-media-img" src='/assets/images/socialmedia_images/linkedin.svg' alt="LinkedIn" />
                      </a>
                    </i>
                    <i className="fas fa-user-circle">
                      <a href={member.Github} target="_blank" rel="noopener noreferrer">
                        <img className="social-media-img" src='/assets/images/socialmedia_images/github.svg' alt="GitHub"  />
                      </a>
                    </i>
                </div>
                </div>
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className='Team_Page'>
      <div className='Team'>
        <section className='Team_section'>
          <div className='team-container'>
          <Navbar />
            <img src='/assets/images/Community/Team.webp' className='team-image' alt='XYZ' />
            
            <div className='team-overlay'>
              
              <h1 className='team-heading' data-aos="zoom-in">
                <div className="flex" >Stellar Team</div>
              </h1>
              <div className='team-description' data-aos="zoom-in">
                With the strength of 30+ students we focus on developing and launching a satellite, the KJSCE StudentSAT, while also combining research projects on space exploration with participation in competitions like Spaceport America, International Rover Challenge and CANSAT.
              </div>
              <div className='team-description' data-aos="zoom-in">Meet the Space Visionaries</div>
              <div className='arrow-down' data-aos="fade-down"> ↓ </div>
            </div>
          </div>
          {teamSections.map((section) => (
            <div key={section.id} className="team-member-container">
              <div className='section-title-container' data-aos="zoom-in">
                <div className='Team-department' data-aos="zoom-in" >{section.title}</div>
              </div>
              <div className='Team-Members'>
                {renderMembers(section.members, section.executive)}
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}

export default Team;
