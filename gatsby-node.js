const path = require(`path`)
const slugify = require(`react-slugify`);

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve(`src/components/blog_template.js`)
  const blog = graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      Promise.reject(result.errors)
    }
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: blogPostTemplate,
        context: {}, // additional data can be passed via context
      })
    })
  });

  const McTemplate = path.resolve(`src/components/mcdonalds_template.js`)
  const maccas = graphql(`
  {
    allMaccasJson {
      edges {
        node {
          slug
        }
      }
    }
  }
`).then(result => {
    if (result.errors) {
      Promise.reject(result.errors)
    }
    result.data.allMaccasJson.edges.forEach(({ node }) => {

      const slug = `/mcdonalds/${node.slug}`
      createPage({
        path: slug,
        component: McTemplate,
        context: {
          slug: node.slug
        }, // additional data can be passed via context
      })
    })
  })

	return Promise.all([blog, maccas]);
};

