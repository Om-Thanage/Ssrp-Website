import './Loading.css';

function PreLoading() {
  return (
    <div className='Loading' style={{ marginTop: "-15vh"}}>
      <img fetchPriority='high' src='/assets/loading.png' alt='loading' className='loading-img' />
      <div className="container-title">
        <div className="text-title" id='one'>SSRP</div>
        <div className="text-title" id='two'>SSRP</div>
        <div className="text-title" id='three'>SSRP</div>
      </div>
      <div className='subtitle'>Launching Dreams into Orbits</div>
      <div class="shootingStar"></div>
    </div>
  );
}

export default PreLoading;