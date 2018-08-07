import React from 'react'
import styled from 'react-emotion'

const StyledLoadingIndicator = styled('div')({ 
  padding: '1rem',
  textAlign: 'center'
})

// TODO: Connect itself to state?
export const LoadingIndicator = () =>
  <StyledLoadingIndicator>
    Loading...
  </StyledLoadingIndicator>