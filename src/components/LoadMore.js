import React from "react"
import styled from "styled-components"

const LoadMoreStyles = styled.div`
  padding: 3.2rem 0;
  text-align: center;
`

const LoadMoreButtonStyles = styled.button`
  padding: 0.8rem 4rem;
  background: var(--grey);
  border-radius: 8rem;
  cursor: pointer;
  font-size: 1.4rem;
  color: var(--black);
  transition: all ease 0.2s;

  &:hover {
    background: var(--black);
    color: #fff;
  }
`

const LoadMore = ({ handleLoadMore, hasMore }) => {
  return (
    <LoadMoreStyles>
      {hasMore ? (
        <LoadMoreButtonStyles onClick={handleLoadMore}>
          Load More
        </LoadMoreButtonStyles>
      ) : (
        ""
      )}
    </LoadMoreStyles>
  )
}

export default LoadMore
