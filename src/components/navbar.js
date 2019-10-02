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


  <nav className="navbar is-warning is-fixed-top" role="navigation" aria-label="main navigation">
  <div className="navbar-brand">

  <Link className="navbar-item has-text-weight-bold is-size-5">Ronald Langeveld</Link>

    <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" onClick={clickBurger}>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" className={"navbar-menu " + (burger ? 'is-active' : '')}>
    <div className="navbar-start">


    </div>

    <div className="navbar-end is-size-7">
    <Link to='/blog' className="navbar-item">
        Blog
      </Link>
      <Link to="/#clients" className="navbar-item">
        Clients
      </Link>

      <Link to="/#sides" className="navbar-item">
        Side Projects
      </Link>

      <Link to="/#work"  className="navbar-item">
        Work with me
      </Link>
      <a href="https://nomadlist.com/@ronald" target="_blank" className="navbar-item">
        Whereabouts
      </a>
      <a href="https://twitter.com/ronaldlangeveld" target="_blank" className="navbar-item">
        Twitter
      </a>

    </div>
  </div>
</nav>


</>
  );
}



export default Navbar;