import styled from '@emotion/styled'
import { css } from '@emotion/css'
import Cover from './Cover';
import Experience from './Experience/Experience';
import Footer from './Footer'

import logoFetcher from "./assets/fetcherLogo.png"
import pageFetcher from "./assets/fetcherPage.png"
import logoLounge from "./assets/loungeLogo.png"
import pageLounge from "./assets/loungeApp.png"
import logoSkillshare from './assets/SkillshareLogo.png'
import pageSkillshare from './assets/SkillshareScreen.png'
import { BrowserRouter } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';


function App() {

  const experiencesData = [
    {
      logo: logoFetcher,
      name: "Fetcher",
      stack: "ReactJs, Javascript, NodeJs, Storybook, Ant Design, React Query",
      description: "Fetcher’s mission is to connect companies with the people who will help them change the world. Our sourcing automation platform, combined with our internal team of experts, empowers recruiters and TA leaders to be the best that they can be. /. Working close with designers and engineering team to create new features, update legacy code and support customers.",
      startingDate: "May 2021",
      finishedDate: "Feb 2022",
      picture: pageFetcher,
      url: "https://fetcher.ai/",
      key: "fetcher"
    },
    {
      logo: logoLounge,
      name: "Lounge HQ",
      stack: "ReactJs, Javascript, NodeJs, Material-UI, Firebase, Google Cloud",
      description: "Lounge HQ is a team communication startup that aims to communicate more about the person, like their timezone, weather, location, team, and their participation in company events — like a steps or meditation challenge. /. Directly collaborated with CEO and product team to create a web page that serves as a launch platform for the desktop application, also the creation and implementation of a waitlist feature that serves as a bridge for the users and the Desktop App",
      startingDate: "Dec 2020",
      finishedDate: "Feb 2021",
      picture: pageLounge,
      url: "https://fetcher.ai/",
      key: "lounge"
    },
    {
      logo: logoSkillshare,
      name: "Skillshare",
      stack: "ReactJs, Javascript, NodeJs, Storybook, Graphql, AWS, VideoJs",
      description: "Skillshare is an online learning community with thousands of classes for creative and curious people, on topics including illustration, design, photography, video, freelancing, and more. /. Skillshare Experiences is a platform that creates a closer and more accessible Teacher-Student relationship, by providing features like, real-time understanding ranting, communications features, and realtime metrics.",
      startingDate: "Dec 2020",
      finishedDate: "Feb 2021",
      picture: pageSkillshare,
      url: "https://fetcher.ai/",
      key: "skillshare"
    },
  ]
  return (
    <PageContainer>
      <BrowserRouter>
        <Navigation>
          <HashLink smooth to="#skillshare" className={skillshare}>
            <img src={logoSkillshare} width='32px' height='32px' loading='lazy' alt='fethcer-logo' className={imgStyle}  />
          </HashLink>
          <HashLink smooth to="#lounge" className={lounge}>
            <img src={logoLounge} width='32px' height='32px' loading='lazy' alt='fethcer-logo' className={imgStyle}  />
          </HashLink>
          <HashLink smooth to="#fetcher" className={fetcher}>
            <img src={logoFetcher} width='32px' height='32px' loading='lazy' alt='fethcer-logo' className={imgStyle} />
          </HashLink>
        </Navigation>
        <Cover />
        {experiencesData && experiencesData.map((experience, index) => {
          return(
            <div key={index}>  
              <Experience experiences={experience}  />
            </div>
          )} 
          )}
        </BrowserRouter>
        <Footer/>
    </PageContainer>
  );
}

export default App;

const PageContainer = styled.div`
  max-width: 800px; 
  margin: 0 auto !important; 
  float: none !important; 
  backgroundColor: #fbfbfb
`;

const Navigation = styled.div`
  margin-top: 300px;
  max-width: 558px;
  margin-right: auto;
  margin-left: auto;
  position: relative;
  display:flex;
`
const imgStyle = css`
  position: relative;
  top: 0px;
  width: 32px;
  height: 32px;
  border-radius: 8px;
  background-color: white;
  border: #f5f5f5 solid 1px; 
  box-shadow: 0 0 0 1px #fbfbfb;
  -webkit-transition: all 160ms cubic-bezier(.398, .003, .111, .997);
  transition: all 160ms cubic-bezier(.398, .003, .111, .997);
  &:hover {
    top: -3px;
  }
`
const fetcher = css`
  position: absolute;
  display: block;
`
const lounge = css`
position: absolute;
left: 24px;
display: block;
`
const skillshare = css`
position: absolute;
left: 48px;
display: block;
`
