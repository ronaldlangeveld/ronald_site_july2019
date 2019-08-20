import React from "react"
// import { Link } from "gatsby"
import { StaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/header"
import Projects from "../components/projects"
import BackgroundImage from 'gatsby-background-image'


const IndexPage = () => (
  <StaticQuery
  query={graphql`
  query {
    cardImg: file(relativePath: {eq: "bigimg2.jpg"}){
      childImageSharp{
        fluid(maxWidth: 800, quality: 50){
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`} render={data => (
  <Layout>
    <SEO title="Full Stack Web Developer and Bootstrapper" image={data.cardImg.childImageSharp.fluid.src} />
    <Header />
  </Layout>
)}
/>
)


export default IndexPage
