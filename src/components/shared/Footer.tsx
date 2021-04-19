import * as React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    textAlign: 'center',
    padding: '1.5rem',
    fontFamily: 'var(--secondary-font)',
    fontSize: 'var(--fz-xxs)',
  }
});

const Footer: React.FC = () => {
  const classes = useStyles();
  return (
    <footer className={classes.root}>
      <p>Design and Built by Sean Rodriguez</p>
    </footer>
  );
};

export default Footer;
