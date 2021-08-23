import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Websites from "../components/Websites"
import Pagination from "../components/Pagination"
import TagsFilter from "../components/TagsFilter"

const Home = ({ data, pageContext }) => {
  const websitesData = data.allContentfulWebsite.nodes

  return (
    <>
      <Layout>
        <TagsFilter activeTag={pageContext.tag} />
        <Websites websitesData={websitesData} />
        <Pagination
          pageSize={parseInt(process.env.GATSBY_PAGE_SIZE)}
          totalCount={data.allContentfulWebsite.totalCount}
          currentPage={pageContext.currentPage || 1}
          skip={pageContext.skip}
          base=""
        />
      </Layout>
    </>
  )
}

export const query = graphql`
  query ($skip: Int = 0, $pageSize: Int = 6, $tag: [String]) {
    allContentfulWebsite(
      sort: { fields: createdAt, order: DESC }
      limit: $pageSize
      skip: $skip
      filter: { tags: { elemMatch: { name: { in: $tag } } } }
    ) {
      totalCount
      nodes {
        id
        description
        name
        slug
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
        createdAt(fromNow: true)
        url
        tags {
          id
          name
          slug
        }
      }
    }
  }
`

export default Home
