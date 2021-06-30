import React from 'react'
import Head from 'next/head'
import { motion } from 'framer-motion'

interface indexProps {}

const transition: { duration: number; ease: number[] } = {
  duration: 1.4,
  ease: [0.6, 0.01, -0.05, 0.9],
}

const navList: { initial: any; animate: any } = {
  initial: {
    x: 0,
  },
  animate: {
    x: 0,
    delay: 1.8,
    transition: {
      delayChildren: 0.6,
      staggerChildren: 0.04,
      staggerDirection: 1,
    },
  },
}

const navItem: { initial: any; animate: any } = {
  initial: {
    y: 50,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: { ...transition },
  },
}

const locomotiveScroll = typeof window !== `undefined` ? require('locomotive-scroll').default : null

const index: React.FC<indexProps> = ({}) => {
  const refScroll = React.useRef(null)
  let scroll: any

  React.useEffect(() => {
    if (!refScroll.current) return
    // @ts-ignore
    scroll = new locomotiveScroll({
      el: refScroll.current,
      smooth: true,
      smartphone: {
        smooth: true,
      },
      tablet: {
        smooth: true,
      },
      // inertia: 0.3,
      // multiplier: 0.65,
    })
  }, [refScroll])

  function updateScroll() {
    scroll.destroy()

    setTimeout(function () {
      scroll = new locomotiveScroll({
        el: refScroll.current,
        smooth: true,
        smartphone: {
          smooth: true,
        },
        tablet: {
          smooth: true,
        },
        // inertia: 0.3,
        // multiplier: 0.65,
      })
    }, 100)
  }

  return (
    <motion.div data-scroll-container ref={refScroll} initial='initial' animate='animate'>
      <Head>
        <title>Heatrow &mdash; A Real Estate Company</title>
        <link rel='icon' href='/vercel.svg' />
      </Head>
      <header data-scroll-section className='home-header'>
        <div className='home-header__left'>
          <nav className='navigation'>
            <motion.img
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1, transition: { ...transition } }}
              src='svg/heatrow-logo.svg'
              alt='heatrow logo'
            />
            <motion.ul variants={navList} className='navigation__list'>
              <motion.li variants={navItem} className='navigation__item'>
                <a onClick={updateScroll} href='#sectionFeatures'>
                  Features
                </a>
              </motion.li>
              <motion.li variants={navItem} className='navigation__item'>
                <a onClick={updateScroll} href='#sectionGallery'>
                  Services
                </a>
              </motion.li>
              <motion.li variants={navItem} className='navigation__item'>
                <a onClick={updateScroll} href='#sectionFeedback'>
                  Feedbacks
                </a>
              </motion.li>
            </motion.ul>
          </nav>
          <div className='home-hero'>
            <motion.h4
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1, transition: { delay: 0.2, ...transition } }}
              className='hero-h4'>
              elegantly designed 3 <br />
              bedroom apartments
            </motion.h4>
            <motion.h1
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1, transition: { delay: 0.6, ...transition } }}
              className='hero-h1'>
              Maple
            </motion.h1>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: 0.6, ...transition } }}
              className='home-hero__footer'>
              <img src='svg/facebook-icon.svg' alt='facebook icon' />
              <img src='svg/twitter-icon.svg' alt='twitter icon' />
              <img src='svg/linkedIn-icon.svg' alt='linkedIn icon' />
              <img src='svg/instagram-icon.svg' alt='instagram icon' />
            </motion.div>
          </div>
        </div>
        <div className='home-header__right'>
          <motion.img
            initial={{ opacity: 0, scale: 1.4, x: 400 }}
            animate={{ opacity: 1, scale: 1, x: 0, transition: { delay: 1.1, ...transition } }}
            src='webp/header-bg.webp'
            alt='maple house'
          />
          <motion.div
            initial={{ y: 200, opacity: 0 }}
            animate={{ y: 0, opacity: 1, transition: { delay: 1.8, ...transition } }}
            className='hero-unit'>
            <h2 className='hero-unit__h2'>444</h2>
            <p className='hero-unit__p'>TOTAL UNITS</p>
          </motion.div>
        </div>
      </header>
      <main className='main'>
        <section data-scroll-section id='sectionFeatures' className='section-features'>
          <div className='feature-container'>
            <div className='feature'>
              <img src='svg/faces-icon.svg' alt='face icon' />
              <h2 className='heading-2'>
                Familiar <br />
                Faces
              </h2>
              <p className='paragraph'>
                Our facial recognition system cross-references faces attempting to gain access into
                the Heatrow Estate with the register database of residents. We value your safety so
                no one gets in unless you say so.
              </p>
            </div>
            <div className='feature'>
              <img src='svg/eye-icon.svg' alt='eye icon' />
              <h2 className='heading-2'>
                Eye in the <br />
                Sky
              </h2>
              <p className='paragraph'>
                Our infrared (IR) outdoor bullet cameras are immune to whatever or lighting, and
                come in different resolutions and lenses. Sit back anywhere in the world and record
                everything going on in and around your home with crisp clear audio.
              </p>
            </div>
            <div className='feature'>
              <img src='svg/anpr-icon.svg' alt='face icon' />
              <h2 className='heading-2'>ANPR</h2>
              <p className='paragraph'>
                Our Automatic Number Plate Recognition system scans every plate trying to gain
                access into the Heatrow estate and cross references with our database of registered
                plates. Our advances algorithms can decode even blurry and dark images.
              </p>
            </div>
            <div className='feature'>
              <img src='svg/smart-icon.svg' alt='smart icon' />
              <h2 className='heading-2'>
                Smart <br />
                Savings
              </h2>
              <p className='paragraph'>
                Save up to 50% more energy with our smart energy-consumption monitoring. Enjoy smart
                system in your home that help you dim lights, and even turn off home appliances when
                not in use. Even water leakages are detected in real-time if you ever leave the tap
                running.
              </p>
            </div>
            <div className='feature'>
              <img src='svg/wifi-icon.svg' alt='wifi icon' />
              <h2 className='heading-2'>
                Fibre to <br />
                the Home
              </h2>
              <p className='paragraph'>
                Our finer-optic cables are setup around the estate to deliver lightening fast
                internet whenever you need it at the comfort of your home. We present to you the
                future of broadband.
              </p>
            </div>
            <div className='feature'>
              <img src='svg/door-icon.svg' alt='door icon' />
              <h2 className='heading-2'>
                The Walls <br />
                Have Ears
              </h2>
              <p className='paragraph'>
                Lock the doors, open the windows control the lights, and much more without lifting a
                finger, The tongue really is powerful. Go on, Speak, your home us listening.
              </p>
            </div>
          </div>
        </section>
        <section data-scroll-section id='sectionGallery' className='section-gallery'>
          <div className='gallery-container'>
            <h2 className='heading-2'>
              Live in the <br /> Future
            </h2>
            <div className='gallery'>
              <div className='gallery__left'>
                <div className='gallery__left--top'>
                  <img src='webp/villa-bg.webp' alt='villa image' />
                  <h4 className='gallery-caption'>15 villa</h4>
                </div>
                <div className='gallery__left--bottom'>
                  <h3 className='gallery-h3'>
                    Comrfort <br /> is a choice
                  </h3>
                  <p className='gallery-p'>and we offer 4 of those</p>
                </div>
              </div>
              <div className='gallery__right'>
                <div className='gallery__right--top'>
                  <div className='gallery__right--top-left'>
                    <img src='webp/oak-bg.webp' alt='oak image' />
                    <h4 className='gallery-caption'>155 oak</h4>
                  </div>
                  <div className='gallery__right--top-right'>
                    <img src='webp/oakville-bg.webp' alt='oakville image' />
                    <h4 className='gallery-caption'>30 oakville</h4>
                  </div>
                </div>
                <div className='gallery__right--bottom'>
                  <img src='webp/maple.webp' alt='maple image' />
                  <h4 className='gallery-caption'>234 maple</h4>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section data-scroll-section id='sectionFeedback' className='section-feedback'>
          <div className='feedback-container'>
            <div className='feedback-left'>
              <h2 className='heading-2'>
                What Others <br /> are saying
              </h2>
            </div>
            <div className='feedback-right'>
              <div className='feedback-box'>
                <img src='svg/quoute-icon.svg' alt='quoute icon' />
                <p className='paragraph'>
                  I love the fact that there is a linking road in Mabushi opposite blue Cabana which
                  is really amazing. I love the road network and the structure is impressive.
                </p>
                <h5 className='heading-5'>Mr & Mrs Bamidele</h5>
              </div>
              <div className='feedback-box'>
                <img src='svg/quoute-icon.svg' alt='quoute icon' />
                <p className='paragraph'>
                  So far so good, services really fantastic and the area is fantastic. The quality
                  of work is fantastic and I look forward to a more beneficial relationship.
                  Cosgrove equals fantastic for me.
                </p>
                <h5 className='heading-5'>Ojo Daniel</h5>
              </div>
              <div className='feedback-box'>
                <img src='svg/quoute-icon.svg' alt='quoute icon' />
                <p className='paragraph'>
                  Not bad I visited your site and was a bit confused about the villa and detached
                  spacing but thanks to the officer in charge I got clarification. I am actually an
                  ambassador for Cosgrove because I believe in the brand.
                </p>
                <h5 className='heading-5'>Mr & Mrs Joseph</h5>
              </div>
              <div className='feedback-box'>
                <img src='svg/quoute-icon.svg' alt='quoute icon' />
                <p className='paragraph'>
                  I love the fact that there is a linking road in Mabushi opposite blue Cabana which
                  is really amazing. I love the road network and the structure is impressive.
                </p>
                <h5 className='heading-5'>Mr & Mrs Danladi</h5>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer data-scroll-section className='footer'>
        <div className='footer__container'>
          <div className='footer__top'>
            <h2 className='heading-2 heading-2__sub'>Book Consultation</h2>
            <form className='contact-form'>
              <div className='contact-form__left'>
                <input type='text' placeholder='enter your name' />
                <input type='email' placeholder='enter your email' />
                <input type='tel' placeholder='enter your telephone' />
              </div>
              <div className='contact-form__right'>
                <textarea placeholder='write something...'></textarea>
                <button type='submit'>SEND MESSAGE</button>
              </div>
            </form>
          </div>

          <div className='footer__bottom'>
            <div className='footer__bottom--box'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='102'
                height='35.674'
                viewBox='0 0 152 35.674'>
                <g transform='translate(-66 -71.663)'>
                  <g transform='translate(5929.179 -1324.144)'>
                    <path d='M-5839.528,1412.126l-23.651,19.29v-35.609h23.651Z' fill='#FABE7D' />
                    <path
                      d='M-5789.339,1415.3l23.651-19.29v35.609h-23.651Z'
                      transform='translate(-50.491 -0.14)'
                      fill='#FABE7D'
                    />
                  </g>
                  <text
                    transform='translate(132 99)'
                    fill='#FABE7D'
                    fontSize='24'
                    fontFamily='HelveticaNeue-Medium, Helvetica Neue'
                    fontWeight='500'
                    letterSpacing='-0.053em'>
                    <tspan x='0' y='0'>
                      Heatrow
                    </tspan>
                  </text>
                </g>
              </svg>
              <p className='footer-p'>
                +234813 900 1052
                <br />
                <br />
                +234802 830 1153
              </p>
            </div>
            <div className='footer__bottom--box'>
              <p className='footer-p'>
                1st Floor, Mujjab El Yakub Building, Danladi Street, <br />
                Central Business District Abuja. FCT Nigeria.
              </p>
            </div>
          </div>
          <p className='footer-copyright'>© Copyright 2021 Heatrow Estate</p>
        </div>
      </footer>
    </motion.div>
  )
}

export default index
