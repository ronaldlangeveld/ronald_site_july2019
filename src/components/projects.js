import React, { Component } from 'react'
import Img from 'gatsby-image';
import { StaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import Navbar from './navbar'



export default () => (
    <StaticQuery
        query={graphql`
    query {
        fiix: file(relativePath: {eq: "fiix.png"}){
        childImageSharp{
          fluid(maxWidth: 800, quality: 50){
            ...GatsbyImageSharpFluid
          }
        }
      }
      hamster: file(relativePath: {eq: "hamster.png"}){
        childImageSharp{
          fluid(maxWidth: 800, quality: 50){
            ...GatsbyImageSharpFluid
          }
        }
      }
      qq: file(relativePath: {eq: "qq.png"}){
        childImageSharp{
          fluid(maxWidth: 800, quality: 50){
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
`}
        render={data => (
            <div>
                <section className="hero is-transparent">
                    <div className="hero-body">
                        <div className="container">

                            <h1 id="projects" className="title has-text-weight-light has-text-white">Recent Projects</h1>

                            <div className="columns is-multiline is-centered">

                                <div className="column is-6">
                                    <div className="card">
                                        <div className="card-image">
                                            <figure className="image">
                                                <Img style={imgSize} fluid={data.hamster.childImageSharp.fluid} />
                                            </figure>
                                        </div>
                                        <div style={boxSize} className="card-content">
                                            <div className="media">

                                                <div className="media-content">
                                                    <a rel="noopener noreferrer" href="https://www.hamster.capital/?ref=ronaldlangeveld.com" target="_blank" className="title is-4">Hamster Capital</a>

                                                </div>
                                            </div>

                                            <div className="content">
                                                <p>
                                                    Full Stack Web Application for an Amsterdam based Start-up, Hamster Capital.
                                                    Tasks includes Developing the MVP and database design. Written in Python 3, using the Django Web Framework.
                                                    Features includes automation of data matching and comparing as well as automated periodical emails.
    </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="column is-6">
                                    <div className="card">
                                        <div className="card-image">
                                            <figure className="image">
                                                <Img style={imgSize} fluid={data.fiix.childImageSharp.fluid} />
                                            </figure>
                                        </div>
                                        <div style={boxSize} className="card-content">
                                            <div className="media">

                                                <div className="media-content">
                                                    <a rel="noopener noreferrer" target="_blank" href="https://www.fiixsoftware.co.za/?ref=ronaldlangeveld.com" className="title is-4">Fiix South Africa</a>

                                                </div>
                                            </div>

                                            <div className="content">
                                                <p>
                                                    Frontend Static Marketing Site Developed for Fiix South Africa.
                                                    Website was developed in Jekyll for performance and SEO. Being a static site, hosted on Netlify (for free), client don't need to worry about maintaining the website and can instead focus on his scaling his product.
    </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="column is-12">
                                    <div className="card">
                                        <div className="card-image">
                                            <figure className="image">
                                                <Img style={imgSize} fluid={data.qq.childImageSharp.fluid} />
                                            </figure>
                                        </div>
                                        <div style={boxSize} className="card-content">
                                            <div className="media">

                                                <div className="media-content">
                                                    <a rel="noopener noreferrer" href="https://www.linkedin.com/pulse/how-many-people-were-here-james-coetzee/?published=t" target="_blank" className="title is-4">Analytical Dashboard</a>

                                                </div>
                                            </div>

                                            <div className="content">
                                                <p>
                                                    This is a custom application I developed for an SME based in South Africa. The client has a MongoDB database consisting of multiple collections and over 8 million documents that’s constantly increasing. I was able to to analyze the raw data into human readable statistics with graphical interpretation using Charts, as well as intergrating custom search queries. Lastly we added extra optimisation and automation to periodically cache some of the data to ensure the dashboards are loaded as quickly as possible for the end customer.
    </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
            </div>
        )} />)

const imgSize = {
    height: "300px"
}

const boxSize = {
    height: "100%"
}