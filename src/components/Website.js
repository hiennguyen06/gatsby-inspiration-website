import React from "react"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { FiArrowUpRight } from "react-icons/fi"

const WebsiteStyles = styled.div`
  .image-bg-green {
    background: transparent;
    position: relative;
    transition: all 0.2s ease;
  }

  .project-title {
    font-size: 1.4rem;
    font-weight: 400;
    margin-top: 0.8rem;
    display: flex;
    justify-content: space-between;
    color: var(--green);
    span {
      color: #adb7b5;
    }
  }
`
const WebsiteOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: opacity 0.5s ease;

  &:hover {
    opacity: 1;
    cursor: auto;
    z-index: 9;
    background: var(--black);
  }

  .icon-redirect {
    font-size: 4rem;
    color: #fff;
    z-index: 10;
    position: absolute;
    right: 0rem;
    top: 0rem;
  }

  .website-title {
    color: var(--white);
    font-weight: 700;
    font-size: 2rem;
    position: absolute;
    left: 8px;
    bottom: 8px;
  }
`

const Website = ({ website }) => {
  const image = getImage(website.image)

  return (
    <>
      <WebsiteStyles>
        <div className="image-bg-green">
          <a href={`${website.url}`} target="_blank" rel="noreferrer">
            <GatsbyImage
              image={image}
              alt={website.name}
              className="website-image"
            />
          </a>
          <WebsiteOverlay>
            <a href={`${website.url}`} target="_blank" rel="noreferrer">
              <FiArrowUpRight className="icon-redirect" />
            </a>
            <a href={`${website.url}`} target="_blank" rel="noreferrer">
              <span className="website-title">{website.name}</span>
            </a>
          </WebsiteOverlay>
        </div>
      </WebsiteStyles>
    </>
  )
}

export default Website
