import React from "react"
import { Link } from "gatsby"
import { StaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Header from "../components/header"
import Projects from "../components/projects"
import BackgroundImage from 'gatsby-background-image'


const IndexPage = () => (
  <StaticQuery
  query={graphql`
  query {
    desktop: file(relativePath: { eq: "bg.JPG" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`} render={data => (
  <Layout>
    <SEO title="Ronald Langeveld | Full Stack Web Developer and Bootstrapper" />
    <BackgroundImage Tag="section"
                           className={`masthead`}
                           fluid={data.desktop.childImageSharp.fluid}
                           backgroundColor={`#040e18`}>
    {/* <header style={bgImg} className="masthead"> */}
    <div className="overlay"></div>
      <div className="overlay"></div>
      <div className="overlay"></div>
    <Header />
    <Projects />
    {/* </header> */}
    </BackgroundImage>
  </Layout>
)}
/>
)
const bgImg = {
  backgroundImage: "url(" + "'https://res.cloudinary.com/cinemakers/image/upload/v1563114654/other/IMG_0774.jpg'" + ")",

}

export default IndexPage
