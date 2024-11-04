/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import Link from 'next/link'
import achievements from '../../data/achievements'
import { AchievementsContainer, AchievementsContent } from './styles'
import { Container, Title } from '../../styles/styles'
import { HiOutlineDesktopComputer } from 'react-icons/hi'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Key } from 'react'
import { useTranslation } from 'react-i18next'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

interface Achievements {
  url: string
  year: string
  title: string
  type: string
  img: any[]
}

export function Achievements() {
  const { t, i18n } = useTranslation('common');
  const router = useRouter();
  const [currentLang, setCurrentLang] = useState<'en' | 'ta'>('en');

  useEffect(() => {
    const { locale } = router;
    setCurrentLang(locale as 'en' | 'ta');
  }, [router.locale]);

  return (
    <Container>
      <Title style={{ marginBottom: '3rem' }}>
        {currentLang === 'ta' ? 'விருதுகள்!' : 'Accolades!'}
        <span>
          <HiOutlineDesktopComputer />{currentLang === 'ta' ? 'சிறந்த' : 'Outstanding'}
        </span>      
      </Title>
      <AchievementsContainer>
        {achievements.slice(0, 9).map(achievements => {
          return (
            <AchievementsContent>
              <div className="title">
                <h2>{achievements.name[currentLang]}</h2>
                <h1>{achievements.year[currentLang]}</h1>
                <h3>
                  <Link href={achievements.url} target="_blank">
                    {currentLang === 'ta' ? 'சான்றிதழைப் பார்க்கவும்' : 'View the Certificate'}
                  </Link>
                </h3>
                <span>{currentLang === 'ta' ? 'பரிசு:' : 'Prize:'} {achievements.prize[currentLang]}</span>
              </div>
              <div className="image">
                <Carousel showArrows={true} showThumbs={false} infiniteLoop={true} showStatus={true} showIndicators={true} autoPlay={true} transitionTime={1000}>
                  {achievements.image.map((image: any, index: Key | null | undefined) => (
                    <div key={index}>
                      <Image src={image} alt={achievements.name[currentLang]} width={300} height={300} loading="lazy"/>
                    </div>
                  ))}
                </Carousel>
              </div>
              <div className="description">
                <span>{achievements.description[currentLang]}</span>
              </div>              
            </AchievementsContent>
          );
        })}
      </AchievementsContainer>
    </Container>
  );
}