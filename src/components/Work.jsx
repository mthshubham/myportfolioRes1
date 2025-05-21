import React from 'react'
import styled from 'styled-components'
import CodeShowcase from './CodeShowcase'
import GitHubActivity from './GitHubActivity'

const Work = () => {
  return (
    <WorkContainer>
      <h1>My Work</h1>
      <CodeShowcase />
      <GitHubActivity />
    </WorkContainer>
  )
}

const WorkContainer = styled.div`
  padding: 20px;
  
  h1 {
    text-align: center;
    color: #ffffff;
    margin-bottom: 40px;
    font-size: 2.5em;
  }
`

export default Work