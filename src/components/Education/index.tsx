import Image from 'next/image'
import { useTheme } from 'styled-components'
import education from '../../data/education'
import {
  VerticalTimeline,
  VerticalTimelineElement
} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import { Button, Container, Title } from '../../styles/styles'
import { EducationContainer, EducationContent } from './styles'
import { Books } from 'phosphor-react'
import Link from "next/link";
import { useState } from 'react'
 
export interface EducationProps {
  target: HTMLInputElement
}

export function Education() {
  const [query, setQuery] = useState("");

  const handleChange = (e: EducationProps) => {
    setQuery(e.target.value);
  };

  const theme = useTheme()

  return (
    <Container>
      <Title>
        History
        <span>
          <Books /> Academic
        </span>
      </Title>

      <div>
        <VerticalTimeline lineColor={theme.firstColor}>
          {education &&
            education.map(education => {
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
                  date={education.date}
                  icon={
                    <Image
                      style={{ position: 'relative', width: '100%', height: '100%', borderRadius: '60%' }}
                      width={60}
                      height={60}
                      src={education.img}
                      alt={education.title}
                    />
                  }
                  iconStyle={{
                    boxShadow: `0px 0px 0px 3px ${theme.firstColor}`,
                    background: theme.backgroundAlt,
                    color: theme.firstColor
                  }}
                  key={education.id}
                >
                  <EducationContainer>
                    <EducationContent>
                      <h1>{education.title}</h1>
                      <h2>{education.subTitle}</h2>
                      <span>{education.office}</span>
                      <p>{education.description.split('\n').map((line, i) => (
                      <a key={i}>
                        {line}
                          <br />
                           </a>
                      ))}</p>
                      <Button>
                        <Link legacyBehavior href={education.link}>
                          <a target="_blank">Website</a>
                        </Link>
                    </Button>
                    <Button>
                        <Link legacyBehavior href={education.link}>
                          <a target="_blank">Website</a>
                        </Link>
                    </Button>

                    </EducationContent>
                  </EducationContainer>
                </VerticalTimelineElement>
              )
            })}
        </VerticalTimeline>
      </div>
    </Container>
  )
}
