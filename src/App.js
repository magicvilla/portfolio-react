import React from 'react';
import styled from 'styled-components/macro';

import NavBar from 'components/Nav/NavBar';

const Container = styled.header`
  background-color: ${((props) => props.background)};
`

export const App = () => {
  return (
    <Container background="#fff">
      <NavBar />
    </Container>
  )
}
