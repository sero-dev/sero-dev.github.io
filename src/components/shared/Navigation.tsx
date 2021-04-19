import * as React from 'react';
import { Link } from 'gatsby';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    height: 'var(--navbar-height)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: '0 48px',
    width: '100%',
    backdropFilter: 'blur(10px)',
    filter: 'none !important',
    backgroundColor: 'var(--navbar-color)',
    boxShadow: '0 10px 30px -10px var(--shadow)',
    position: 'fixed',
    top: 0,
    zIndex: 99,
  },

  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  navList: {
    display: 'flex',
    listStyle: 'none'
  },

  navItem: {
    marginLeft: '1rem'
  },

  navLink: {
    padding: '0.5rem',
    transition: 'var(--transition)',
    fontSize: 'var(--fz-sm)',
    fontFamily: 'var(--secondary-font)',
    '&:hover': {
      color: 'var(--secondary)'
    }
  }
});

const Navigation : React.FC = () => {
  const classes = useStyles();

  return (
    <header className={classes.root}>
      <nav className={classes.nav}>
        <Link className={classes.navLink} to={"/"}>SERO-Dev</Link>
        <ul className={classes.navList}>
          <li className={classes.navItem}><Link className={classes.navLink} to={"#about"}>About</Link></li>
          <li className={classes.navItem}><Link className={classes.navLink} to={"#experience"}>Experience</Link></li>
          <li className={classes.navItem}><Link className={classes.navLink} to={"#projects"}>Projects</Link></li>
          <li className={classes.navItem}><Link className={classes.navLink} to={"#contact"}>Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
