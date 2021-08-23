import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import styled from "styled-components"

const TagsFilterStyles = styled.div`
  padding: 6rem 1.6rem;

  .tags-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    .tag {
      padding: 0.4rem 0.8rem;
      margin: 0 0.2em 0.65rem;
      border: 1px solid var(--green);
      border-radius: 10rem;
      cursor: pointer;
      font-size: 1.4rem;
    }
    a {
      transition: all ease 0.2s;
      &:hover {
        background: var(--green);
        color: #fff;
      }
      &[aria-current="page"] {
        color: #fff;
        background: var(--green);
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
  // Get list of all the tags
  const data = useStaticQuery(query)
  const websites = data.websites.nodes

  const websitesTags = websites
    .map(tag => tag.tags)
    .flat()
    .reduce((acc, tag) => {
      // check if the is an existing tag
      const existingTag = acc[tag.id]
      // if it exists, incement by 1
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
      // else add to acc as 1
    }, {})

  const sortedTags = Object.values(websitesTags).sort(
    (a, b) => b.count - a.count
  )

  // Get a list of all the websites with their tags

  // Count how many websites are in each tag

  // Loop over the list of tags and display the tags and the count of websites in that tag

  // Link it up
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
