import * as React from 'react';
import { makeStyles, Typography } from '@material-ui/core';

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
      <Typography variant='body2' component='p'>
        Design and Built by Sean Rodriguez
      </Typography>
    </footer>
  );
};

export default Footer;
