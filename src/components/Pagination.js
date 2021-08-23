import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { Container } from "../styles/globalStyles"
import { FiArrowRight, FiArrowLeft } from "react-icons/fi"

const PaginationStyles = styled.div`
  padding: 0rem 1.6rem 0rem 1.6rem;
`

const PaginationInner = styled.div`
  border-bottom: 1px solid #adb7b5;
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    margin: -1px 1.6rem;
    padding: 0.8rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #adb7b5;
    transition: all 0.5s ease;
    &:hover {
      color: var(--green);
    }

    &[aria-current="page"] {
      color: var(--green);
      border-bottom: 1px solid var(--green);
    }
  }

  & > * {
    &[disabled] {
      pointer-events: none;
    }
  }
`

const Pagination = ({ pageSize, totalCount, currentPage, base }) => {
  const totalPages = Math.ceil(totalCount / pageSize)
  const prevPage = currentPage - 1
  const nextPage = currentPage + 1
  const hasNextPage = nextPage <= totalPages
  const hasPrevPage = prevPage >= 1
  return (
    <PaginationStyles>
      <Container>
        <PaginationInner>
          <Link disabled={!hasPrevPage} to={`${base}/${prevPage}`}>
            <FiArrowLeft />
          </Link>
          {Array.from({ length: totalPages }).map((_, i) => {
            return (
              <Link key={i + 1} to={`/${i > 0 ? i + 1 : ""}`}>
                {i + 1}
              </Link>
            )
          })}
          <Link disabled={!hasNextPage} to={`${base}/${nextPage}`}>
            <FiArrowRight />
          </Link>
        </PaginationInner>
      </Container>
    </PaginationStyles>
  )
}

export default Pagination
