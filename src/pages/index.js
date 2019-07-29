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
    <Header />
  </Layout>
)}
/>
)


export default IndexPage
