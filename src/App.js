import StartPage from 'components/StartPage';
import React from 'react';
import styled from 'styled-components/macro';

const Container = styled.main`
  background-color: ${((props) => props.background)};
`

export const App = () => {
  return (
    <Container background="#fff">
      <StartPage />
    </Container>
  )
}
