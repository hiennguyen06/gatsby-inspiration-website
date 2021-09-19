import React, { useState, useEffect } from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Websites from "../components/Websites"
import TagsFilter from "../components/TagsFilter"
import LoadMore from "../components/LoadMore"

const Home = ({ data, pageContext }) => {
  const websitesData = data.allContentfulWebsite.nodes

  const [websites, setWebsites] = useState([...websitesData.slice(0, 16)])
  const [loadMore, setLoadMore] = useState(false)
  const [hasMore, setHasMore] = useState(websitesData.length > 16)

  const handleLoadMore = () => {
    setLoadMore(true)
  }

  useEffect(() => {
    if (loadMore && hasMore) {
      const currentLength = websites.length
      const isMore = currentLength < websitesData.length
      const nextResults = isMore
        ? websitesData.slice(currentLength, currentLength + 16)
        : []
      setWebsites([...websites, ...nextResults])
      setLoadMore(false)
    }
  }, [loadMore, hasMore])

  useEffect(() => {
    const isMore = websites.length < websitesData.length
    setHasMore(isMore)
  }, [websites])

  return (
    <>
      <Layout>
        <TagsFilter activeTag={pageContext.tag} />
        <Websites websites={websites} />
        <LoadMore hasMore={hasMore} handleLoadMore={handleLoadMore} />
      </Layout>
    </>
  )
}

export const query = graphql`
  query ($tag: [String]) {
    allContentfulWebsite(
      sort: { fields: createdAt, order: DESC }
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
