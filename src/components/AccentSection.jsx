import React from 'react';
import { useNavigation } from '../context/NavigationContext';

export default function AccentSection() {
  const { navigate } = useNavigation();

  return (
    <section
      className="rt-accent-section"
      style={{
        backgroundColor: '#cf3d3d',
        color: '#ffffff',
        position: 'relative',
        padding: '100px 0 80px',
      }}
    >
      <div className="w-layout-blockcontainer rt-container w-container">
        {/* Background diagonal lines */}
        <div className="rt-fill-behind rt-tab-display-none">
          <img
            src="/assets/images/6ad0a30248ceba8bff4eae20_home-red-section-bg-lines.webp"
            loading="lazy"
            alt="Subtle dark diagonal line pattern background"
            style={{ opacity: 0.2 }}
          />
        </div>

        <div className="rt-accent-main">
          {/* Top Row: Title, Arrow Pill, Description */}
          <div className="rt-accent-top" style={{ position: 'relative' }}>
            <h2
              className="rt-accent-title"
              style={{
                fontSize: 'clamp(3.2rem, 8vw, 7.2rem)',
                fontWeight: 900,
                lineHeight: 0.95,
                letterSpacing: '-0.04em',
                textTransform: 'uppercase',
                margin: 0,
                color: '#ffffff',
                fontFamily: '"Stack Sans Headline", sans-serif',
              }}
            >
              <span style={{ color: '#ffffff', display: 'block' }}>TURNING</span>
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  flexWrap: 'nowrap',
                  gap: '0.2em',
                  color: '#ffffff',
                }}
              >
                <span>SCIENCE</span>
                {/* Arrow Pill placed directly next to SCIENCE, identical to Image 4 */}
                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '0.14em 0.55em',
                    border: '0.045em solid #ffffff',
                    borderRadius: '9999px',
                    transform: 'rotate(-4deg)',
                    marginLeft: '0.15em',
                    verticalAlign: 'middle',
                    lineHeight: 1,
                  }}
                >
                  <svg
                    width="44"
                    height="22"
                    viewBox="0 0 55 29"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ display: 'block' }}
                  >
                    <path
                      d="M40.1748 26.7916L52.7921 14.1743L40.1748 1.557M52.7921 14.1743L1.5569 15.0662"
                      stroke="#ffffff"
                      strokeWidth="3.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </span>
              <br />
              <span style={{ color: '#ffb3ab', display: 'block' }}>INTO PERMANENT</span>
              <span style={{ color: '#ffb3ab', display: 'block' }}>DEFENSE</span>
            </h2>

            <p
              className="rt-gap-off rt-color-primary rt-accent-desc"
              style={{
                color: '#ffffff',
                fontSize: '16.5px',
                lineHeight: 1.65,
                maxWidth: '640px',
                marginTop: '28px',
                fontWeight: 400,
              }}
            >
              Permanent structural defense is never created by chance. It is engineered through countless intentional chemical decisions tested directly on concrete.
            </p>
          </div>

          {/* Grid Row: Intro text, Video card preview, Services label */}
          <div className="rt-accent-grid rt-tab-display-none" style={{ marginTop: '40px' }}>
            <div className="rt-accent-intro" style={{ color: '#ffffff' }}>
              <div className="rt-icon rt-color-tertiary w-embed" style={{ color: '#ffffff' }}>
                <svg width="53" height="53" viewBox="0 0 53 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M25.1118 14.6712C24.5901 10.2008 24.0393 5.48078 24.0393 0H28.9607C28.9607 5.41922 28.4125 10.1333 27.8915 14.6087C27.4671 18.2559 27.0611 21.7446 26.9857 25.3274C29.4569 22.7499 31.6185 20.0168 33.8829 17.1538C36.6748 13.624 39.6232 9.89702 43.4984 6.02165L46.9784 9.50163C43.1464 13.3336 39.425 16.2791 35.8921 19.0755L35.8888 19.078C33.0112 21.3561 30.2584 23.5352 27.6726 26.0143C31.2422 25.9389 34.7032 25.535 38.3285 25.1119C42.799 24.5901 47.5193 24.0393 53 24.0393V28.9607C47.581 28.9607 42.8669 28.4122 38.3917 27.8915L38.3884 27.8912C34.742 27.467 31.2544 27.0613 27.6726 26.9857C30.2484 29.455 32.98 31.6157 35.8411 33.8785L35.8456 33.8824C39.3756 36.6745 43.1028 39.6227 46.9784 43.4984L43.4984 46.9784C39.6664 43.1465 36.7211 39.4254 33.925 35.8928L33.9184 35.8837L33.9128 35.8764C31.6377 33.0032 29.4612 30.2548 26.9857 27.6726C27.0611 31.2554 27.4671 34.7442 27.8915 38.3913C28.4125 42.8668 28.9607 47.5808 28.9607 53H24.0393C24.0393 47.5193 24.5901 42.7992 25.1118 38.3288L25.1129 38.3215C25.5354 34.6987 25.9389 31.2398 26.0143 27.6726C23.5388 30.2548 21.3623 33.0032 19.0872 35.8764L19.0816 35.8837L19.075 35.8928C16.279 39.4254 13.3336 43.1465 9.50163 46.9784L6.02165 43.4984C9.89721 39.6227 13.6244 36.6745 17.1544 33.8824L17.1589 33.8785C20.02 31.6157 22.7516 29.455 25.3274 26.9857C21.7446 27.0614 18.2557 27.4673 14.6083 27.8915C10.1331 28.4122 5.41904 28.9607 0 28.9607V24.0393C5.48078 24.0393 10.2011 24.5901 14.6715 25.1119C18.2968 25.535 21.7578 25.9389 25.3274 26.0143C22.7406 23.5343 19.9867 21.3545 17.1079 19.0755C13.575 16.2791 9.85357 13.3336 6.02165 9.50163L9.50163 6.02165C13.3768 9.89702 16.3252 13.624 19.1171 17.1538C21.3815 20.0166 23.5431 22.7497 26.0143 25.3271C25.9389 21.7601 25.5354 18.3013 25.1129 14.6785L25.1118 14.6712Z" fill="currentColor"/>
                </svg>
              </div>
              <div className="rt-other-text-v2 rt-color-primary" style={{ color: '#ffffff' }}>
                FTR Solutions is a specialized engineering lab formulating zero-leakage chemical defense.
              </div>
            </div>

            <div className="rt-accent-video">
              <div className="rt-overlay-dark"></div>
            </div>

            <p className="rt-gap-off rt-label-text rt-accent-label" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
              [ 05 Engineered <span className="rt-color-primary" style={{ color: '#ffffff' }}>systems</span> ]
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
