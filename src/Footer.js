import React from 'react'
import styled from '@emotion/styled'

function Footer() {
  return (
    <FooterContainer>
        <A href='https://twitter.com/luiscode92'> By luiscode92.</A>
        <Contact>
           {/**
            * <Cv>
                <A href="https://read.cv/eike">Read.cv</A>
            </Cv>
            */} 
            <Cv>
                <A href="https://www.linkedin.com/in/luiscode92/">LinkedIn</A>
            </Cv>
        </Contact>
    </FooterContainer>
  )
}

export default Footer

const FooterContainer =styled.div`
    display: flex;
    max-width: 558px;
    margin-top: 80px;
    margin-bottom: 80px;
    margin-right: auto;
    margin-left: auto;
    padding-right: 0px;
    padding-left: 0px;
    flex-direction: row;
    justify-content: space-between;
    align-items: stretch;
    font-family: Inter, sans-serif;
    color: #727272;
`;

const Contact = styled.div`
    display: flex;
    grid-column-gap: 32px;
    grid-row-gap: 32px;
`

const Cv = styled.div`
    &;hover{
        background-color: red;
    }
`;

const A = styled.a`
    color: #727272;
    text-decoration: none;
    cursor: pointer;
    font-size: 14px;
    font-weight: 400;
`