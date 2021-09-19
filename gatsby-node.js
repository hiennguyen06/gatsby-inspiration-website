const path = require("path")

const createWebsitePages = async ({ graphql, actions }) => {
  // INDIVIDUAL WEBSITE PAGES
  // 1. Get template for this page
  const websiteTemplate = path.resolve(`src/templates/Website.js`)
  // 2. Query all websites
  const { data } = await graphql(`
    {
      websites: allContentfulWebsite {
        totalCount
        nodes {
          name
          id
          slug
        }
      }
    }
  `)
  // 3. Loop over each pizza and create a page for that pizza
  data.websites.nodes.forEach(website => {
    actions.createPage({
      path: `website/${website.slug}`,
      component: websiteTemplate,
      context: {
        slug: website.slug,
      },
    })
  })
}

const createTagPages = async ({ graphql, actions }) => {
  const tagTemplate = path.resolve(`src/pages/index.js`)
  // 2. query all the tags
  const { data } = await graphql(`
    {
      tags: allContentfulTag {
        nodes {
          name
          slug
          id
        }
      }
    }
  `)

  // 3. create pages for those tags
  data.tags.nodes.forEach(tag => {
    console.log(`Creating tag page`, tag.name)
    actions.createPage({
      path: `/${tag.name}`,
      component: tagTemplate,
      context: {
        tag: tag.name,
      },
    })
  })

  // 4. pass tag data to website.js
}

exports.createPages = async params => {
  await Promise.all([createWebsitePages(params), createTagPages(params)])
}
