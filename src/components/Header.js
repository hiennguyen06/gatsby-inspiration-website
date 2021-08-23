import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { Container } from "../styles/globalStyles"

const HeaderStyles = styled.header`
  padding: 1.6rem;
  position: relative;
`

const HeaderInner = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  border-bottom: 1px solid var(--green);
`

const Logo = styled.h1`
  font-size: 1.6rem;
  font-weight: 400;
  a {
    color: ${({ showInfo }) => (showInfo ? "#fff" : "#000")};
  }
`

const Menu = styled.div`
  justify-self: flex-end;
  padding-bottom: 8px;
  nav {
    button {
      margin-left: 1.6rem;
      color: ${({ showInfo }) => (showInfo ? "#fff" : "#000")};
    }
  }
`

const Header = ({ handleShowInfo, showInfo }) => {
  return (
    <>
      <HeaderStyles>
        <Container>
          <HeaderInner>
            <Logo showInfo={showInfo}>
              <Link to="/">Really Good Websites</Link>
            </Logo>
            <Menu showInfo={showInfo}>
              <nav>
                <button onClick={handleShowInfo}>Info</button>
              </nav>
            </Menu>
          </HeaderInner>
        </Container>
      </HeaderStyles>
    </>
  )
}

export default Header
