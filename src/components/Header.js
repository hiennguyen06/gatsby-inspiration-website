import React from "react"
import styled from "styled-components"
import { Container } from "../styles/globalStyles"

const HeaderStyles = styled.div`
  background: var(--black);
  color: var(--white);
  padding: 8px 0;
`
const HeaderInner = styled.div`
  .statement {
    padding: 0rem 0 0 0;
    p {
      font-size: 1.6rem;
      text-align: center;
      @media (max-width: 600px) {
        font-size: 1.2rem;
      }
    }
    a {
      border-bottom: 1px solid var(--white);
    }
  }
`

const Header = () => {
  return (
    <>
      <HeaderStyles>
        <Container>
          <HeaderInner>
            <div className="statement">
              <p>
                This website is a personal collection of the web's best
                interactive designs curated by{" "}
                <a
                  href="https://www.hiennguyen.com.au/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Hien Nguyen
                </a>
              </p>
            </div>
          </HeaderInner>
        </Container>
      </HeaderStyles>
    </>
  )
}

export default Header
