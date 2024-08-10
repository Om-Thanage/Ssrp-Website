import { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import Events from './EventDetailsData';
import './EventDescription.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(useGSAP);

const EventDescription = () => {
  const { eventId } = useParams();
  const [event, setEvent] = useState(false);
  const container = useRef();

  useGSAP(
    () => {
      // gsap.to('#img-one', { x: 200, duration: 1.5 });
      // gsap.to('#img-two', { x: -200, duration: 1.5 });
      // gsap.to('#img-three', { y: 200, duration: 1.5 });
      // gsap.to('#img-four', { y: -200, duration: 1.5 });
      // gsap.to('#img-five', { x: 0, duration: 1.5 });
      gsap.to('#img-one', { x: -20, y: -20, duration: 1, stagger:1 });
      gsap.to('#img-two', { x: 0, y: 0, duration: 1, stagger:1 });
      gsap.to('#img-three', { x: 20, y: 20, duration: 1, stagger:1 });
      gsap.to('#img-four', { x: 40, y: 40, duration: 1, stagger:1 });
      gsap.to('#img-five', { x: 60, y: 60, duration: 1, stagger:1 });



    },
    { scope: container }
  );
 

  useEffect(() => {
    const foundEvent = Events.find(p => p.id === parseInt(eventId));

    if (foundEvent) {
      setEvent(foundEvent);
    }

    AOS.init({ duration: "2000" });
  }, [eventId]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='events-details-container'>      
      <div className="image-left" ref={container}>
        <div className="eventimage" id="img-one"><img src='/assets/images/events_images/cloud.jpg' /></div>
        <div className="eventimage" id="img-two"><img src='/assets/images/events_images/eve.jpg' /></div>
        <div className="eventimage" id="img-three"><img src='/assets/images/events_images/red.jpg' /></div>
        <div className="eventimage" id="img-four"><img src='/assets/images/events_images/start.jpg' /></div>
        <div className="eventimage" id="img-five"><img src='/assets/images/events_images/moon.jpg' /></div>
      </div>
      <div className="event-description">
          <div className="close-button">
            <a href="/events">X</a>
          </div>
          <div className='event-title' data-aos="zoom-in">
            {event.title}
          </div>
          <div className='event-description-text' data-aos="fade-left">
            
          {event.description}
          </div>
      </div>

    </div>
  );
};

export default EventDescription;
