import  { useEffect, useState } from "react";
import "./NavBar.css";


const NavBar = () => {
  const [sticky, setSticky] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {

    const handleScroll = () => {
      if (window.scrollY > 20) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={sticky ? "sticky" : ""}>
      <div className="nav-content">
        <div className="logo" data-aos="fade-down">
          <a href="/"><img className='navbar-logo' src='/assets/images/about_images/logo.png' alt='Ssrp-logo' /></a>
          <a href="https://kjsce.somaiya.edu/en/"><img className='navbar-logo' src='/assets/images/Trust_logo/somaiya white.png' alt='KJSCE-logo' /></a>
          <a href="https://www.somaiya.edu/en/"><img className='navbar-logo' src='/assets/images/Trust_logo/somaiya trust.png' alt='Somaiya_Vidyavihar_University-logo' /></a>
        </div>
        <div className="toggle-button" onClick={toggle}>≡</div>
        {
          isOpen && (
            <div className="nav-links mobile" data-aos="fade-left">
              <ul>
                <li className="nav-item target" >
                  <div className="navigation">
                    <a className="nav-link1 active" aria-current="page" href="/">
                      Home
                    </a>
                  </div>
                </li>
                <li className="nav-item target" >
                  <div className="navigation">
                    <a className="nav-link1 active" aria-current="page" href="/project">
                      Projects
                    </a>
                  </div>
                </li>
                <li className="nav-item target" >
                  <div className="navigation">
                    <a className="nav-link1 active" aria-current="page" href="/community">
                      Community
                    </a>
                  </div>
                </li>
                <li className="nav-item target" >
                  <div className="navigation">
                    <a className="nav-link1 active" aria-current="page" href="/events">
                      Events
                    </a>
                  </div>
                </li>
                <li className="nav-item target" >
                  <div className="navigation">
                    <a className="nav-link1 active" aria-current="page" href="/crowdfunding">
                      Crowd-Funding
                    </a>
                  </div>
                </li>
                <li className="nav-item target" >
                  <div className="navigation">
                    <a className="nav-link1 active" aria-current="page" href="/contact">
                      Contact US
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          )
        }
        <ul className={`nav-links ${isOpen ? "open" : ""}`} data-aos="fade-down">
          <li className="nav-item target" >
            <div className="navigation">
              <a className="nav-link1 active" aria-current="page" href="/">Home</a>
            </div>
          </li>
          <li className="nav-item target" >
            <div className="navigation">
              <a className="nav-link1 active" aria-current="page" href="/project">Projects</a>
            </div>
          </li>
          <li className="nav-item target" >
            <div className="navigation">
              <a className="nav-link1 active" aria-current="page" href="/community">Community</a>
            </div>
          </li>
          <li className="nav-item target" >
            <div className="navigation">
              <a className="nav-link1 active" aria-current="page" href="/events">Events</a>
            </div>
          </li>
          <li className="nav-item target" >
            <div className="navigation">
              <a className="nav-link1 active" aria-current="page" href="/crowdfunding">Crowd-Funding</a>
            </div>
          </li>
          <li className="nav-item target" >
            <div className="navigation">
              <a className="nav-link1 active" aria-current="page" href="/contact">Contact US</a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
