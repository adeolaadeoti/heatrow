import React from 'react'
import Head from 'next/head'

interface indexProps {}

const index: React.FC<indexProps> = ({}) => {
  return (
    <>
      <Head>
        <title>Heatrow &mdash; A Real Estate Company</title>
        <link rel='icon' href='/vercel.svg' />
      </Head>
      <header className='home-header'>
        <div className='home-header__left'>
          <nav className='navigation'>
            <img src='svg/heatrow-logo.svg' alt='heatrow logo' />
            <ul className="navigation__list">
              <li className="navigation__item">Home</li>
              <li className="navigation__item">Features</li>
              <li className="navigation__item">Services</li>
              <li className="navigation__item">Contact Us</li>
            </ul>
          </nav>
          <div className="home-hero">
            <h4 className="hero-h4">elegantly designed 3 <br/>bedroom apartments</h4>
            <h1 className="hero-h1">Maple</h1>
            <div className="home-hero__footer">
              <img src="svg/facebook-icon.svg" alt="facebook icon" />
              <img src="svg/twitter-icon.svg" alt="twitter icon" />
              <img src="svg/linkedIn-icon.svg" alt="linkedIn icon" />
              <img src="svg/instagram-icon.svg" alt="instagram icon" />
            </div>
          </div>
        </div>
        <div className='home-header__right'>
          <img src="webp/header-bg.webp" alt="maple house" />
          <div className="hero-unit">
            <h2 className="hero-unit__h2">444</h2>
            <p className="hero-unit__p">TOTAL UNITS</p>
          </div>
        </div>
      </header>
    </>
  )
}

export default index
