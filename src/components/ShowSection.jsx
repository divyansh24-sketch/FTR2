import React, { useState, useRef } from 'react';

export default function ShowSection() {
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
    <div className="rt-show-frames-box" style={{ overflow: 'hidden' }}>
      <div className="w-layout-blockcontainer rt-container w-container">
        <div className="rt-show-grid-wrapper">
          <div className="w-layout-hflex rt-show-grid">
            {/* Column 1 */}
            <div className="w-layout-vflex rt-show-grid-col-1 rt-grid-col-1">
              <div className="rt-show-grid-image">
                <img
                  src="/assets/images/6a9fd16dcc711ef88872072c_showcase-image-1.avif"
                  loading="lazy"
                  sizes="(max-width: 767px) 100vw, (max-width: 991px) 728px, 940px"
                  srcSet="/assets/images/6a9fd16dcc711ef88872072c_showcase-image-1-p-500.avif 500w, /assets/images/6a9fd16dcc711ef88872072c_showcase-image-1-p-800.avif 800w, /assets/images/6a9fd16dcc711ef88872072c_showcase-image-1-p-1080.avif 1080w, /assets/images/6a9fd16dcc711ef88872072c_showcase-image-1.avif 1294w"
                  alt="Illuminated signage mockup on a concrete wall"
                />
              </div>

              <div className="rt-show-grid-image">
                <img
                  src="/assets/images/6ab603de9eca10f6ce5c2e52_home-one-slider-image-two.avif"
                  loading="lazy"
                  sizes="(max-width: 767px) 100vw, (max-width: 991px) 728px, 940px"
                  srcSet="/assets/images/6ab603de9eca10f6ce5c2e52_home-one-slider-image-two-p-500.avif 500w, /assets/images/6ab603de9eca10f6ce5c2e52_home-one-slider-image-two-p-800.avif 800w, /assets/images/6ab603de9eca10f6ce5c2e52_home-one-slider-image-two-p-1080.avif 1080w, /assets/images/6ab603de9eca10f6ce5c2e52_home-one-slider-image-two.avif 1294w"
                  alt="Hand holding a Bentro tag"
                />
              </div>

              <div className="rt-show-grid-image">
                <img
                  src="/assets/images/6ab603de9eca10f6ce5c2e3f_5e4d05f3c6d852402d3ebcf33c6c4a56_home-one-slider-image-three.webp"
                  loading="lazy"
                  sizes="(max-width: 767px) 100vw, (max-width: 991px) 728px, 940px"
                  srcSet="/assets/images/6ab603de9eca10f6ce5c2e3f_5e4d05f3c6d852402d3ebcf33c6c4a56_home-one-slider-image-three-p-500.webp 500w, /assets/images/6ab603de9eca10f6ce5c2e3f_5e4d05f3c6d852402d3ebcf33c6c4a56_home-one-slider-image-three-p-800.webp 800w, /assets/images/6ab603de9eca10f6ce5c2e3f_5e4d05f3c6d852402d3ebcf33c6c4a56_home-one-slider-image-three-p-1080.webp 1080w, /assets/images/6ab603de9eca10f6ce5c2e3f_5e4d05f3c6d852402d3ebcf33c6c4a56_home-one-slider-image-three.webp 1090w"
                  alt="Drink can with orange slices"
                />
              </div>
            </div>

            {/* Column Middle (HALVERN poster, team video with pause, business cards) */}
            <div className="w-layout-vflex rt-show-grid-col-1 rt-grid-col-middle">
              {/* HALVERN Poster */}
              <div className="rt-show-grid-image">
                <img
                  src="/assets/images/6ab603df89d1a360f5747d42_bfcbf37dc5c2a56345e09cf5c449576c_home-slider-image-five.webp"
                  loading="lazy"
                  sizes="(max-width: 767px) 100vw, (max-width: 991px) 728px, 940px"
                  srcSet="/assets/images/6ab603df89d1a360f5747d42_bfcbf37dc5c2a56345e09cf5c449576c_home-slider-image-five-p-500.webp 500w, /assets/images/6ab603df89d1a360f5747d42_bfcbf37dc5c2a56345e09cf5c449576c_home-slider-image-five-p-800.webp 800w, /assets/images/6ab603df89d1a360f5747d42_bfcbf37dc5c2a56345e09cf5c449576c_home-slider-image-five-p-1080.webp 1080w, /assets/images/6ab603df89d1a360f5747d42_bfcbf37dc5c2a56345e09cf5c449576c_home-slider-image-five.webp 1368w"
                  alt="Grande Premiere film poster mockup HALVERN"
                />
              </div>

              {/* Team Video with Pause Toggle Button */}
              <div className="rt-show-grid-image rt-show-grid-video" style={{ position: 'relative' }}>
                <div
                  className="rt-video-fill w-background-video w-background-video-atom"
                  style={{ width: '100%', height: '100%', position: 'relative' }}
                >
                  <video
                    ref={videoRef}
                    id="b55d46a6-087f-f090-035d-208a94f4f58c-video"
                    autoPlay
                    loop
                    muted
                    playsInline
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      borderRadius: '12px',
                    }}
                  >
                    <source
                      src="/assets/videos/6a9ea602b150d10104e1bb2c_2F6aebec54e58f55fb6beb9ad6_team-highfive-video_mp4.mp4"
                      type="video/mp4"
                    />
                    <source
                      src="/assets/videos/6a9ea602b150d10104e1bb2c_2F6aebec54e58f55fb6beb9ad6_team-highfive-video_webm.webm"
                      type="video/webm"
                    />
                  </video>

                  {/* Pause Button in Middle */}
                  <div
                    style={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      zIndex: 10,
                    }}
                  >
                    <button
                      type="button"
                      onClick={toggleVideo}
                      aria-label={isPlaying ? 'Pause video' : 'Play video'}
                      className="w-backgroundvideo-backgroundvideoplaypausebutton rt-video-toggle w-background-video--control"
                      style={{
                        cursor: 'pointer',
                        border: 'none',
                        background: 'transparent',
                        padding: 0,
                      }}
                    >
                      {isPlaying ? (
                        <div className="rt-video-toggle-icon w-embed">
                          <svg width="57" height="57" viewBox="0 0 57 57" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <rect width="57" height="57" rx="28.5" fill="white"/>
                            <rect x="22.5" y="22" width="4" height="13" rx="1" fill="#111214"/>
                            <rect x="30.5" y="22" width="4" height="13" rx="1" fill="#111214"/>
                          </svg>
                        </div>
                      ) : (
                        <div className="rt-video-toggle-icon w-embed">
                          <svg width="57" height="57" viewBox="0 0 57 57" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <rect width="57" height="57" rx="28.5" fill="white"/>
                            <path d="M35.3611 29.0872L25.095 35.3609V22.8135L35.3611 29.0872Z" fill="#111214"/>
                          </svg>
                        </div>
                      )}
                    </button>
                  </div>
                </div>
              </div>

              {/* Business Cards on concrete */}
              <div className="rt-show-grid-image">
                <img
                  src="/assets/images/6ab62ac20dc4f96095afce5b_69160f475720a513702c50e32cb79948_home-slider-image-nine.webp"
                  loading="lazy"
                  sizes="(max-width: 767px) 100vw, (max-width: 991px) 728px, 940px"
                  srcSet="/assets/images/6ab62ac20dc4f96095afce5b_69160f475720a513702c50e32cb79948_home-slider-image-nine-p-500.webp 500w, /assets/images/6ab62ac20dc4f96095afce5b_69160f475720a513702c50e32cb79948_home-slider-image-nine-p-800.webp 800w, /assets/images/6ab62ac20dc4f96095afce5b_69160f475720a513702c50e32cb79948_home-slider-image-nine.webp 1294w"
                  alt="Business card mockup on concrete blocks"
                />
              </div>
            </div>

            {/* Column 3 (Spiral binder, Phone mockup on orange chair, Tote bag on sea cliff) */}
            <div className="w-layout-vflex rt-show-grid-col-1 rt-grid-col-2">
              <div className="rt-show-grid-image">
                <img
                  src="/assets/images/6ab603dfa31d973560f1e9fc_home-slider-image-eight.avif"
                  loading="lazy"
                  sizes="(max-width: 767px) 100vw, (max-width: 991px) 728px, 940px"
                  srcSet="/assets/images/6ab603dfa31d973560f1e9fc_home-slider-image-eight-p-500.avif 500w, /assets/images/6ab603dfa31d973560f1e9fc_home-slider-image-eight-p-800.avif 800w, /assets/images/6ab603dfa31d973560f1e9fc_home-slider-image-eight-p-1080.avif 1080w, /assets/images/6ab603dfa31d973560f1e9fc_home-slider-image-eight.avif 1294w"
                  alt="Spiral binder brochure mockup"
                />
              </div>

              {/* Phone mockup on orange chair */}
              <div className="rt-show-grid-image">
                <img
                  src="/assets/images/6ab603df28385fd73a349786_home-slider-image-four.avif"
                  loading="lazy"
                  sizes="(max-width: 767px) 100vw, (max-width: 991px) 728px, 940px"
                  srcSet="/assets/images/6ab603df28385fd73a349786_home-slider-image-four-p-500.avif 500w, /assets/images/6ab603df28385fd73a349786_home-slider-image-four-p-800.avif 800w, /assets/images/6ab603df28385fd73a349786_home-slider-image-four-p-1080.avif 1080w, /assets/images/6ab603df28385fd73a349786_home-slider-image-four.avif 1101w"
                  alt="Phone mockup on an orange chair"
                />
              </div>

              {/* Tote bag on a sea cliff */}
              <div className="rt-show-grid-image">
                <img
                  src="/assets/images/6ab603df3b3bd2393d9845e9_home-slider-image-seven.avif"
                  loading="lazy"
                  sizes="(max-width: 767px) 100vw, (max-width: 991px) 728px, 940px"
                  srcSet="/assets/images/6ab603df3b3bd2393d9845e9_home-slider-image-seven-p-500.avif 500w, /assets/images/6ab603df3b3bd2393d9845e9_home-slider-image-seven-p-800.avif 800w, /assets/images/6ab603df3b3bd2393d9845e9_home-slider-image-seven-p-1080.avif 1080w, /assets/images/6ab603df3b3bd2393d9845e9_home-slider-image-seven.avif 1257w"
                  alt="Tote bag on a sea cliff"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
