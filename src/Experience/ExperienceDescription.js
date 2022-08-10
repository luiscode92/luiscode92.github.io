import React from 'react'
import styled from '@emotion/styled'

function ExperienceDescription( data) {
  const description = data.data.description.split('/.')
  const stack = data.data.stack;

  return (
    <div>
      {description.map((value) => {
        return <P>{value}</P>
      })}
      <ExperienceStack><span style={{fontWeight: 600}}>Stack:</span> {stack}</ExperienceStack>
      <div>
          <img src={data.data.picture} alt="logo" style={{width: "813px", height:"auto"}} />
      </div>
    </div>

  )
}

export default ExperienceDescription

const P = styled.p`
    max-width: 558px;
    margin-right: auto;
    margin-bottom: 16px;
    margin-left: auto;
    font-size: 24px;
    line-height: 38px;
    font-weight: 300;
`;

const ExperienceStack = styled.p`
  max-width: 558px;
  margin-right: auto;
  margin-bottom: 16px;
  margin-left: auto;
  font-size: 20px;
  line-height: 38px;
  font-weight: 300;
`