import React from 'react'
import styled from '@emotion/styled'

function ExperienceHeader(data) {
  return (
    <ExperienceHeaderContainer>
      <StickyHeader>
        <img src={data.data.logo} alt="logo" style={{width: "32px", height:"32px", verticalAlign:"middle", display: "inline-block"}} />
        <Title>{data.data.name}</Title>
      </StickyHeader>
    </ExperienceHeaderContainer>
  )
}

export default ExperienceHeader

const ExperienceHeaderContainer = styled.div`
  max-width: 813px;
  margin-top: 0px;
  margin-right: auto;
  margin-left: auto;
  position: sticky;
  top: 0px;
  padding: 0px 70px 0px 70px;
`;

const StickyHeader = styled.div`
  display: flex;
  align-items: center;
  width: 300px;
  border-radius: 17px;
  background-color: #fbfbfb;
  box-shadow: 0 0 6px 3px #fbfbfb, 0 0 30px 10px #fbfbfb, 0 0 40px 10px hsl(0deg 0% 98% / 80%), 0 0 60px 30px hsl(0deg 0% 98% / 70%), 0 0 50px 20px hsl(0deg 0% 98% / 60%), 0 0 62px 40px hsl(0deg 0% 98% / 50%);
`;

const Title = styled.h1`
  font-size: 28px;
  margin-left: 16px;

`; 
