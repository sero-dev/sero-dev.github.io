import { makeStyles } from '@material-ui/core';
import * as React from 'react';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    minHeight: '100vh',
    justifyContent: 'center',
    alignItems: 'flex-start',
    flexDirection: 'column',
    '-webkit-box-pack': 'center',
    '-webkit-box-align': 'center'
  },

  mainText: {
    fontSize: 'clamp(32px, 6vw, 64px)',
    color: 'var(--gray)',
    margin: 0
  },

  nameText: {
    color: 'var(--white)',
    '&::selection': {
      color: 'var(--white)'
    }
  },

  introText: {
    fontFamily: 'var(--primary-font)',
    fontSize: 'var(--fz-lg)',
    fontWeight: 300,
    color: 'var(--secondary)'
  },

  subHeroText: {
    maxWidth: '500px',
    margin: '20px 0',
    fontSize: 'var(--fz-lg)'
  }
});

const Hero: React.FC = () => {
  const classes = useStyles();

  return (
    <section className={classes.root}>
      <h3 className={classes.introText}>Hi, my name is</h3>
      <h1 className={`${classes.nameText} ${classes.mainText}`}>
        Sean Rodriguez
      </h1>
      <h1 className={classes.mainText}>Full-Stack Software Engineer</h1>
      <p className={classes.subHeroText}>
        I'm a full-stack software engineer based in <strong>Central Florida</strong> specializing in building systems and applications, and everything in between.
      </p>

      <button>Try me out!</button>
    </section>
  );
};

export default Hero;
