import React, { Component } from 'react'
import Img from 'gatsby-image';
import { StaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import Navbar from './navbar'


export default () => (
    <StaticQuery
    query={graphql`
  query {
  file(relativePath: {eq: "profilepic2.jpg"}){
    childImageSharp{
      fluid(maxWidth: 200, quality: 90){
		...GatsbyImageSharpFluid
      }
    }
  }
}
`}
render={data => (
    <div>

      <section className="hero is-transparent is-fullheight">
   
      <div className="hero-head">


        <Navbar />
     
      </div>
      <div className="hero-body">
      <div className="container">
      <div className="columns">
      <div className="column is-4">
      <div className="has-text-white">
            <Img style={ProfilePic} fluid={data.file.childImageSharp.fluid} />
            <p className="is-size-4 has-text-weight-light has-text-white">Hey,</p>
          <h1 className="title is-3 has-text-weight-light has-text-white">
            I'm Ronald
          </h1>
          <h2 className="subtitle is-4 has-text-weight-light has-text-white">
           a full stack web developer
          </h2>
          <p className="is-size-5 has-text-weight-light has-text-white">
          Need Web Development or Tech Consultation to kick off for your next big thing?
          </p>
          <p className="is-size-6 has-text-weight-light has-text-white">
         I'm available for remote projects
          </p>

          <br />
          <br />
          
          <div>
            <a href="#projects" className="has-text-white">See some of my work →</a>
          </div>


          </div>
      </div>
      </div>
      </div>
      </div>
      

    </section>

  </div>
)}/>)

const ProfilePic = {
  borderRadius: "100%",
  width: "120px",
  height: "120px",
  display: "block",
  // marginLeft: "auto",
  // marginRight: "auto"
}

