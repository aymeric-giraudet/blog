const path = require("path")

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const blogPostTemplate = path.resolve("src/templates/Article.js")

  const result = await graphql(`
    {
      allContentfulBlogPost {
        edges {
          node {
            title
            slug
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  const posts = result.data.allContentfulBlogPost.edges

  // Create post detail pages
  posts.forEach(({ node }) => {
    createPage({
      path: `/blog/${node.slug}/`,
      component: blogPostTemplate,
      context: {
        slug: node.slug,
      },
    })
  })
}
