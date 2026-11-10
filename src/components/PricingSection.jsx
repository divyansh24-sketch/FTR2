import React from 'react';
import { useNavigation } from '../context/NavigationContext';

export default function PricingSection() {
  const { navigate } = useNavigation();

  const testimonials = [
    {
      id: 1,
      quote: (
        <>
          <span className="rt-color-primary">FTR Solutions</span> diagnosed the negative-side moisture that multiple contractors failed to resolve. Their synchronized{' '}
          <span className="rt-color-primary">NOSEEP® elastomeric membrane eliminated all terrace seepage permanently</span> across two severe monsoon seasons. Their engineering protocol is truly First Time Right.
        </>
      ),
      name: 'Rajesh Malhotra',
      role: 'Chief Project Engineer @ DLF Infra Projects',
      photo: '/assets/images/6ab603e5fc9d7e65b3654329_home-one-testimonial-client-image-one.avif',
      photoAlt: 'Portrait of Rajesh Malhotra, Chief Project Engineer',
    },
    {
      id: 2,
      quote: (
        <>
          We faced recurring AAC block joint cracks and rebar corrosion across our residential towers.{' '}
          <span className="rt-color-primary">FTR BlockBond® and NORUST® Shield</span> delivered extraordinary tensile adhesion.{' '}
          <span className="rt-color-primary">Zero shrinkage cracks and total metallic passivation</span> — performance is engineered directly into their polymers.
        </>
      ),
      name: 'Vikramaditya Sharma',
      role: 'Senior Structural Consultant @ Shapoorji Pallonji',
      photo: '/assets/images/6ab6268df3f1dcd982ae3bb3_5c1a0f0232c88f113c6f6847105295f2_home-one-testimonial-client-video-two.avif',
      photoAlt: 'Portrait of Vikramaditya Sharma, Structural Consultant',
    },
    {
      id: 3,
      quote: (
        <>
          Job-site labor errors usually cause traditional waterproofing to fail within a year. With{' '}
          <span className="rt-color-primary">FTR ERP® Plaster and Putty</span>, the synthetic microfiber matrix bridged substrate fissures and{' '}
          <span className="rt-color-primary">permanently stopped efflorescence salt leaching</span> with zero callbacks.
        </>
      ),
      name: 'Arunachalam Pillai',
      role: 'Head of Quality & Civil Defense @ L&T Infra',
      photo: '/assets/images/6ab603e5fc9d7e65b3654329_home-one-testimonial-client-image-one.avif',
      photoAlt: 'Portrait of Arunachalam Pillai, Head of Civil Quality',
    },
  ];

  return (
    <section id="testimonials-section" className="rt-section rt-overflow-hidden">
      <div className="w-layout-blockcontainer rt-container w-container">
        <div className="rt-vertical-stack">
          {/* Header Stack */}
          <div className="rt-vertical-top rt-heading-stack">
            <h2 className="rt-gap-off">Clients Say</h2>
          </div>

          {/* Testimonial Grid / Marquee */}
          <div className="rt-testimonial-grid">
            {testimonials.map((item) => (
              <div key={item.id} className="rt-testimonial-item">
                <div className="rt-testimonial-photo">
                  <img
                    src={item.photo}
                    loading="lazy"
                    sizes="100vw"
                    alt={item.photoAlt}
                  />
                </div>

                <div className="rt-testimonial-card">
                  <div className="rt-fill-behind">
                    <img
                      src="/assets/images/6ab61c83ea25c199065b33a7_home-service-card-line-bg.webp"
                      loading="lazy"
                      sizes="100vw"
                      srcSet="/assets/images/6ab61c83ea25c199065b33a7_home-service-card-line-bg-p-500.webp 500w, /assets/images/6ab61c83ea25c199065b33a7_home-service-card-line-bg.webp 1192w"
                      alt="Faint grid line texture for the testimonial card background"
                    />
                  </div>

                  <div className="rt-testimonial-quote">
                    {/* 5-Star Rating SVG */}
                    <div className="rt-icon w-embed">
                      <svg width="101.786" height="19" viewBox="0 0 101.786 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.89021 3.89128C9.30102 2.65051 11.0561 2.65051 11.4669 3.89128L12.2733 6.32677C12.4572 6.88228 12.9765 7.25735 13.5617 7.25735H16.116C17.4369 7.25735 17.9794 8.95269 16.9039 9.71952L14.8816 11.1614C14.397 11.507 14.194 12.128 14.3811 12.693L15.1639 15.0573C15.5764 16.3032 14.1562 17.3508 13.0876 16.5889L10.9665 15.0765C10.495 14.7403 9.86216 14.7403 9.39069 15.0765L7.2695 16.5889C6.20093 17.3508 4.78076 16.3032 5.19326 15.0573L5.97604 12.693C6.16312 12.128 5.96019 11.507 5.47556 11.1614L3.45323 9.71952C2.37774 8.95269 2.92025 7.25735 4.24112 7.25735H6.79548C7.38064 7.25735 7.89992 6.88228 8.08384 6.32677L8.89021 3.89128Z" fill="#F6AA73"/>
                        <path d="M29.2474 3.89128C29.6582 2.65051 31.4133 2.65051 31.8241 3.89128L32.6304 6.32677C32.8144 6.88228 33.3336 7.25735 33.9188 7.25735H36.4732C37.794 7.25735 38.3365 8.95269 37.2611 9.71952L35.2387 11.1614C34.7541 11.507 34.5512 12.128 34.7382 12.693L35.521 15.0573C35.9335 16.3032 34.5134 17.3508 33.4448 16.5889L31.3236 15.0765C30.8521 14.7403 30.2193 14.7403 29.7478 15.0765L27.6266 16.5889C26.5581 17.3508 25.1379 16.3032 25.5504 15.0573L26.3332 12.693C26.5203 12.128 26.3173 11.507 25.8327 11.1614L23.8104 9.71952C22.7349 8.95269 23.2774 7.25735 24.5983 7.25735H27.1526C27.7378 7.25735 28.2571 6.88228 28.441 6.32677L29.2474 3.89128Z" fill="#F6AA73"/>
                        <path d="M49.6045 3.89128C50.0153 2.65051 51.7704 2.65051 52.1812 3.89128L52.9876 6.32677C53.1715 6.88228 53.6908 7.25735 54.276 7.25735H56.8303C58.1512 7.25735 58.6937 8.95269 57.6182 9.71952L55.5959 11.1614C55.1112 11.507 54.9083 12.128 55.0954 12.693L55.8782 15.0573C56.2907 16.3032 54.8705 17.3508 53.8019 16.5889L51.6807 15.0765C51.2093 14.7403 50.5764 14.7403 50.105 15.0765L47.9838 16.5889C46.9152 17.3508 45.495 16.3032 45.9075 15.0573L46.6903 12.693C46.8774 12.128 46.6745 11.507 46.1898 11.1614L44.1675 9.71952C43.092 8.95269 43.6345 7.25735 44.9554 7.25735H47.5098C48.0949 7.25735 48.6142 6.88228 48.7981 6.32677L49.6045 3.89128Z" fill="#F6AA73"/>
                        <path d="M69.9616 3.89128C70.3724 2.65051 72.1276 2.65051 72.5384 3.89128L73.3447 6.32677C73.5287 6.88228 74.0479 7.25735 74.6331 7.25735H77.1875C78.5083 7.25735 79.0508 8.95269 77.9753 9.71952L75.953 11.1614C75.4684 11.507 75.2655 12.128 75.4525 12.693L76.2353 15.0573C76.6478 16.3032 75.2276 17.3508 74.1591 16.5889L72.0379 15.0765C71.5664 14.7403 70.9336 14.7403 70.4621 15.0765L68.3409 16.5889C67.2724 17.3508 65.8522 16.3032 66.2647 15.0573L67.0475 12.693C67.2345 12.128 67.0316 11.507 66.547 11.1614L64.5247 9.71952C63.4492 8.95269 63.9917 7.25735 65.3125 7.25735H67.8669C68.4521 7.25735 68.9713 6.88228 69.1553 6.32677L69.9616 3.89128Z" fill="#F6AA73"/>
                        <path d="M90.3188 3.89128C90.7296 2.65051 92.4847 2.65051 92.8955 3.89128L93.7019 6.32677C93.8858 6.88228 94.4051 7.25735 94.9902 7.25735H97.5446C98.8655 7.25735 99.408 8.95269 98.3325 9.71952L96.3102 11.1614C95.8255 11.507 95.6226 12.128 95.8097 12.693L96.5925 15.0573C97.005 16.3032 95.5848 17.3508 94.5162 16.5889L92.395 15.0765C91.9236 14.7403 91.2907 14.7403 90.8193 15.0765L88.6981 16.5889C87.6295 17.3508 86.2093 16.3032 86.6218 15.0573L87.4046 12.693C87.5917 12.128 87.3888 11.507 86.9041 11.1614L84.8818 9.71952C83.8063 8.95269 84.3488 7.25735 85.6697 7.25735H88.2241C88.8092 7.25735 89.3285 6.88228 89.5124 6.32677L90.3188 3.89128Z" fill="#F6AA73"/>
                      </svg>
                    </div>

                    <div className="rt-font-b2">
                      {item.quote}
                    </div>
                  </div>

                  <div className="rt-testimonial-author">
                    <p className="rt-gap-off rt-testimonial-name">{item.name}</p>
                    <p className="rt-gap-off rt-testimonial-role">{item.role}</p>
                  </div>

                  <div className="rt-icon rt-color-primary rt-testimonial-quote-icon w-embed">
                    <svg width="52" height="39" viewBox="0 0 52 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12.1339 0C5.43248 0 0 5.5083 0 12.3037C0 19.0967 5.43248 24.605 12.1339 24.605C12.1339 24.605 12.0752 29.1752 8.41242 35.753C8.00556 37.071 8.73082 38.4745 10.0318 38.8846C10.9549 39.1789 11.9263 38.8928 12.5535 38.2268C20.9756 28.8891 24.2723 17.8993 24.2723 12.3037C24.2723 5.5083 18.8399 0 12.1339 0Z" fill="currentColor" fillOpacity="0.06"/>
                      <path d="M39.8615 0C33.1601 0 27.7276 5.5084 27.7276 12.3037C27.7276 19.0967 33.1601 24.605 39.8615 24.605C39.8615 24.605 39.8027 29.1752 36.14 35.753C35.7331 37.071 36.4585 38.4745 37.7594 38.8846C38.6825 39.1789 39.6539 38.8928 40.281 38.2268C48.7032 28.8891 52 17.8993 52 12.3037C52 5.5083 46.5675 0 39.8615 0Z" fill="currentColor" fillOpacity="0.06"/>
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
