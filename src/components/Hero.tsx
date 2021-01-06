import * as React from 'react';
import { fullScreen, nameText, heroText, introText, subHeroText } from '../styles/Hero.module.css';

const Hero: React.FC = () => {

  return (
    <section className={fullScreen}>
      <h3 className={introText}>Hi, my name is</h3>
      <h1 className={`${nameText} ${heroText}`}>
        Sean Rodriguez
      </h1>
      <h1 className={heroText}>Full-Stack Software Engineer</h1>
      <p className={subHeroText}>
        I'm a full-stack software engineer based in <strong>Central Florida</strong> specializing in building systems and applications, and everything in between.
      </p>

      <button>Try me out!</button>
    </section>
  )
}

export default Hero;
