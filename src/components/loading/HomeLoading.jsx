import Lottie from 'react-lottie';
import animationData from './HomeLoadingAnimation.json';

export default function HomeLoading() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };
    
    return (
      <div style={{ width: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop:'-15vh' }}>
        <Lottie 
          options={defaultOptions}
          height={'100%'}
          width={'100%'}
          isClickToPauseDisabled
        />
      </div>
    );
  }
