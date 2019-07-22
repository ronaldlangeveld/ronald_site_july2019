import React, { Component } from 'react'
import Img from 'gatsby-image';
import { StaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import BackgroundImage from 'gatsby-background-image'



export default () => (
    <StaticQuery
    query={graphql`
  query {
    main: file(relativePath: {eq: "bigimg.jpg"}){
      childImageSharp{
        fluid(quality: 100){
          ...GatsbyImageSharpFluid
        }
      }
    }
}
`}
render={data => (
    <div>

      <section className="hero is-fullheight">
   
      <div className="hero-body">
      <div className="container">
      <div className="columns">
      <div className="column is-6">
      <div className="borderLeft">
            <p className="is-size-4 has-text-weight-light ">Hey,</p>
          <h1 className="title is-3 has-text-weight-light ">
            I'm Ronald
          </h1>

          <nav className="level">

          <div className="level-item level-left">
    <div>
    <h2 className="subtitle is-4 has-text-weight-light ">
           a full stack web developer
          </h2>
    </div>
  </div>

  <div className="level-item level-right">
    <div>
    <a className="has-text-black" href="https://twitter.com/ronaldlangeveld" target="_blank">Twitter</a> <a className="has-text-black" style={littleRight} href="mailto:hi@ronaldlangeveld.com">Email</a>

    </div>
  </div>
</nav>

<hr className="hr_line" />
          <p className="is-size-5 has-text-weight-light ">
          Need Web Development or Tech Consultation to kick off for your next big thing?
          </p>



          <p className="is-size-6 has-text-weight-light ">
         I'm available for remote projects
          </p>
          <br />

          <br />

          
          <div>
            <a href="#projects" className="button is-black is-size-5">See some of my work</a>
            <br />
            <br />
          </div>
          </div>
      </div>

 <div className="column is-hidden-mobile">
 <BackgroundImage Tag="section"
                           className={`masthead`}
                           fluid={data.main.childImageSharp.fluid}
                           backgroundColor={`#040e18`} />

                           <p className="help has-text-right">Me in Kuala Lumpur, July 2019</p>

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

const littleRight = {
  marginLeft: "15px"
}
