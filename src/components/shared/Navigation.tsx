import * as React from 'react'
import { Link } from 'gatsby';
import { navbar, navbarItem, navbarLink, navbarList, navbarNav } from '../../styles/Navigation.module.css';

const Navigation : React.FC = () => {

  return (
      <header className={navbar}>
        <nav className={navbarNav}>
          <Link className={navbarLink} to={"/"}>SERO-Dev</Link>
          <ul className={navbarList}>
            <li className={navbarItem}><Link className={navbarLink} to={"#about"}>About</Link></li>
            <li className={navbarItem}><Link className={navbarLink} to={"#experience"}>Experience</Link></li>
            <li className={navbarItem}><Link className={navbarLink} to={"#projects"}>Projects</Link></li>
            <li className={navbarItem}><Link className={navbarLink} to={"#contact"}>Contact</Link></li>
          </ul>
        </nav>
      </header>
  )
}

export default Navigation
