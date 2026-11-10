import React, { useState, useRef } from 'react';
import { useNavigation } from '../context/NavigationContext';

export default function VideoExpandSection() {
  const { navigate } = useNavigation();
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef(null);

  const toggleVideo = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  return (
    <section className="rt-relative rt-overflow-clip">
      <div className="w-layout-blockcontainer rt-container w-container">
        <div className="rt-fill-behind is-interactive">
          <div data-expand="" className="rt-sticky-video">
            <div
              data-autoplay="true"
              data-loop="true"
              data-wf-ignore="true"
              className="rt-bg-video w-background-video w-background-video-atom"
            >
              <video
                ref={videoRef}
                id="100b648e-0960-42ea-fe5a-e5e1b6ee6672-video"
                autoPlay
                loop
                muted
                playsInline
                data-wf-ignore="true"
                style={{
                  backgroundImage:
                    'url("/assets/images/6a9ea602b150d10104e1bb2c_2F6ad9b05e78a50e2ba7c54372_VtOI0RFyn1t6LuVkY3o7D3iv698_poster.0000000.jpg")',
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              >
                <source
                  src="/assets/videos/6a9ea602b150d10104e1bb2c_2F6ad9b05e78a50e2ba7c54372_VtOI0RFyn1t6LuVkY3o7D3iv698_mp4.mp4"
                  type="video/mp4"
                />
                <source
                  src="/assets/videos/6a9ea602b150d10104e1bb2c_2F6ad9b05e78a50e2ba7c54372_VtOI0RFyn1t6LuVkY3o7D3iv698_webm.webm"
                  type="video/webm"
                />
              </video>

              {/* Pause / Play Toggle Button */}
              <div aria-live="polite">
                <button
                  type="button"
                  onClick={toggleVideo}
                  aria-label={isPlaying ? 'Pause video' : 'Play video'}
                  className="w-backgroundvideo-backgroundvideoplaypausebutton rt-video-control w-background-video--control"
                  style={{ cursor: 'pointer', zIndex: 10 }}
                >
                  {isPlaying ? (
                    <span>
                      <img
                        src="/assets/images/628299f8aa233b83918e24fd_Pause.svg"
                        loading="lazy"
                        alt="Pause video"
                      />
                    </span>
                  ) : (
                    <span>
                      <img
                        src="/assets/images/628298b20ae0236682d4b87f_Play-24.svg"
                        loading="lazy"
                        alt="Play video"
                      />
                    </span>
                  )}
                </button>
              </div>
            </div>

            <div className="rt-overlay-dark"></div>
          </div>
        </div>

        <div className="rt-fade-overlay"></div>

        <div className="rt-text-scroll-main">
          <div className="rt-col-six rt-relative">
            <div
              data-word-reveal=""
              className="rt-text-style-h4"
              style={{
                color: '#ffffff',
                textTransform: 'uppercase',
                fontWeight: 700,
                lineHeight: 1.25,
              }}
            >
              WE ENGINEER PERMANENT DEFENSE AND{' '}
              <span style={{ color: '#ff9a8a' }}>HIGH-TENSILE POLYMER</span>{' '}
              BARRIERS.{' '}
              <span style={{ color: '#ff9a8a' }}>FROM SITE DIAGNOSIS</span>{' '}
              AND MOLECULAR REBAR PASSIVATION TO{' '}
              <span style={{ color: '#ff9a8a' }}>HYDROSTATIC</span>{' '}
              MEMBRANES, EVERY SOLUTION IS{' '}
              <span style={{ color: '#ff9a8a' }}>CRAFTED</span>{' '}
              WITH ZERO-LEAKAGE INTEGRITY
            </div>

            <div
              className="rt-float-pill rt-float-pill-left rt-tab-display-none"
              onClick={() => {
                const el = document.getElementById('services-section');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
                else navigate('works');
              }}
              style={{
                cursor: 'pointer',
                background: 'rgba(255, 255, 255, 0.08)',
                border: '1px solid rgba(255, 255, 255, 0.25)',
                color: '#ffffff',
              }}
            >
              <p className="rt-gap-off rt-button-text-v1" style={{ color: '#ffffff' }}>Explore systems</p>
            </div>

            <div
              className="rt-float-pill rt-float-pill-right rt-tab-display-none"
              onClick={() => {
                const el = document.getElementById('products-section');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
                else navigate('blog');
              }}
              style={{
                cursor: 'pointer',
                background: '#e53935',
                border: 'none',
                color: '#ffffff',
                transform: 'rotate(15deg)',
              }}
            >
              <p className="rt-gap-off rt-button-text-v1" style={{ color: '#ffffff' }}>View TDS sheets</p>
            </div>
          </div>

          <div className="rt-tag-row">
            <div
              className="rt-tag rt-tag-dot"
              style={{
                color: '#ffffff',
                backgroundColor: 'rgba(255, 255, 255, 0.12)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
              }}
            >
              Permanent
              <div className="rt-icon rt-color-primary w-embed" style={{ color: '#ffffff' }}>
                <svg width="7" height="7" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="3.5" cy="3.5" r="3.5" fill="currentColor"/>
                </svg>
              </div>
            </div>
            <div
              className="rt-tag rt-tag-dot"
              style={{
                color: '#ffffff',
                backgroundColor: 'rgba(255, 255, 255, 0.12)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
              }}
            >
              Certified
              <div className="rt-icon rt-color-primary w-embed" style={{ color: '#ffffff' }}>
                <svg width="7" height="7" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="3.5" cy="3.5" r="3.5" fill="currentColor"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
