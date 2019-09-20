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
 {/* <Img className="profilepic" fluid={data.ronald.childImageSharp.fluid} /> */}
<div className="inner has-text-weight-light is-size-5 ">


<p><Link activeClassName="activesticky" to="/blog" className="has-text-black">Blog</Link></p>
<p className="top-space"><Link activeClassName="activesticky" to="/#clients" className="has-text-black">Clients</Link></p>
<p className="top-space"><Link activeClassName="activesticky" to="/#sides" className="has-text-black">Side Projects</Link></p>
<p className="top-space"><Link activeClassName="activesticky" to="#work" className="has-text-black">Work with me</Link></p>
<p className="top-space"><a href="https://nomadlist.com/@ronald" target="_blank" className="has-text-black">Whereabouts</a></p>

</div>

</div>


    </>
  );
}

export default SideProjects

