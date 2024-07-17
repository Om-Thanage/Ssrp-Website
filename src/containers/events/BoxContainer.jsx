/*
import React from 'react';
import './BoxContainer.css';
import { Link } from 'react-router-dom';
import './Particle';


const events = [
  { id: 1, name: 'Event One', imgSrc: '/assets/images/events_images/cloud.jpg' },
  { id: 2, name: 'Event Two', imgSrc: '/assets/images/events_images/cloud.jpg' },
  { id: 3, name: 'Event Three', imgSrc: '/assets/images/events_images/cloud.jpg' },
  { id: 4, name: 'Event Four', imgSrc: '/assets/images/events_images/cloud.jpg' }
];

const BoxContainer = () => {
  return (
    <>
    
    <div id="container24">
      <div id="container2">
        <div className="event-box one">
        <div className="eventlanding">
          <div className='title22'>Astro</div>
          <div className='subtitle22'>Chronicles</div></div></div>
        {events.map(event => (
          <div key={event.id} className={`event-box ${event.id}`}>
            <div className="titleevent1">
              <Link to={`/event/${event.id}`}>
                <img
                  src="/assets/images/events_images/playButton.svg"
                  className='button'
                  alt='button'
                />
              </Link>
              <img src={event.imgSrc} className='img1' alt='img1' />
              {event.name}
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default BoxContainer;
*/
/*
import React from 'react';
import './BoxContainer.css';
import { Link } from 'react-router-dom';
import './Particle';

const events = [
  { id: 1, name: 'Event One', imgSrc: '/assets/images/events_images/cloud.jpg' },
  { id: 2, name: 'Event Two', imgSrc: '/assets/images/events_images/cloud.jpg' },
  { id: 3, name: 'Event Three', imgSrc: '/assets/images/events_images/cloud.jpg' },
  { id: 4, name: 'Event Four', imgSrc: '/assets/images/events_images/cloud.jpg' }
];

const BoxContainer = () => {
  return (
    <>
      <div className="hero-container">
        <div className="hero-content">
          <div className="name">
            <div className="first-name">Patrick</div>
            <div className="last-name">Heng</div>
          </div>
          <div className="description">
            CREATIVE DEVELOPER <br /> CURRENTLY BASED <br /> IN PARIS
          </div>
        </div>
        <div className="bottom-text">
          <div>Patrick Heng</div>
          <div>
            <Link to="#">Work</Link> , <Link to="#">About</Link>
          </div>
        </div>
        <div className="arrow">
          <Link to="#"></Link>
        </div>
      </div>

      <div id="container24">
        <div id="container2">
          <div className="event-box one">
            <div className="eventlanding desktop-device">
              <div className="title22">Astro</div>
              <div className="subtitle22">Chronicles</div>
            </div>
          </div>
          {events.map(event => (
            <div key={event.id} className={`event-box ${event.id}`}>
              <div className="titleevent1">
                <Link to={`/event/${event.id}`}>
                  <img
                    src="/assets/images/events_images/playButton.svg"
                    className='button'
                    alt='button'
                  />
                </Link>
                <img src={event.imgSrc} className='img1' alt='img1' />
                {event.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default BoxContainer;
*/

import React from 'react';
import './BoxContainer.css';
import { Link } from 'react-router-dom';
import './Particle';

const events = [
  { id: 1, name: 'Event One', imgSrc: '/assets/images/events_images/cloud.jpg' },
  { id: 2, name: 'Event Two', imgSrc: '/assets/images/events_images/cloud.jpg' },
  { id: 3, name: 'Event Three', imgSrc: '/assets/images/events_images/cloud.jpg' },
  { id: 4, name: 'Event Four', imgSrc: '/assets/images/events_images/cloud.jpg' }
];

const BoxContainer = () => {
  return (
    <>
      <div className="hero-container">
        <div className="hero-content">
          <div className="name">
            <div className="first-name">Astro</div>
            <div className="last-name">Chronicles</div>
          </div>
          <div className="description">
            CREATIVE DEVELOPER <br /> CURRENTLY BASED <br /> IN PARIS
          </div>
        </div>
        <div className="bottom-text">
          <div>Patrick Heng</div>
          <div>
            <Link to="#">Work</Link> , <Link to="#">About</Link>
          </div>
        </div>
        <div className="arrow">
          <Link to="#"></Link>
        </div>
      </div>

      {events.map(event => (
        <div key={event.id} className={`event-box ${event.id}`}>
          <div className="titleevent1">
            <Link to={`/event/${event.id}`}>
              <img
                src="/assets/images/events_images/playButton.svg"
                className='button'
                alt='button'
              />
            </Link>
            <img src={event.imgSrc} className='img1' alt='img1' />
            {event.name}
          </div>
        </div>
      ))}
    </>
  );
};

export default BoxContainer;
