import React from 'react';

import SEO from "../../components/seo"
import { Link } from "gatsby"
import Navbar from './navbar'
import Layout from '../../components/layout';


function bodyboarding(props) {

    
    return (
<>
<Layout>

<Navbar />
</Layout>
<section className="hero is-dark">
  <div className="hero-body">
    <div className="container has-text-centered">
      <h1 className="title is-2">
        Session Log
      </h1>
      <h2 className="subtitle">
        The simplest way keep track of your surf sessions
      </h2>
    </div>
  </div>
</section>
<section className="hero is-medium">
  <div className="hero-body">
    <div className="container">
        <div className="columns">

            <div className="column is-6">

            <h1 className="title">
       How it works
      </h1>

            </div>
            <div className="column is-6">

            </div>

        </div>
    </div>
  </div>
</section>


</>
    );

}

export default bodyboarding