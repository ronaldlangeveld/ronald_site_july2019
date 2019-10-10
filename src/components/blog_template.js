import React from "react"
import { graphql, Link } from "gatsby"
import SEO from "../components/seo"
import Img from 'gatsby-image';
import 'bulma/css/bulma.min.css'
import Layout from './layout'
import BackgroundImage from 'gatsby-background-image'

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark
  return (
<Layout>
<BackgroundImage Tag="section"
                           className="responsiveImgPost"
                           fluid={frontmatter.featuredImage.childImageSharp.sizes}
          >
          </BackgroundImage>
          <SEO title={frontmatter.title} />
          <section className="hero is-dark">
          <div className="background-fixed">
  <div className="hero-body">
    <div className="container">
    <div className="columns is-centered">
      <div className="column is-8">
      <h1 className="title is-2 is-size-4-mobile has-text-warning">{frontmatter.title}</h1>
              <h2 className="subtitle is-6">{frontmatter.date}</h2>
              <Link className="is-size-6 has-text-white" to="/blog">← Back to article list</Link>

      </div>
    </div>
    </div>
  </div>
  </div>
</section>

<section className="hero">

      <div className="hero-body">
        <div className="container">
          <div className="columns is-centered">

            <div className="column is-8">
             
              <div
                className="content is-size-5 is-size-6-mobile"
                dangerouslySetInnerHTML={{ __html: html }}
              />

              <br />
              <Link className="is-size-6 has-text-black" to="/blog">← Back to article list</Link>





            </div>
          </div>
        </div>
      </div>

    </section>

    <section className="hero is-dark">
    <div className="background-fixed">
  <div className="hero-body">
    <div className="container">
    <div className="columns is-centered">
      <div className="column is-8">
      <div>
                <div className="has-text-centered">
                  <Img style={ProfilePic} fluid={data.profilepic.childImageSharp.fluid} />
                </div>
                <br />
                <h1 className="has-text-centered title is-5">Written by Ronald</h1>
                <p className="is-size-6 has-text-centered">Freelance Full-Stack Software Developer working on development projects for local and international clients. 
                Originally from South Africa and travels around Asia whilst working remotely. 
                <hr />
                Need Web Development or Tech Consultation to kick off for your next big thing? I'm available for Hire.
                <br />
                <a className="has-text-white" href="https://twitter.com/ronaldlangeveld" target="_blank">Twitter</a> &nbsp; <a className="has-text-white" href="mailto:hi@ronaldlangeveld.com">Email</a>
                
                </p>
              </div>
      </div>
    </div>
    </div>
  </div>
  </div>
</section>
</Layout>


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
        featuredImage {
          childImageSharp {
            sizes(maxWidth: 2000) {
              ...GatsbyImageSharpSizes
            }
          }
        }
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