import React, { Component } from 'react'
import Img from 'gatsby-image';
import { StaticQuery, graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"
import BackgroundImage from 'gatsby-background-image';

function SideProjects() {

    const data = useStaticQuery(graphql`
    query {
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

<div className="sticky">
 <a href="https://www.twitter.com/ronaldlangeveld" target="_blank"><Img className="profilepic" fluid={data.ronald.childImageSharp.fluid} /></a>
<div className="inner has-text-weight-light is-size-5 ">


<p><Link activeClassName="activesticky" to="/blog" className="has-text-black menu">Blog</Link></p>
<p className="top-space"><Link activeClassName="activesticky" to="/#clients" className="has-text-black menu">Clients</Link></p>
<p className="top-space"><Link activeClassName="activesticky" to="/#sides" className="has-text-black menu">Side Projects</Link></p>
<p className="top-space"><Link activeClassName="activesticky" to="/#work" className="has-text-black menu">Work with me</Link></p>
<p className="top-space"><a href="https://nomadlist.com/@ronald" target="_blank" className="has-text-black menu">Whereabouts</a></p>
<p className="top-space"><a href="https://www.twitter.com/ronaldlangeveld" target="_blank" className="has-text-black menu">Twitter</a></p>
</div>

</div>


    </>
  );
}

export default SideProjects

