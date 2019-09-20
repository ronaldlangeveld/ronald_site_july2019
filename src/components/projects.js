import React, { Component } from 'react'
import Img from 'gatsby-image';
import { StaticQuery, graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"
import BackgroundImage from 'gatsby-background-image';

function Projects() {

  const data = useStaticQuery(graphql`query {
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
  qqlogo: file(relativePath: {eq: "qq.png"}){
    childImageSharp{
      fluid(maxWidth: 800, quality: 50){
        ...GatsbyImageSharpFluid
      }
    }
  }
}`)

  return (
    <>

      <div id="clients">

        <section className="hero has-text-white is-medium">
          <div className="hero-head">


            <h1 className="title is-2 has-text-warning has-text-centered content-shadow">Recent Clients</h1>

          </div>
          <div className="hero-body">
            <div className="columns is-centered is-multiline content-shadow">

              <div className="column is-6">



                <a href="https://www.hamster.capital" target="_blank"><p className="title has-text-white">Hamster Capital</p></a>

                <br />


                <BackgroundImage className="responsiveImgClient" fluid={data.hamster.childImageSharp.fluid} />
                <br />

                <p className="is-size-6">Full Stack Web Application for an Amsterdam based Start-up, Hamster Capital. Tasks includes Developing the MVP and database design. Written in Python 3, using the Django Web Framework. Features includes automation of data matching and comparing as well as automated periodical emails.</p>

              </div>
              <div className="column is-6">

     
              <a href="https://www.fiixsoftware.co.za" target="_blank"><p className="title has-text-white">Fiix Software - South Africa</p></a>

<br />

                <BackgroundImage className="responsiveImgClient" fluid={data.fiix.childImageSharp.fluid} />
                <br />
                <p>Frontend Static Marketing Site Developed for Fiix South Africa. Website was developed in Jekyll for performance and SEO. Being a static site, hosted on Netlify (for free), client doesn't need to worry about maintaining the website and can instead focus on his scaling his product.</p>
              </div>

              <div className="column is-6">

               
        <a><p className="title has-text-white">Analytical Dashboard</p></a>

<br />


                <BackgroundImage className="responsiveImgClient" fluid={data.qq.childImageSharp.fluid} />
                <br />

                <p className="is-size-6">This is a custom application I developed for an SME based in South Africa. The client has a MongoDB database consisting of multiple collections and over 8 million documents that’s constantly increasing. I was able to to analyze the raw data into human readable statistics with graphical interpretation using Charts, as well as intergrating custom search queries. Lastly we added extra optimisation and automation to periodically cache some of the data to ensure the dashboards are loaded as quickly as possible for the end customer.</p>

              </div>



              <div className="column is-6">

               
        <a href="https://www.rhumroom.com" target="_blank"><p className="title has-text-white">Rhum Room</p></a>

<br />


                <BackgroundImage className="responsiveImgClient" fluid={data.rhum.childImageSharp.fluid} />
                <br />

                <p className="is-size-6">Rhumroom is a semi-secret bar located in the Caribbean. I built the landing page in Bulma to keep it responsive amongst all devices. This site is due to be connected to a database to showcase their customers all their Rum's in the near future.</p>

              </div>


            </div>
          </div>
        </section>

      </div>

    </>
  );
}

export default Projects



// const imgSize = {
//   height: "300px"
// }

// const boxSize = {
//   height: "100%"
// }