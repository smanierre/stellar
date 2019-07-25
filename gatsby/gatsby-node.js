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

            slug {
              current
            }
          }
        }
      }
    }
  `)

  const projects = res.data.allSanityProject.edges.map(edge => edge.node)
  projects.forEach(project => {
    actions.createPage({
      path: `/projects/${project.slug.current}`,
      component: require.resolve("./src/templates/project.jsx"),
      context: { id: project.id },
    })
  })
}
