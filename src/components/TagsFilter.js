import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import styled from "styled-components"

const TagsFilterStyles = styled.div`
  padding: 1.6rem 0 1.6rem 0;

  .tags-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    .tag {
      padding: 0.4rem 1.2rem;
      margin: 2px;
      background: var(--grey);
      border-radius: 10rem;
      cursor: pointer;
      font-size: 1.4rem;
    }
    a {
      transition: all ease 0.2s;
      &:hover {
        background: var(--black);
        color: #fff;
      }
      &[aria-current="page"] {
        color: #fff;
        background: var(--black);
      }
    }
  }
`

export const query = graphql`
  {
    websites: allContentfulWebsite {
      nodes {
        tags {
          id
          name
        }
      }
    }
  }
`

const TagsFilter = () => {
  const data = useStaticQuery(query)
  const websites = data.websites.nodes

  const websitesTags = websites
    .map(tag => tag.tags)
    .flat()
    .reduce((acc, tag) => {
      const existingTag = acc[tag.id]

      if (existingTag) {
        existingTag.count += 1
      } else {
        acc[tag.id] = {
          id: tag.id,
          name: tag.name,
          count: 1,
        }
      }
      return acc
    }, {})

  const sortedTags = Object.values(websitesTags).sort(
    (a, b) => b.count - a.count
  )

  return (
    <TagsFilterStyles>
      <div className="tags-container">
        <Link className="tag" to="/">
          <span>All</span>
        </Link>
        {sortedTags.map(tag => {
          return (
            <Link className="tag" key={tag.id} to={`/${tag.name}`}>
              {tag.name}
            </Link>
          )
        })}
      </div>
    </TagsFilterStyles>
  )
}

export default TagsFilter
