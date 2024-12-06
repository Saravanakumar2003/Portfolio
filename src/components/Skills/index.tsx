/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import cardSkills from '../../data/skills'
import { Container, Title } from '../../styles/styles'
import { SkillsContainer, SkillsContent, Vector } from './styles'
import { BsCodeSquare } from 'react-icons/bs'
import { useTranslation } from 'react-i18next'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import React from 'react'

interface Skills {
  title: string,
  color?: string,
  img?: string,
  id: number,
}

export function Skills() {
  const { t, i18n } = useTranslation('common'); // Use the 'common' namespace
  const router = useRouter();
  const [currentLang, setCurrentLang] = useState<'en' | 'ta'>('en');

  useEffect(() => {
    const { locale } = router;
    setCurrentLang(locale as 'en' | 'ta');
  }, [router.locale]);

  return (
    <Container>
      <Vector>
        <div className='js'>
          <Image width={100} height={100} src="/vectors/js.svg" alt="" loading="lazy" />
        </div>
        <div className='html'>
          <Image width={85} height={85} src="/vectors/html.svg" alt="" loading="lazy" />
        </div>
      </Vector>
      <Title>
        {currentLang === 'ta' ? 'திறன்கள்' : 'Skills'}
        <span>
          <BsCodeSquare /> {currentLang === 'ta' ? 'சிறந்தவை' : 'Top'}
        </span>
      </Title>
      <SkillsContainer>
        {cardSkills.map(skill => {
          return (
            <SkillsContent color={skill.color} key={skill.id}>
              {/* eslint-disable-next-line jsx-a11y/alt-text */}
              <Image
                width={60}
                height={60} 
                src={skill.img} 
                alt={skill.title[currentLang]}
                loading='lazy'
              />
              <h4>{skill.title[currentLang]}</h4>
              <span className='border'></span>
            </SkillsContent>
          )
        })}
      </SkillsContainer>
    </Container>
  )
}