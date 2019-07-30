import React, { Component } from 'react'
import Img from 'gatsby-image';
import { StaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"


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
      <div>

        <section className="hero">
          <div className="hero-header">
            <div className="container">
              <div className="columns is-centered">
                <div className="column is-6">
                  <br />
                  <h1 className="title has-text-weight-light has-text-centered">Hi, I'm Ronald</h1>




                  <hr />


                  <nav className="level is-mobile">
                    <div className="level-item has-text-centered">
                      <div>
                        <Link to="/blog" className="has-text-dark">Blog</Link>
                      </div>
                    </div>
                    <div className="level-item has-text-centered">
                      <div>
                        <Link to='/projects' className="has-text-dark">Projects</Link>
                      </div>
                    </div>

                    <div className="level-item has-text-centered">
                      <div>
                        <Link to='/contact' className="has-text-dark" >Around the web</Link>
                      </div>
                    </div>
                    <div className="level-item has-text-centered">
                      <div>
                        <a href="https://twitter.com/ronaldlangeveld" target="_blank" className="has-text-dark">Twitter</a>
                      </div>
                    </div>
                  </nav>

                </div>
              </div>
            </div>
          </div>
          <div className="hero-body">
            <div className="container">
              <div className="columns is-centered">
                <div className="column is-6">
                <Img fluid={data.main.childImageSharp.fluid} />
                <br />
                  <div className="content">
                    <p>I’m a freelance software engineer, with 3 years experience using <strong>Python 3</strong> and the <strong>Django web framework</strong>. I keep my applications running smoothly and automate tasks by deploying them onto <strong>Linux</strong> servers.</p>
                    <p>More recently I’m developing web applications with <strong>NodeJS</strong> and <strong>ReactJS</strong> while learning <strong>React Native</strong> to build iOS and Android apps.</p>
                    <p><strong>Need Web Development</strong> or <strong>Tech Consultation</strong> to kick off for your next big thing? <br /> <Link to='/contact'>Let’s get in touch.</Link></p>


                  </div>
                </div>

              </div>
            </div>
          </div>


        </section>

      </div>
    )} />)

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
