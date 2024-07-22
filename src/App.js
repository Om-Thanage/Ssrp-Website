//import { SpeedInsights } from "@vercel/speed-insights/react";
import './App.css';
import  { useEffect} from 'react';
import ProjectPage from './pages/project/ProjectPage'
import StarBackground from './components/background/Background';
import NotFound from './components/Not found page/NotFound';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AOS from 'aos';
import ContactPage from './pages/contact/ContactPage';
import HomePage from './pages/home/HomePage';
import TeamPage from './pages/team/TeamPage';
import EventPage from './pages/events/EventPage';
import ProjectDescriptionPage from './pages/project/ProjectDescriptionPage';
//import EventDescription from './pages/events/EventDescriptionPage';
import { CursorProvider } from './components/cursor/CursorContext';
import CrowdFundingPage from './pages/crowdfunding/CrowdFundingPage';
import NewEventPage from './pages/events/NewEventpage4';
import EventDescriptionPage from './pages/events/EventDescriptionPage';


function App() {
    
    useEffect(()=>{
      AOS.init({duration:"2000"});
    },[]);


  
  return (
    <CursorProvider >
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <div className="App">
            <div className="stars">
              <StarBackground />
            </div>
            <div className="absolute">
            
              <div className="relative" style={{ marginTop: "-15vh"}}>
                <HomePage />
              </div>
            </div>
          </div>
        } />
      
        
      <Route path="/community" element={
        
        <div className="App">
            <div className="stars">
              <StarBackground />
            </div>
            <div className="absolute">
              <div className="relative">
                <TeamPage />
              </div>
            </div>
          </div>} />

          <Route path="/events" element={
        
        <div className="App">
              <div className="relative" style={{
                marginTop: "-15vh"
              }}>
                <EventPage />
                
            </div>
          </div>} />


          
            <Route path="/event/:eventId" element={
            <div className="App">
            <div className="stars">
              <StarBackground />
            </div>
      
            <div className="absolute">
              <div className="relative">
                <EventDescriptionPage/>
              </div>
            </div>
          </div>
          } />
          

    

<Route path="/com" element={
        
        <div className="App">
            <div className="stars">
              <StarBackground />
            </div>
            <div className="absolute">
              <div className="relative">
                <NewEventPage />
              </div>
            </div>
          </div>} />


          <Route path="/project" element={
        
        <div className="App">
            <div className="stars">
              <StarBackground />
            </div>
            <div className="absolute">
              <div className="relative">
                <ProjectPage />
              </div>
            </div>
          </div>} />

          <Route path="/projects" element={

        
        <div className="App">
            <div className="stars">
              <StarBackground />
            </div>
            <div className="absolute">
              <div className="relative">
                <ProjectPage />
              </div>
            </div>
          </div>} />

          <Route path="/project/:projectId" element={
            <div className="App">
            <div className="stars">
              <StarBackground />
            </div>
            <div className="absolute">
              <div className="relative">
                <ProjectDescriptionPage />
              </div>
            </div>
          </div>
          } />

        <Route path="/contact" element={
          <div className="App">
            <div className="stars">
              <StarBackground />
            </div>
            <div className="absolute">
              <div className="relative">
                <ContactPage />
              </div>
            </div>
          </div>
        } />

        <Route path="/crowdfunding" element={
          <div className="App">
            <div className="stars">
              <StarBackground />
            </div>
            <div className="absolute">
              <div className="relative">
                <CrowdFundingPage />
              </div>
            </div>
          </div>
        } />


        <Route path="*" element={<NotFound />} />

      </Routes>
    </BrowserRouter>
    </CursorProvider>
          );
}

export default App;





