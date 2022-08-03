import React from 'react'
import styled from '@emotion/styled'
import ExperienceHeader from './ExperienceHeader'
import ExperienceDescription from './ExperienceDescription'

function Experience(experience) {
  return (
    <section id={experience.experiences.key}>
    <ExperienceContainer >
      <ExperienceHeader data={experience.experiences} />
      <Date>{experience.experiences.startingDate} - {experience.experiences.finishedDate}</Date>
      <ExperienceDescription data={experience.experiences} />
    </ExperienceContainer>
    </section>
  )
}

export default Experience

const ExperienceContainer = styled.div`
  max-width: 812px;
  margin-right: auto;
  margin-left: auto;
  margin-top: 100px;
`;

const Date = styled.h1`
  max-width: 558px;
  margin-right: auto;
  margin-bottom: 16px;
  margin-left: auto;
  font-family: 'Roboto Mono', sans-serif;
  color: #868686;
  font-size: 12px;
  line-height: 16px;
  font-weight: 400;
  will-change: opacity;
  opacity: 1;
`;
