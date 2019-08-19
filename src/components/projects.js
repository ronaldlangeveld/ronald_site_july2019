import React, { Component } from 'react'
import Img from 'gatsby-image';
import { StaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"



export default () => (
    <StaticQuery
        query={graphql`
    query {
        fiix: file(relativePath: {eq: "fiix.jpg"}){
        childImageSharp{
          fluid(maxWidth: 800, quality: 50){
            ...GatsbyImageSharpFluid
          }
        }
      }
      hamster: file(relativePath: {eq: "hamster.jpg"}){
        childImageSharp{
          fluid(maxWidth: 800, quality: 50){
            ...GatsbyImageSharpFluid
          }
        }
      }
      qq: file(relativePath: {eq: "qq.jpg"}){
        childImageSharp{
          fluid(maxWidth: 800, quality: 50){
            ...GatsbyImageSharpFluid
          }
        }
      }
      ssp: file(relativePath: {eq: "ssp.jpg"}){
        childImageSharp{
          fluid(maxWidth: 800, quality: 50){
            ...GatsbyImageSharpFluid
          }
        }
      }
      rhum: file(relativePath: {eq: "rhum.jpg"}){
        childImageSharp{
          fluid(maxWidth: 800, quality: 50){
            ...GatsbyImageSharpFluid
          }
        }
      }
      quarter: file(relativePath: {eq: "quarter.jpg"}){
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
                <section className="hero">
                <div className="hero-header">
                <div className="container">
                    <div className="columns is-centered">
                        <div className="column is-6 marginHeaders">
                            <br />
                            <h1 className="title is-1 has-text-weight-light">Projects</h1>
                            <h2 className="subtitle is-size-3 has-text-weight-light">Some projects I've worked on over the last few months</h2>

                            <Link className="is-size-6 has-text-weight-light has-text-black" to="/">← Back home</Link>
                            <hr />
                        </div>
                    </div>
                </div>
            </div>
                    <div className="hero-body">
                        <div className="container">

                           

                            <div className="columns is-centered">

                                <div className="column is-6">
                                
                                <div className="columns is-multiline is-centered">

<div className="column is-12">
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
                    Features includes automation of data matching and comparing as well as automated periodical emails.</p>
                {/* <p><span class="tag is-primary">Python</span> <span class="tag is-primary">Django</span> <span class="tag is-primary">jQuery</span> <span class="tag is-primary">Python</span></p> */}
            </div>
        </div>
    </div>
</div>
<div className="column is-12">
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
<div className="column is-12">
    <div className="card">
        <div className="card-image">
            <figure className="image">
                <Img style={imgSize} fluid={data.ssp.childImageSharp.fluid} />
            </figure>
        </div>
        <div style={boxSize} className="card-content">
            <div className="media">

                <div className="media-content">
                    <a rel="noopener noreferrer" href="http://ronaldlangeveld.gitlab.io/SSP/" target="_blank" className="title is-4">Sports Performance</a>

                </div>
            </div>

            <div className="content">
                <p>
                Front End development for a local client who needed a Sketch Design developed into a usable landing page as well as making it mobile responsive. The client can now pass the source code on to his backend developer to put it on their server.
</p>
            </div>
        </div>
    </div>
</div>


<div className="column is-12">
    <div className="card">
        <div className="card-image">
            <figure className="image">
                <Img style={imgSize} fluid={data.quarter.childImageSharp.fluid} />
            </figure>
        </div>
        <div style={boxSize} className="card-content">
            <div className="media">

                <div className="media-content">
                    <a rel="noopener noreferrer" href="https://25sbh.com/" target="_blank" className="title is-4">25 Quarter</a>

                </div>
            </div>

            <div className="content">
                <p>

                I was contracted from the beautiful St Barths to build a landing page for their world class cocktail bar. The website lives on my hosting platform.
</p>
            </div>
        </div>
    </div>
</div>


<div className="column is-12">
    <div className="card">
        <div className="card-image">
            <figure className="image">
                <Img style={imgSize} fluid={data.rhum.childImageSharp.fluid} />
            </figure>
        </div>
        <div style={boxSize} className="card-content">
            <div className="media">

                <div className="media-content">
                    <a rel="noopener noreferrer" href="https://rhumroom.com/" target="_blank" className="title is-4">Rhumroom</a>

                </div>
            </div>

            <div className="content">
                <p>

                Rhumroom is a semi-secret bar located in the Caribbean. I built the landing page in Bulma to keep it responsive amongst all devices. This site is due to be connected to a database to showcase their customers all their Rum's in the near future</p>
            </div>
        </div>
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