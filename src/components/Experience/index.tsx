import Image from 'next/image'
import { useTheme } from 'styled-components'
import {
  VerticalTimeline,
  VerticalTimelineElement
} from 'react-vertical-timeline-component'
import Link from 'next/link'
import { Button } from '../../styles/styles'
import 'react-vertical-timeline-component/style.min.css'
import { Container, Title } from '../../styles/styles'
import { ExperienceContainer, ExperienceContent } from './styles'
import { Briefcase } from 'phosphor-react'
import experience from '../../data/experiences'

export function Experience() {
  const theme = useTheme()

  return (
    <Container>
      <Title>
      Experience
        <span>
          <Briefcase /> Work 
        </span>
      </Title>

      <div>
        <VerticalTimeline lineColor={theme.firstColor}>
          {experience &&
            experience.map(experience => {
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
                  date={experience.date}
                  icon={
                    <Image
                      style={{ position: 'relative', width: '100%', height: '100%', borderRadius: '60%' }}
                      width={60}
                      height={60}
                      src={experience.img}
                      alt={experience.title}
                    />
                  }
                  iconStyle={{
                    boxShadow: `0px 0px 0px 3px ${theme.firstColor}`,
                    background: theme.backgroundAlt,
                    color: theme.firstColor
                  }}
                  key={experience.id}
                >
                  <ExperienceContainer>
                    <ExperienceContent>
                      <h1>{experience.title}</h1>
                      <h2>{experience.subTitle}</h2>
                      <span>{experience.office}</span>
                      <p>{experience.description.split('\n').map((line, i) => (
                      <a key={i}>
                        {line}
                          <br />
                           </a>
                      ))}</p>
                       <div style={{ display: 'flex', gap:"1rem", marginTop:"1rem", marginBottom:"1rem" }}>
                        <Button>
                          <Link legacyBehavior href={experience.certificate ?? ''}>
                            <a target="_blank">Certificate</a>
                          </Link>
                        </Button>
                        <Button>
                          <Link legacyBehavior href={experience.link2 ?? ''}>
                            <a target="_blank">Website</a>
                          </Link>
                        </Button>
                      </div>
                      <div>
                        <h3>Techs:</h3>
                        <div className="tag">
                          {experience.tags.map(tag => (
                            <Image style={{ margin: '0.2rem'}}
                              key={tag.name}
                              width={50}
                              height={50}
                              src={tag.icon}
                              alt={tag.name}
                            />
                          ))} 
                        </div>
                      </div>
                    </ExperienceContent>
                  </ExperienceContainer>
                </VerticalTimelineElement>
              )
            })}
        </VerticalTimeline>
      </div>
    </Container>
  )
}
