import { useEffect } from 'react';
import './CrowdFunding.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

function Crowdfunding() {


    useEffect(() => {
        AOS.init({ duration: "2000" });
      }, []);

  return (
    <>
        <div className="crowd-funding-container">
            <h1 className="crowdfunding-heading" data-aos="zoom-in">Introduction</h1>
            <div className="crowd-funding-video" data-aos="zoom-in">
                <video loop controls id="myVideo">
                    <source src="/assets/crowdfundingvideo.mp4" type="video/mp4" />
                </video>
            </div>
            <div className="crowd-funding-content" data-aos="zoom-in">
                <p>Support the future of space exploration with the Somaiya Space Research Project!Our dedicated team of students at KJSCE is pushing the boundaries of space science and technology. With your contribution to our crowdfunding campaign, we aim to develop innovative solutions, conduct groundbreaking experiments, and participate in prestigious space competitions. Your support will provide us with the necessary resources for advanced equipment, materials, and opportunities to collaborate with industry experts. Join us in our quest to explore the cosmos and inspire the next generation of space scientists and engineers. Donate today and help us reach for the stars!</p>
            </div>
        </div>
        {/* <div className="crowd-funding-container__right">
            <div className="crowd-funding-video">
                <video loop controls id="myVideo">
                    <source src="/assets/crowdfundingvideo.mp4" type="video/mp4" />
                </video>
            </div>
        </div> */}
    {/*For future purposes */}
    {/* <div className='crowd-funding-investments'>
        <div className='raised'>
            <div className='money'>₹100K</div>
            <div className='raised-text'onMouseEnter={textEnter} onMouseLeave={textLeave}>Raised</div>
        </div>
        <div className='investors'>
            <div className='investors-count'>100</div>
            <div className='investors-text'onMouseEnter={textEnter} onMouseLeave={textLeave}>Investors</div>
        </div>
    </div> */}
    {/* <div className="crowdfunding-investors">
        <div className="crowdfunding-heading">Our Investors</div>
        <div className="crowdfunding-investors-list">
            <div className="investor">
                <img src="https://via.placeholder.com/100" alt="Investor" className="investor-image" />
                <div className="investor-name">John Doe</div>
                <div className="investor-amount">₹1000</div>
            </div>
            <div className="investor">
            <img src="https://via.placeholder.com/100" alt="Investor" className="investor-image" />
                <div className="investor-name">Jane Doe</div>
                <div className="investor-amount">₹500</div>
            </div>
            <div className="investor">
            <img src="https://via.placeholder.com/100" alt="Investor" className="investor-image" />
                <div className="investor-name">John Smith</div>
                <div className="investor-amount">₹200</div>
            </div>
            <div className="investor">
            <img src="https://via.placeholder.com/100" alt="Investor" className="investor-image" />
                <div className="investor-name">Jane Smith</div>
                <div className="investor-amount">₹100</div>
            </div>
        </div>
    </div> */}
    <div className="crowdfunding-googleform">
        <div className="crowdfunding-heading" data-aos="zoom-in">Google Form</div>
        <div className="google-form" >
            <iframe data-aos="fade-up" src="https://docs.google.com/forms/d/e/1FAIpQLScLvn9j4LvX4-fnkcxXp89dGAKhJaUJBWF2-0eCat2UGxScTQ/viewform" height={"100%"} width={"100%"} title="SSRP Google Form" />
        </div>
    </div>
    </>
  )
}

export default Crowdfunding