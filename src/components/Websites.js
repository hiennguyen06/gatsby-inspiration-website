import React from "react"
import styled from "styled-components"
import { Container } from "../styles/globalStyles"
import Website from "./Website"

const WebsitesSectionStyles = styled.div``

const WebsitesInnerStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(28rem, 1fr));
  justify-content: center;
  gap: 1.6rem;
  @media (max-width: 400px) {
    grid-template-columns: 1fr;
  }
`

const Websites = ({ websites }) => {
  return (
    <>
      <Container>
        <WebsitesSectionStyles>
          <WebsitesInnerStyles>
            {websites.map(website => {
              return <Website key={website.id} website={website} />
            })}
          </WebsitesInnerStyles>
        </WebsitesSectionStyles>
      </Container>
    </>
  )
}

export default Websites
