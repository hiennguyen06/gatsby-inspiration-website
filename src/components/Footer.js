import React from "react"
import styled from "styled-components"

const FooterStyles = styled.div`
  padding: 0 1.6rem 1.6rem 1.6rem;
  text-align: center;

  @media (max-width: 600px) {
    text-align: center;
    font-size: 1.2rem;
  }
`

const Footer = () => {
  return (
    <FooterStyles>
      Copyright ©2021. All screenshots © of their respective owners.
    </FooterStyles>
  )
}

export default Footer
