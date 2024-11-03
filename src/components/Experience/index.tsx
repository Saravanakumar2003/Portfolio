import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useTheme } from 'styled-components';
import {
  VerticalTimeline,
  VerticalTimelineElement
} from 'react-vertical-timeline-component';
import Link from 'next/link';
import { Button } from '../../styles/styles';
import 'react-vertical-timeline-component/style.min.css';
import { Container, Title } from '../../styles/styles';
import { ExperienceContainer, ExperienceContent } from './styles';
import { Briefcase } from 'phosphor-react';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/router';
import experience from '../../data/experiences';

export function Experience() {
  const theme = useTheme();
  const { t, i18n } = useTranslation('common'); // Use the 'common' namespace
  const router = useRouter();
  const [currentLang, setCurrentLang] = useState<'en' | 'ta'>('en');

  useEffect(() => {
    const { locale } = router;
    setCurrentLang(locale as 'en' | 'ta');
  }, [router.locale]);

  useEffect(() => {
  }, [currentLang]);

  return (
    <Container>
      <Title>
        {currentLang === 'ta' ? 'அனுபவம்' : 'Experience'}  
        <span>
          <Briefcase /> {currentLang === 'ta' ? 'வேலை' : 'Works'}
        </span>
      </Title>

      <div>
        <VerticalTimeline lineColor={theme.firstColor}>
          {experience &&
            experience.map(exp => {
              const description = exp.description[currentLang];
              return (
                <VerticalTimelineElement
                  contentStyle={{
                    background: theme.backgroundAlt,
                    borderBottom: `7px solid ${theme.backgroundAlt}`,
                    boxShadow: `0px 5px 0px 0px ${theme.firstColor}`
                  }}
                  contentArrowStyle={{
                    borderRight: `10px solid ${theme.backgroundAlt}`
                  }}
                  date={exp.date}
                  icon={
                    <Image
                      style={{ position: 'relative', width: '100%', height: '100%', borderRadius: '60%' }}
                      width={60}
                      height={60}
                      src={exp.img}
                      alt={exp.title.en} // Default to English
                      loading="lazy"
                    />
                  }
                  iconStyle={{
                    boxShadow: `0px 0px 0px 3px ${theme.firstColor}`,
                    background: theme.backgroundAlt,
                    color: theme.firstColor
                  }}
                  key={exp.id}
                >
                  <ExperienceContainer>
                    <ExperienceContent>
                      <h1>{exp.title[currentLang]}</h1>
                      <h2>{exp.subTitle[currentLang]}</h2>
                      <span>{exp.office[currentLang]}</span>
                      <p>{description ? description.split('\n').map((line, i) => (
                        <span key={i}>
                          {line}
                          <br />
                        </span>
                      )) : t('description_not_available')}</p>
                      <div style={{ display: 'flex', gap: "1rem", marginTop: "1rem", marginBottom: "1rem" }}>
                        <Button>
                          <Link legacyBehavior href={exp.certificate ?? ''}>
                            <a target="_blank">{currentLang === 'ta' ? 'சான்றிதழ்' : 'Certificate'}</a>
                          </Link>
                        </Button>
                        <Button>
                          <Link legacyBehavior href={exp.link2 ?? ''}>
                            <a target="_blank">{currentLang === 'ta' ? 'வலைத்தளம்' : 'Website'}</a>
                          </Link>
                        </Button>
                      </div>
                      <div>
                        <h3>{currentLang === 'ta' ? 'தொழில்நுட்பங்கள்:' : 'Techs:'}</h3>
                        <div className="tag">
                          {exp.tags.map(tag => (
                            <Image style={{ margin: '0.2rem' }}
                              key={tag.name}
                              width={50}
                              height={50}
                              src={tag.icon}
                              alt={tag.name}
                              loading="lazy"
                            />
                          ))}
                        </div>
                      </div>
                    </ExperienceContent>
                  </ExperienceContainer>
                </VerticalTimelineElement>
              );
            })}
        </VerticalTimeline>
      </div>
    </Container>
  );
}