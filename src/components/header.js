import React, { Component, useState } from 'react'
import Img from 'gatsby-image';
import { StaticQuery, graphql } from "gatsby"
import { Link } from "gatsby";
import Navbar from './navbar';

export default () => (

  <StaticQuery
    query={graphql`
  query {
    main: file(relativePath: {eq: "bigimg2.jpg"}){
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

        <section className="hero">
          <div className="hero-header">
            <div className="container">
              <div className="columns is-centered">

                <div className="column is-6">
                  <Navbar />
                </div>

              </div>
            </div>
          </div>
          <div className="hero-body">
            <div className="container">
              <div className="columns is-centered">

                <div className="column is-6">

                  <div>

                    <h1 className="title is-1 has-text-weight-light is-size-3-mobile">Hi, I'm Ronald</h1>

                    <div className="content is-large has-text-weight-light is-size-5-mobile">
                      <p>I’m a freelance software engineer, with 3 years experience using <strong>Python 3</strong> and the <strong>Django web framework</strong>. I keep my applications running fast and automate tasks by deploying them onto <strong>Linux</strong> servers.</p>
                      <p>More recently I’m developing web applications with <strong>NodeJS</strong> and <strong>ReactJS</strong> as well as <strong>React Native</strong> to build iOS and Android apps.</p>
                      <p><strong>Need Web Development</strong> or <strong>Tech Consultation</strong> to kick off for your next big thing? <br />
                        <Link to="/work" className="has-text-dark"><u>Let's get in touch</u></Link>
                      </p>

                    </div>


                    {/* <div>
                      <p className="subtitle">Just for fun</p>
                      <Link to="/mcdonalds-per-capita">McDonalds outlets per capita by country</Link>
                    </div> */}

                  </div>


                    <hr />

                </div>


              </div>
            </div>
          </div>


        </section>

      </>
    )} />)

const ProfilePic = {
  borderRadius: "100%",
  width: "120px",
  height: "120px",
  display: "block",
  marginLeft: "auto",
  marginRight: "auto"
}

const littleRight = {
  marginLeft: "15px"
}
