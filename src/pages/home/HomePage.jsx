import  { useState, useEffect} from 'react'
import Navbar from '../../containers/navbar/Navbar';
import Footer from '../../containers/footer/Footer';
import Home from '../../containers/home/Home';
import Contact from '../../containers/contact_us/Contact';
import PreLoading from '../../components/loading/Preloading';


function HomePage() {
    const[loading, setLoading]=useState(true);
    useEffect(() =>{
    
      setTimeout(() => {
        setLoading(false);
      }, 5000);
      
    }, []);
    if(loading){
        return (
        <div style={{marginTop:"15vh"}}>
        <PreLoading />
        </div>
        );
      }
  return (
    <>  
        <Navbar />
        <Home />
        <Contact />
        <Footer /> 
    </>
  )
}

export default HomePage