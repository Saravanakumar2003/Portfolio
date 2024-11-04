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
import { Section, Title, Description, Button } from '../styles/styles'
import { TabButton, TabContent, TabsContainer } from '../styles/experience'
import { Briefcase } from 'phosphor-react'
import works from '../data/experiences'
import { Education } from '../components/Education'
import Link from 'next/link'
import Testimonials from '../components/Testimonials'
import { useTranslation } from 'react-i18next'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import React from 'react'

const botkey = process.env.NEXT_PUBLIC_BOTKEY_URL;

export default function Experience() {
  const [tabIndex, setTabIndex] = useState(0);
  let numbering = 0;

  const [query, setQuery] = useState("");
  const { t, i18n } = useTranslation('common');
  const router = useRouter();
  const [currentLang, setCurrentLang] = useState<'en' | 'ta'>('en');

  useEffect(() => {
    const { locale } = router;
    setCurrentLang(locale as 'en' | 'ta');
  }, [router.locale]);

  return (
    <div>
      <Head>
        <title>{currentLang === 'ta' ? 'அனுபவம் | சரவணகுமார்' : 'Experience | Saravanakumar'}</title>
      </Head>

      <ScrollTop />
      <Section>
        <Title>
          <p>../{currentLang === 'ta' ? 'அனுபவம்' : 'experience'}</p>
          {currentLang === 'ta' ? 'அனுபவம்' : 'Experience'}
          <span>
            <Briefcase /> {currentLang === 'ta' ? 'வேலை' : 'Work'}
          </span>
        </Title>

        <Description>
          <p>
            {currentLang === 'ta' ? 'நான் 2 ஆண்டுகளுக்கும் மேலாக டெவலப்பராக பணியாற்றி வருகிறேன். நான் சிறிய அளவிலிருந்து பெரிய அளவிலான பல திட்டங்களில் பணியாற்றியுள்ளேன், மேலும் பல்வேறு தொழில்நுட்பங்களுடன் பணியாற்றும் அனுபவம் எனக்கு உள்ளது.' : 'I have been working as a developer for over 2 years. I have worked on many projects, from small to large scale, and I have experience working with many different technologies.'}
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
                {works &&
                  works.map(exp => {
                    const description = exp.description[currentLang];
                    if (exp.id) {
                      numbering += 1;
                      return (
                        <React.Fragment key={exp.id}>
                          <h2>
                            {numbering >= 0 && numbering <= 10
                              ? `0${numbering - 1}`
                              : `${numbering - 1}`}
                          </h2>
                          <Tab className="tab">
                            <button>{exp.title[currentLang]}</button>
                          </Tab>
                        </React.Fragment>
                      );
                    }
                    return null;
                  })}
              </TabList>
            </TabButton>
            <TabContent>
                {works.map(exp => (
                  <TabPanel className="tab__panel" key={exp.id}>
                    <div className="title-container">
                      <div className="title-content">
                        <div className="title">
                          <h1>{exp.title[currentLang]}</h1>
                          <div className="sub"></div>
                          <h2>{exp.subTitle[currentLang]}</h2>
                        </div>
                      </div>
                      <div className="office">
                        <h3>{exp.office[currentLang]}</h3>
                        <h4>{exp.date}</h4>
                      </div>
                    </div>
                    <p
                      style={{
                        marginTop: '1rem',
                        textAlign: 'justify',
                        marginBottom: '1rem'
                      }}
                    >
                      {exp.description[currentLang] ? exp.description[currentLang].split('\n').map((line, i) => (
                        <React.Fragment key={i}>
                          {line}
                          <br />
                        </React.Fragment>
                      )) : 'Description not available'}
                    </p>
                    <div
                      style={{
                        marginTop: '1rem',
                        marginBottom: '1rem'
                      }}
                      className="links"
                    >
                      <a href={exp.link} target="_blank" rel="noreferrer">
                        <Button>{currentLang === 'ta' ? 'அறிக்கையைப் பார்க்கவும்' : 'View Report'}</Button>
                      </a>
                    </div>

                    <div className="techs">
                      <h3>{currentLang === 'ta' ? 'தொழில்நுட்பங்கள்:' : 'Techs:'}</h3>
                      <ul>
                        {exp.tags.map(tag => (
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
                ))}
            </TabContent>
          </Tabs>
        </TabsContainer>
        <Work />
        <Testimonials />
        <Education />
        <Certificates />
      </Section>
      <script src="https://cdn.botpress.cloud/webchat/v1/inject.js"></script>
      <script src={botkey} defer></script>
      <Footer />
    </div>
  );
}