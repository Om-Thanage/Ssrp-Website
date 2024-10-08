// import  { useEffect } from 'react';
import './Loading.css';
// import './Star.css';

function Loading() {
  // const Star = () => {
  //   useEffect(() => {
  //     const handleMouseMove = (e) => {
  //       const arr = [1, 0.9, 0.8, 0.5, 0.2];

  //       arr.forEach((i) => {
  //         const x = (1 - i) * 75;
  //         const star = document.createElement('div');

  //         star.className = 'star';
  //         star.style.top = `${e.pageY + Math.round(Math.random() * x - x / 2)}px`;
  //         star.style.left = `${e.pageX + Math.round(Math.random() * x - x / 2)}px`;


  //         document.body.appendChild(star);

  //         window.setTimeout(() => {
  //           document.body.removeChild(star);
  //         }, Math.round(Math.random() * i * 800));
  //       });
  //     };

  //     window.addEventListener('mousemove', handleMouseMove);

  //     return () => {
  //       window.removeEventListener('mousemove', handleMouseMove);
  //     };
  //   }, []);

  //   return null; 
  // };

  return (
    <div className='Loading' style={{ marginTop: "-15vh"}}>
      <img fetchPriority='high' src='/assets/loading.png' alt='loading' className='loading-img' />
      {/* <Star /> */}
      <div className="container-title">
        <div className="text-title" id='loadingone'>SSRP</div>
        <div className="text-title" id='loadingtwo'>SSRP</div>
        <div className="text-title" id='three'>SSRP</div>
      </div>
      <div className='subtitle'>Launching Dreams into Orbits</div>
      <div class="shootingStar"></div>
    </div>
  );
}

export default Loading;