import React, {useState} from 'react'
import styled from '@emotion/styled'

function Cover() {

  return (
    <CoverContainer>
      <Span>Hey, I'm Luis.</Span>
      <DescriptionContainer>
        <P>
          Fullstack developer with +4 years of experience developing digital products and using Javascript,
          NodeJs, Reactjs, several UI frameworks.
        </P>
        <P>
          Luis is performance-driven and  focused on grow through humanistic leadership
        </P>
        <P>
        Web3 & blockchain entusiast
        </P>
      </DescriptionContainer>
      <div style=
        {{
          display: "flex",
          flexDirection: "row",
          marginTop: "40px"
        }}
      >
        <PrimaryButton  href="mailto:luiscode92@gmail.com">Email me</PrimaryButton>
        <SecondaryButton href='http://twitter.com/luiscode92'> Twitter</SecondaryButton>
      </div>
    </CoverContainer>
  )
}

export default Cover

const CoverContainer = styled.div`
  max-width: 560px;
  margin-right: auto;
  margin-left: auto;
  margin-top: 60px;
`

const P = styled.p`
  margin-top: 12px;
  margin-bottom: 0px;
  font-family: Inter, sans-serif;
  font-size: 28px;
  line-height: 38px;
  font-weight: 400;
`;

const Span = styled.span`
  font-size: 28px;
  font-height: 38px;
  font-weight: 900;
`;

const DescriptionContainer = styled.div`
  margin-top: 12px
`; 

const PrimaryButton = styled.a`
  background-color: black;
  color: white;
  padding: 12px 16px;
  border: 1px solid #1d1e20;
  font-size: 18px;
  border-radius: 6px;
  box-shadow: 0 4px 4px 0 rgb(0 0 0 / 10%);
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    background-color: #1d1e20;
    border: 1px solid #1d1e20;
  }
`;

const SecondaryButton = styled.a`
  background-color: white;
  margin-left: 16px;
  color: black;
  padding: 12px 16px;
  border: 1px solid white;
  font-size: 18px;
  border-radius: 6px;
  box-shadow: 0 4px 4px 0 rgb(0 0 0 / 10%);
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    background-color: #f8f9fc;
    border: 1px solid #f8f9fc;
  }
`;