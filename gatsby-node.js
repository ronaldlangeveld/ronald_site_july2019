const path = require(`path`)
const slugify = require(`react-slugify`);

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve(`src/components/blog_template.js`)
  return graphql(`
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
      return Promise.reject(result.errors)
    }
    return result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: blogPostTemplate,
        context: {}, // additional data can be passed via context
      })
    })
  })
};

// exports.MCDpage = ({ actions, graphql }) => {
//   const { createPage } = actions
//   const McTemplate = path.resolve(`src/components/mcdonalds_template.js`)
//   return graphql(`
//  {
//    allMaccasJson {
//   edges {
//     node {
//       id
//     }
//   }
// }
// }
//   `).then(result => {
//     if (result.errors) {
//       return Promise.reject(result.errors)
//     }
//     return result.data.allMaccasJson.edges.forEach(({ node }) => {
//       createPage({
//         path: node.id,
//         component: McTemplate,
//         context: {}, // additional data can be passed via context
//       })
//     })
//   })
// };


// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.
exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  // Query for markdown nodes to use in creating pages.
  const result = await graphql(
    `
   {
     allMaccasJson {
    edges {
      node {
        id
        country
      }
    }
  }
}
    `
  )

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  // Create pages for each markdown file.
  const blogPostTemplate = path.resolve(`src/components/mcdonalds_template.js`)
  result.data.allMaccasJson.edges.forEach(({ node }) => {
    const path = node.id
    createPage({
      path,
      component: blogPostTemplate,
      // In your blog post template's graphql query, you can use path
      // as a GraphQL variable to query for data from the markdown file.
      context: {
        path,
      },
    })
  })
}