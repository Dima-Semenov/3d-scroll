import { useState, useEffect, useRef } from 'react';
import './App.css';
import videoBg from './media/video_optimized.mp4';
import music from './media/ambient.mp3';
import soundGif from './assets/sound.gif';
import { initialiseScroll } from './js';

const App = () => {
  const [isPauseMusic, setIsPauseMusic] = useState(true);
  const ref = useRef(null);

  const toggleStateMusic = () => {
    const newStateMusic = !isPauseMusic;

    if (newStateMusic) {
      ref.current.pause();
    } else {
      ref.current.play();
    }

    setIsPauseMusic(newStateMusic);
  };

  useEffect(() => {
    window.onfocus = () => {
      isPauseMusic ? ref.current.pause() : ref.current.play();
    };

    window.onblur = () => {
      ref.current.pause();
    };

    window.scrollTo(0, 1);

    initialiseScroll();
  }, [isPauseMusic]);

  return (
    <div className='container'>
      <section className='gallery'>
        <div className='frame'>
          <div className='frame__content'>
            <h2>Beautiful World</h2>
          </div>
        </div>

        <div className='frame'>
          <div className='frame__content'>
            <div className='frame-media frame-media-left frame-media-1'></div>
          </div>
        </div>

        <div className='frame frame_bg'>
          <div className='frame__content'>
            <video
              className='frame-media frame-media-right'
              src={videoBg}
              autoPlay
              loop
              muted
            ></video>
          </div>
        </div>

        <div className='frame'></div>

        <div className='frame'>
          <div className='frame__content text-right'>
            <h3>Pure planet</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
              voluptates aut impedit amet natus tenetur minima animi! Quidem,
              iure facilis nisi fuga debitis delectus, provident itaque
              doloremque molestiae ad ipsa?
            </p>
          </div>
        </div>

        <div className='frame frame_bg'>
          <div className='frame__content'>
            <div className='frame-media frame-media-left frame-media-2'></div>
          </div>
        </div>

        <div className='frame'></div>

        <div className='frame frame_bg'>
          <div className='frame__content'>
            <div className='frame-media frame-media-right frame-media-3'></div>
          </div>
        </div>

        <div className='frame'></div>

        <div className='frame'>
          <div className='frame__content text-left'>
            <h3>Ask the Mountains</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima
              tenetur debitis ratione tempora libero, nemo at. Rerum in
              exercitationem dignissimos?
            </p>
          </div>
        </div>

        <div className='frame frame_bg'>
          <div className='frame__content'>
            <div className='frame-media frame-media-right frame-media-4'></div>
          </div>
        </div>

        <div className='frame'></div>

        <div className='frame frame_bg'>
          <div className='frame__content'>
            <video
              className='frame-media frame-media-left'
              src={videoBg}
              autoPlay
              loop
              muted
            ></video>
          </div>
        </div>

        <div className='frame'></div>

        <div className='frame frame_bg'>
          <div className='frame__content'>
            <div className='frame-media frame-media-right frame-media-5'></div>
          </div>
        </div>

        <div className='frame frame_bg'>
          <div className='frame__content'>
            <video
              className='frame-media'
              src={videoBg}
              autoPlay
              loop
              muted
            ></video>
          </div>
        </div>

        <div className='frame'></div>
        <div className='frame'></div>

        <div className='frame'>
          <div className='frame__content'>© Dmytro Semenov</div>
        </div>
      </section>

      <img
        src={soundGif}
        onClick={toggleStateMusic}
        alt='Sound img'
        className={`soundbutton ${isPauseMusic ? 'paused' : ''}`}
      />
      <audio ref={ref} className='audio' src={music} loop></audio>
    </div>
  );
}

export default App;
