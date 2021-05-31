import React, { useState } from 'react'
import styled from 'styled-components/macro'

import RightNav from './RightNav'

const Hamburger = styled.div`
  width: 32px;
  height:32px;
  position: fixed;
  top: 15px;
  right: 20px;
  z-index: 20;
  display: none;
    @media (max-width: 768px) {
      display: flex;
      justify-content: space-around;
      flex-flow: column nowrap;
    }

      div {
        width: 32px;
        height: 4px;
        border-radius: 10px;
        background-color: ${({ open }) => (open ? '#ccc' : '#333')};
        transform-origin: 1px;
        transition: all 0.2s linear;

      &:nth-child(1) {
        transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
      }
      &:nth-child(2) {
        transform: ${({ open }) => (open ? 'translateX(100%)' : 'translateX(0)')};
        opacity: ${({ open }) => (open ? 0 : 1)};
      }
      &:nth-child(3) {
        transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
      }
    }
`

const NavBurger = () => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <Hamburger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </Hamburger>
      <RightNav open={open} />
    </>
  )
}

export default NavBurger