import React from "react"
import { graphql, Link } from "gatsby"
import SEO from "../components/seo"
import Img from 'gatsby-image';
import 'bulma/css/bulma.min.css'
import Layout from './layout'

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark
  return (
<Layout>

<section className="hero">
      <SEO title={frontmatter.title} />
      <div className="hero-body">
        <div className="container">
          <div className="columns is-centered">

            <div className="column is-7">
              <h1 className="title is-3 has-text-weight-light">{frontmatter.title}</h1>
              <h2 className="has-text-weight-light subtitle is-6">{frontmatter.date}</h2>
              <hr />
              <div
                className="content is-medium"
                dangerouslySetInnerHTML={{ __html: html }}
              />

              <br />
              <Link className="is-size-7 has-text-weight-light has-text-black" to="/blog">← Back to article list</Link>

              <hr />

              <div>
                <div className="has-text-centered">
                  <Img style={ProfilePic} fluid={data.profilepic.childImageSharp.fluid} />
                </div>
                <br />
                <h1 className="has-text-centered title has-text-weight-normal is-5">Written by Ronald</h1>
                <p className="has-text-weight-light is-size-6 has-text-centered">Freelance Full-Stack Software Developer working on development projects for local and international clients. 
                Originally from South Africa and travels around Asia whilst working remotely. 
                <hr />
                Need Web Development or Tech Consultation to kick off for your next big thing? I'm available for Hire.
                <br />
                <a href="https://twitter.com/ronaldlangeveld" target="_blank">Twitter</a> &nbsp; <a href="mailto:hi@ronaldlangeveld.com">Email</a>
                
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>

    </section>
</Layout>
    // <div className="blog-post-container">
    //   <div className="blog-post">
    // <h1>{frontmatter.title}</h1>
    // <h2>{frontmatter.date}</h2>

  )
}

const ProfilePic = {
  width: "100px",
  height: "100px",
  borderRadius: "100%",
  margin: "0 auto"
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "DD MMMM YYYY")
        path
        title
      }
    }
    profilepic: file(relativePath: { eq: "bigimg2.jpg" }) {
      childImageSharp {
        fluid(quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`