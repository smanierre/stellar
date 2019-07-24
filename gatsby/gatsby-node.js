/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

exports.createPages = async ({ actions, graphql }) => {
  const res = await graphql(`
    query {
      allSanityProject {
        edges {
          node {
            id
            title
            thumbnail {
              asset {
                fluid {
                  srcSet
                  src
                  sizes
                }
              }
            }
            description
            slug {
              current
            }
            images {
              asset {
                fluid {
                  src
                }
              }
            }
          }
        }
      }
    }
  `)

  // TODO: Finish setting this up in the ./src/templates/project.jsx file
  const projects = res.data.allSanityProject.edges.map(edge => edge.node)
  projects.forEach(project => {
    const slug = project.slug.current
    actions.createPage({
      path: `/projects/${slug}`,
      component: require.resolve("./src/templates/project.jsx"),
      context: { id: project.id },
    })
  })
}
