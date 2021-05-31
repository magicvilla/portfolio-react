import React from 'react'
import styled from 'styled-components/macro'

import NavBurger from './NavBurger'

const Nav = styled.nav`
  width: 100%;
  height: 60px;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
`

const Logo = styled.div`
  padding: 15px 0;
`

const LogoText = styled.p`
  font-size: 24px;
  font-weight: 700;
`

const NavBar = () => {
  return (
    <Nav>
      <Logo>
        <LogoText>A.L</LogoText>
      </Logo>
      <NavBurger />
    </Nav>
  )
}

export default NavBar