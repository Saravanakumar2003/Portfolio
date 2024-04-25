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

interface Achievements {
  slug: string
  url: string
  year: string
  title: string
  type: string
  img: any[]
}

export function Achievements() {
  return (
    <Container>
      <Title>
      Accolades!
        <span>
          <HiOutlineDesktopComputer />Outstanding
        </span>      
      </Title>
      <AchievementsContainer>
        {achievements.slice(0, 9).map(achievements => {
          return (
              <AchievementsContent>
                <div className="title">
                  <h2>{achievements.name}</h2>
                  <h1>{achievements.year}</h1>
                  <h3>
                      <Link href={achievements.url} target="_blank">
                      View the Certificate
                      </Link>
                  </h3>
                  <span>Prize: {achievements.prize}</span>
                </div>
                <div className="image">
                  <Carousel showArrows={true} showThumbs={false} infiniteLoop={true} showStatus={true} showIndicators={true} autoPlay={true} transitionTime={1000}>
                    {achievements.image.map((image: any, index: Key | null | undefined) => (
                      <div key={index}>
                        <Image src={image} alt={achievements.name} width={300} height={300} />
                      </div>
                    ))}
                  </Carousel>
                </div>
                <div className="description">
                  <span>{achievements.description}</span>
                </div>              
              </AchievementsContent>
          );
        })}
      </AchievementsContainer>
    </Container>
  );
}
