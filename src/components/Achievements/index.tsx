/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import Link from 'next/link'
import achievements from '../../data/achievements'
import { AchievementsContainer, AchievementsContent } from './styles'
import { Container, Title } from '../../styles/styles'
import { HiOutlineDesktopComputer } from 'react-icons/hi'

interface Achievements {
  slug: string
  url: string
  year: string
  title: string
  type: string
  img: string
}

export function Achievements() {
  return (
    <Container id="Achievements">
      <Title>
      Accolades!
        <span>
          <HiOutlineDesktopComputer />Outstanding
        </span>      
      </Title>
      <AchievementsContainer>
        {achievements.slice(0, 9).map(achievements => {
          return (
            (<Link href={achievements.url} key={achievements.id} passHref>

              <AchievementsContent>
                <div className="title">
                  <h2>{achievements.name}</h2>
                  <h3>{achievements.year}</h3>
                </div>
                <div className="img">
                  <Image
                    src={achievements.image}
                    alt={achievements.name}
                    width={300}
                    height={200}
                  />
                </div>
                <div className="description">
                  <span>{achievements.description}</span>
                </div>              
              </AchievementsContent>

            </Link>)
          );
        })}
      </AchievementsContainer>
    </Container>
  );
}
