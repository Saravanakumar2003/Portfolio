import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import experiences from '../data/experiences'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { Work } from '../components/Work'
import { ScrollTop } from '../components/ScrollTop'
import { Certificates } from '../components/Certificates'
import { Section, Title, Description } from '../styles/styles'
import { TabButton, TabContent, TabsContainer } from '../styles/experience'
import { Briefcase } from 'phosphor-react'
import works from '../data/experiences'
import { Education } from '../components/Education'

export default function Experience() {
  const [tabIndex, setTabIndex] = useState(0)
  let numbering = 0

  return (
    <div>
      <Head>
        <title>Experience | Saravanakumar </title>
        <meta
          name="description"
          content="My experience"
        />
        <meta property="og:title" content="Experience | Saravanakumar" />
        <meta
          property="og:description"
          content="My experience"
        />
      </Head>

      <Header />
      <ScrollTop />
      <Section>
        <Title>
          <p>../experience</p>
          Experience
          <span>
            <Briefcase /> Work
          </span>
        </Title>

        <Description>
          <p>
            I have been working as a developer for over 2 years. I have worked on many projects, from small to large
            scale, and I have experience working with many different technologies.
          </p>
        </Description>

        <TabsContainer>
          <Tabs
            className="tabs"
            selectedIndex={tabIndex}
            onSelect={index => setTabIndex(index)}
            selectedTabClassName={'is-active'}
            selectedTabPanelClassName={'is-active'}
          >
            <TabButton>
              <TabList className="tab__list">
                {works.map(experience => {
                  if (experience.id) {
                    numbering += 1
                    return (
                      <>
                        <h2 key={experience.id}>
                          {numbering >= 0 && numbering <= 10
                            ? `0${numbering - 1}`
                            : `${numbering - 1}`}
                        </h2>
                        <Tab className="tab">
                          <button>{experience.title}</button>
                        </Tab>
                      </>
                    )
                  }
                })}
              </TabList>
            </TabButton>

            <TabContent>
              {works.map(experience => {
                return (
                  <TabPanel className="tab__panel" key={experience.id}>
                    <div className="title-container">
                      <div className="title-content">
                        <div className="title">
                          <h1>{experience.title}</h1>
                          <div className="sub"></div>
                          <h2>{experience.subTitle}</h2>
                        </div>
                      </div>
                      <div className="office">
                        <h3>{experience.office}</h3>
                        <h4>{experience.date}</h4>
                      </div>
                    </div>
                    <p>{experience.description}</p>
                    <div className="techs">
                      <h3>Techs:</h3>
                      <ul>
                        {experience.tags.map(tag => (
                          <div className="tags" key={tag.name}>
                            <Image
                              width={50}
                              height={50}
                              src={tag.icon}
                              alt={tag.name}
                            />
                            <h4>{tag.name}</h4>
                          </div>
                        ))}
                      </ul>
                    </div>
                  </TabPanel>
                )
              })}
            </TabContent>
          </Tabs>
        </TabsContainer>
        <Education />
        <Work />
        <Certificates />
      </Section>
      <script src="https://cdn.botpress.cloud/webchat/v1/inject.js"></script>
      <script src="https://mediafiles.botpress.cloud/7d24b661-c169-4cd5-9dd2-671b3cb8ec48/webchat/config.js" defer></script>
      <Footer />
    </div>
  )
}
