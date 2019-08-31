import React from 'react';

import SEO from "../../components/seo"
import { Link } from "gatsby"


function navbar(props) {

    
    return (
<div>

<nav className="navbar" role="navigation" aria-label="main navigation">
  <div className="navbar-brand">


    <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" className="navbar-menu">
    <div className="navbar-start">


    </div>

    <div className="navbar-end">

        <div className="navbar-item">
            <span className="is-size-7">Sign in</span>
        </div>
        <div className="navbar-item">
            <span className="is-size-7">Create an account</span>
        </div>

    </div>
  </div>
</nav>


    

</div>
    );

}

export default navbar