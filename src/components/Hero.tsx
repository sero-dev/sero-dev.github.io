import * as React from 'react'; 
import { Button, makeStyles, Typography } from '@material-ui/core';

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
      <Typography className={classes.introText} component='h3'>Hi, my name is</Typography>
      <Typography className={`${classes.nameText} ${classes.mainText}`} component='h1'>
        Sean Rodriguez
      </Typography>
      <Typography className={classes.mainText} component='h1'>Full-Stack Software Engineer</Typography>
      <Typography className={classes.subHeroText} component='p'>
        I'm a full-stack software engineer based in <strong>Central Florida</strong> specializing in building systems and applications, and everything in between.
      </Typography>

      <Button color='primary' size='large' variant='contained'>Try me out!</Button>
    </section>
  );
};

export default Hero;
