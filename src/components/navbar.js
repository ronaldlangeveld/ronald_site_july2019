import React, {useState} from 'react';
import { Link } from "gatsby";

function Navbar() {

    const [burger, setBurger] = useState(false)


    const clickBurger = () => {
      setBurger(!burger)
      console.log(burger)
    }

  return (
<>

<nav className="navbar" role="navigation" aria-label="main navigation">
  <div className="navbar-brand">


    <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" onClick={clickBurger}>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" className={"navbar-menu " + (burger ? 'is-active' : '')}>
    <div className="navbar-start">
      <Link to='/blog' className="navbar-item">
        Blog
      </Link>
      <Link to='/projects' className="navbar-item">
        Projects
      </Link>

      <Link to='/work' className="navbar-item">
        Work with me
      </Link>
      <a href="https://nomadlist.com/@ronald" target="_blank" className="navbar-item">
        Whereabouts
      </a>

    </div>

    <div className="navbar-end">
    </div>
  </div>
</nav>

</>
  );
}
export default Navbar;