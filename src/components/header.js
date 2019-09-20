import React, { Component, useState } from 'react'
import Img from 'gatsby-image';
import { StaticQuery, graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby";
import Intro from './intro';


function Header() {

  const data = useStaticQuery(graphql `{
    ronald: file(relativePath: {eq: "ron3.jpg"}){
      childImageSharp{
        fluid(maxWidth: 800, quality: 50){
          ...GatsbyImageSharpFluid
        }
      }
    }
  }`)

return (
<>
<div className="hero is-fullheight">
  <div className="hero-body">
    <div className="container">
<div className="is-hidden-desktop">    <Img className="profilepic2" fluid={data.ronald.childImageSharp.fluid} /></div>


      <h1 className="title content-shadow is-1 has-text-warning">
       Hello, I'm Ronald
      </h1>
      <div className="content content-shadow is-large has-text-white is-size-5-mobile">
                      <p>I’m a freelance software engineer, with 3 years experience using <strong className="has-text-white">Python 3</strong> and the <strong className="has-text-white">Django web framework</strong>. I keep my applications running fast and automate tasks by deploying them onto <strong className="has-text-white">Linux</strong> servers.</p>
                      <p>More recently I’m developing web applications with <strong className="has-text-white">Flask</strong>, <strong className="has-text-white">NodeJS</strong> and <strong className="has-text-white">ReactJS</strong> as well as <strong className="has-text-white">React Native</strong> to build iOS and Android apps.</p>
                      <p><strong className="has-text-white">Need Web Development</strong> or <strong className="has-text-white">Tech Consultation</strong> to kick off for your next big thing?
                    </p>
                </div>
                <div>
                <a className="button is-light is-outlined is-light is-size-4 is-size-6-mobile" href="https://ronaldlangeveld.typeform.com/to/jd8iq9" target="_blank">Let's get started</a>
                </div>
                <br />
                <p><a className=" content-shadow has-text-white is-size-5" href="mailto:hi@ronaldlangeveld.com">Or let's get in touch via email</a></p>
    
    </div>
  </div>
</div>



</>
);
}



export default Header;
