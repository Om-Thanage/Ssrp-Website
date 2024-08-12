import { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import Events from './EventDetailsData';
import './EventDescription.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import gsap from 'gsap';

const EventDescription = () => {
  const { eventId } = useParams();
  const [event, setEvent] = useState(false);
  const container = useRef();

  useEffect(() => {
    const foundEvent = Events.find(p => p.id === parseInt(eventId));

    if (foundEvent) {
      setEvent(foundEvent);
    }

    AOS.init({ duration: "2000" });
  }, [eventId]);

  useEffect(() => {
    window.scrollTo(0, 0);

    const items = document.querySelectorAll(".eventimage");
    const offset = -20;

    gsap.set(items, {
      x: (index) => offset * index,
      y: (index) => -offset * index,
      zIndex: (index) => items.length - index
    });

    function diagonalLoop(items) {
      let totalItems = items.length;
      let currentItem = 0;

      function updatePositions() {
        for (let i = 0; i < totalItems; i++) {
          let itemIndex = (currentItem + i) % totalItems;
          let item = items[itemIndex];
          gsap.to(item, {
            x: offset * i,
            y: -offset * i,
            zIndex: totalItems - i,
            scale: 1,
            opacity: 1
          });
        }
      }

      function moveToNext() {
        const movingItem = items[currentItem];

        gsap.to(movingItem, {
          scale: 0.6,
          y: "+=30",
          opacity: 0,
          duration: 0.1,
          onComplete: () => {
            currentItem = (currentItem + 1) % totalItems;
            updatePositions();

            gsap.to(movingItem, {
              scale: 1,
              y: "-=0",
              opacity: 1,
              duration: 0.2,
              delay: 0.2
            });
          }
        });
      }

      setInterval(moveToNext, 2000);
      updatePositions();
    }

    diagonalLoop(items);
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
          <div className='event-title' data-aos="zoom-in">
            Gallery
          </div>
          <div className="eventgallery"></div>
      </div>
    </div>
  );
};

export default EventDescription;
