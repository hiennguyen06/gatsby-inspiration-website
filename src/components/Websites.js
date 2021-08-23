import React from "react"
import styled from "styled-components"
import Website from "./Website"

const WebsitesSectionStyles = styled.div`
  padding: 0rem 1.6rem 12rem 1.6rem;
  max-width: 1028px;
  margin: 0 auto;
`

const WebsitesInnerStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(30rem, 40fr));
  /* grid-template-columns: 1fr 1fr 1fr; */
  gap: 4rem;

  @media (max-width: 400px) {
    grid-template-columns: 1fr;
  }
`

const Websites = ({ websitesData }) => {
  return (
    <>
      <WebsitesSectionStyles>
        <WebsitesInnerStyles>
          {websitesData.map(website => {
            return <Website key={website.id} website={website} />
          })}
        </WebsitesInnerStyles>
      </WebsitesSectionStyles>
    </>
  )
}

export default Websites
