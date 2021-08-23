import React from "react"
import { graphql } from "gatsby"

const SingleWebsite = ({ data }) => {
  return <div>{data.website.name}</div>
}

// This is dynamic based on the slug passed in from Gatsby Node. This page expects a slug that is a string. Page can only be view with a slug.
export const query = graphql`
  query ($slug: String!) {
    website: contentfulWebsite(slug: { eq: $slug }) {
      name
      id
    }
  }
`

export default SingleWebsite
