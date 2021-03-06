import React from 'react'
import styled from 'styled-components/macro'

const NavList = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: column nowrap;
  position: fixed;
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
  transition: transform 0.4s ease-in-out;
  top: 0;
  right: 0;
  height: 100vh;
  width: 100vw;
  background-color: #1e2021;
  color: white;
    @media (min-width: 539px) {
      width: 50vw;
    }
    @media (min-width: 990px) {
      flex-flow: row nowrap;
    }
`

const ListLink = styled.li`
  margin: 10px 0;
  padding: 8px 10px;
    @media (min-width: 990px) {

    }
`

const RightNav = ({ open }) => {
  return (
    <NavList open={open}>
      <ListLink>About Me</ListLink>
      <ListLink>CV</ListLink>
      <ListLink>Portfolio</ListLink>
    </NavList>
  )
}

export default RightNav