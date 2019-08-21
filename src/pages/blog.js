import React from "react"
import Layout from "../components/layout";
import { graphql, Link } from "gatsby"
import PostIndex from "../components/blog_index";
import PostLink from "../components/blog_list";
import SEO from "../components/seo";


const IndexPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map(edge => <PostLink key={edge.node.id} post={edge.node} />)

  return (
  <div>
       <SEO title="Blog" />
<Layout>
    <PostIndex>
    {Posts}
    </PostIndex>
  </Layout>
  </div>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 100)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
            img
          }
        }
      }
    }
  }
`