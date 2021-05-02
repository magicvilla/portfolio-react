import React from 'react'
import styled from 'styled-components/macro'

const IconLink = styled.a`
  text-decoration: none;
  display:${((props) => props.display)};
  @media (min-width: 768px) {
      display: flex;
      align-items: center;
      margin: 10px 20px;
    }
`

const IconImage = styled.img`
  width: 50px;
  height: 50px;
`

export const NavIcon = ({ display, linkUrl, iconUrl, altText }) => {
  return (
    <IconLink href={linkUrl} display={display}>
      <IconImage src={iconUrl} alt={altText} />
    </IconLink>
  )
}