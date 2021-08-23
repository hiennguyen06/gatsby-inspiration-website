import React from "react"
import styled from "styled-components"

const InfoOverlayStyles = styled.div`
  padding: 1.6rem;
  width: 100vw;
  height: 100vh;
  background: var(--green);
  color: #ffffff;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 99;
  opacity: ${({ showInfo }) => (showInfo ? "1" : "0")};
  pointer-events: ${({ showInfo }) => (showInfo ? "auto" : "none")};
  transition: all 0.2s ease;

  .info-header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .btn-close {
      color: #ffffff;
    }
  }

  .info-content {
    padding: 0rem 0;
    width: 88%;
    h2 {
      font-size: 2.4rem;
      font-weight: 400;
      margin-bottom: 1.6rem;
      letter-spacing: -1px;

      @media (max-width: 768px) {
        font-size: 3.2rem;
      }
      @media (max-width: 768px) {
        font-size: 2.4rem;
      }
    }

    a {
      color: #ffffff;
    }

    div {
      .action-link {
        padding: 0.4rem 1.6rem;
        border: 1px solid #ffffff;
        border-radius: 10rem;
        cursor: pointer;
        color: #ffffff;
        margin-right: 0.8rem;
      }
      .solid {
        background: #ffffff;
        color: var(--green);
      }
    }
  }
`

const InfoOverlay = ({ handleShowInfo, showInfo }) => {
  return (
    <InfoOverlayStyles showInfo={showInfo}>
      <div className="info-header">
        <div></div>
        <button className="btn-close" onClick={handleShowInfo}>
          Close
        </button>
      </div>

      <div className="info-content">
        <h2>
          This website is a collection of the internet's best, curated by{" "}
          <a
            href="https://www.hiennguyen.com.au/"
            target="_blank"
            rel="noreferrer"
          >
            Hien Nguyen
          </a>
        </h2>
        <div>
          <a
            href="mailto:info@hiennguyen.com.au"
            target="_blank"
            rel="noreferrer"
            className="action-link"
          >
            Submit a site
          </a>
          <button className="action-link solid" onClick={handleShowInfo}>
            Explore sites
          </button>
        </div>
      </div>
    </InfoOverlayStyles>
  )
}

export default InfoOverlay
