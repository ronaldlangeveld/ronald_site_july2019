import React, { Component, useState } from 'react'
import Img from 'gatsby-image';
import { StaticQuery, graphql } from "gatsby"
import { Link } from "gatsby";
import Navbar from './navbar';
import BackgroundImage from 'gatsby-background-image'


export default () => (

  <StaticQuery
    query={graphql`
  query {
    main: file(relativePath: {eq: "seoul.jpeg"}){
      childImageSharp{
        fluid(quality: 100){
          ...GatsbyImageSharpFluid
        }
      }
    }
}
`}
    render={data => (
      <>

        <section className="mainIntro">

        <BackgroundImage
          Tag="div"
          fluid={data.main.childImageSharp.fluid}
          backgroundColor={`#040e18`}
        >
          <h1>Hello gatsby-background-image</h1>
        </BackgroundImage>

        </section>

      </>
    )} />)


