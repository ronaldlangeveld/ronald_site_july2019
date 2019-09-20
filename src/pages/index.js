import React from "react";
// import { Link } from "gatsby"
import { StaticQuery, graphql, useStaticQuery } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import {Link} from 'gatsby'
import Header from "../components/header";
import Projects from "../components/projects";
import BackgroundImage from 'gatsby-background-image';
import Navbar from '../components/navbar';
import SideProjects from '../components/side_projects';
import WorkWithMe from '../components/workwithme';
import Img from 'gatsby-image';
import StickyNav from '../components/stickynav';


function Index() {

  const data = useStaticQuery(graphql`
  query {
    cardImg: file(relativePath: {eq: "bigimg2.jpg"}){
      childImageSharp{
        fluid(maxWidth: 800, quality: 50){
          ...GatsbyImageSharpFluid
        }
      }
    }
    bgImg: file(relativePath: {eq: "seoul2.jpeg"}){
      childImageSharp{
        fluid(maxWidth: 800, quality: 50){
          ...GatsbyImageSharpFluid
        }
      }
    }
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

<Layout>
        <SEO title="Full Stack Web Developer and Bootstrapper" image={data.cardImg.childImageSharp.fluid.src} />

        <Navbar />
        <div className="columns is-gapless">


<div className="column is-2 is-hidden-touch">

<StickyNav />

</div>

<div className="column is-10">
<BackgroundImage className="responsiveBg" fluid={data.bgImg.childImageSharp.fluid}>

<Header />

<Projects id="clients" />

<SideProjects />

<WorkWithMe />



</BackgroundImage>
</div>


</div>


      </Layout>

</>
);
}




export default Index
