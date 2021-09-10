const path = require('path')

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  // Define a template for help page
  const helpPage = path.resolve('./src/templates/help-page.js')

  const result = await graphql(
    `
      {
        allContentfulPage {
          nodes {
            title
            slug
          }
        }
      }
    `
  )

  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading your Contentful pages`,
      result.errors
    )
    return
  }

  const pages = result.data.allContentfulPage.nodes

  // Create help pages
  // But only if there's at least one help page found in Contentful
  // `context` is available in the template as a prop and as a variable in GraphQL

  if (pages.length > 0) {
    pages.forEach((page, index) => {
      const previousPageSlug = index === 0 ? null : pages[index - 1].slug
      const nextPageSlug =
        index === pages.length - 1 ? null : pages[index + 1].slug

      createPage({
        path: `/guides-and-tutorials/${page.slug}/`,
        component: helpPage,
        context: {
          slug: page.slug,
          previousPageSlug,
          nextPageSlug,
        },
      })
    })
  }
}