import React, { Component } from 'react'
import Img from 'gatsby-image';
import { StaticQuery, graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"
import BackgroundImage from 'gatsby-background-image';

function SideProjects() {

  const data = useStaticQuery(graphql`query {
    bodyboarding: file(relativePath: {eq: "bbxyz.jpg"}){
    childImageSharp{
      fluid(maxWidth: 800, quality: 50){
        ...GatsbyImageSharpFluid
      }
    }
  }
  benp: file(relativePath: {eq: "ben.jpg"}){
    childImageSharp{
      fluid(maxWidth: 800, quality: 50){
        ...GatsbyImageSharpFluid
      }
    }
  }
  maccas: file(relativePath: {eq: "maccas.jpeg"}){
    childImageSharp{
      fluid(maxWidth: 800, quality: 50){
        ...GatsbyImageSharpFluid
      }
    }
  }
}`)

  return (
    <>

      <div id="sides">
      
        <section className="hero has-text-white is-medium">
          <div className="hero-head">


            <h1 className="title is-2 has-text-warning has-text-centered content-shadow">Latest Side Projects</h1>

          </div>
          <div className="hero-body">
            <div className="columns is-centered is-multiline">

              <div className="column is-12">


                <a href="https://www.bodyboarding.xyz" target="_blank"><p className="title has-text-white content-shadow">World Bodyboarding Rankings</p></a>

                <br />

                <Img fluid={data.bodyboarding.childImageSharp.fluid} />
                <br />

                <div className="content has-text-dark is-medium">
                  <br />
                  <a href="https://stabmag.com/style/the-consequence-of-chasing-slabs-in-northern-europe/" target="_blank"><Img fluid={data.benp.childImageSharp.fluid} className="headshot" /></a>

                  <blockquote><i>"It looks great! Functional and good looking. I’m shocked by how much you know about writing code."</i>
                    <br />

                    <div>

                      <p><span>Ben Player</span> - <span className="has-text-weight-bold">3 x World Champion Bodyboarder</span></p>
                    </div>


                  </blockquote>
                </div>


              </div>


              <div className="column is-12">

             <Link to='/mcdonalds-per-capita'>
             <BackgroundImage fluid={data.maccas.childImageSharp.fluid} className="responsiveImgProject">
            <div className="overlayBG"></div>

              <p className="title is-1 is-size-4-mobile has-text-white center-box has-text-centered content-shadow">McDonalds outlets per capita</p>


</BackgroundImage>
             </Link>



              </div>



            </div>
          </div>
        </section>

      </div>

    </>
  );
}

export default SideProjects



// const imgSize = {
//   height: "300px"
// }

// const boxSize = {
//   height: "100%"
// }