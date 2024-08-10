import "./NewEvent.css";
import { Link } from 'react-router-dom';
import './Particle';
import Events from './EventDetailsData';
import { useNavigate } from 'react-router-dom';

export default function Scene() {

  const balls = [];
  for (let i = 0; i < 15; i++) {
    balls.push(<div key={i} className="ball"></div>);
  }
    const navigate = useNavigate();
    const handleEventClick = (id) => {
        navigate(`/event/${id}`);
    }

  return (
    <div className="Eventcontainer">
      <div className="main">
        <div className="article">
          <div className="panel1">
            <div className='Event-heading'>
              <div className='first-name'>Astro</div>
              <div className='last-name'>Chronicles</div>
            </div>
            <div className="bottom-text">
              <div className="arrow">
                <Link to="#"></Link>
              </div>
            </div>
            <div className="ball-container">
              {balls}
            </div>
          </div>
          {Events.map((event) => {
            const titleSpans = [];
            for (let i = 0; i < event.title.length; i++) {
              titleSpans.push(<span key={i}>{event.title[i]}</span>);
            }
            return (
              <div key={event.id} className={`panel`}>
                <img src={`/assets/images/events_images/${event.src}`} className='img1' alt={event.title} />
                <div className="Eventtitle">
                  <div onClick={()=> handleEventClick(event.id)}>
                    {titleSpans}
                  </div>
                </div>
              </div>
            );
          })}
          
        </div>
        
      </div>
      
    </div>
  );
}

