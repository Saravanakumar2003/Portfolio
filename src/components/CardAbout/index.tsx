import Image from 'next/image'
import Link from 'next/link'
import { Button, Container, ButtonAlternatives } from '../../styles/styles'
import { AboutContainer } from './styles'
import { ArrowRight, TelegramLogo } from 'phosphor-react'

export function About() {
  return (
    <Container>
      <AboutContainer>
        <div className="AboutImg">
          <Image
            width={200}
            height={200}
            className="AboutImg"
            src="/Professional_edited.jpg"
            alt="Saravana's Image"
          />
        </div>

        <div className="aboutContent">
          <div className="aboutDescription">
            <h2>Little About Me!!</h2>
            <li>
            A proud student of Velammal Engineering College, where I am pursuing a 
            Bachelors degree in Electronics and Communication Engineering and 
            building a solid foundation in technology.
            </li> <li>
            I am also an avid game developer, enthusiastic volunteer, and public speaker, 
            and I love exploring new opportunities and avenues.
            </li>

          </div>

          <div className='aboutButton'>
            <Link href={'/resume'}>

              <Button>
                Resume
                <TelegramLogo
                  style={{
                    marginBottom: '-0.1rem',
                    marginLeft: '0.2rem',
                  }}
                  size={16}
                  weight="bold"
                />
              </Button>

            </Link>
            <Link href={'/about'}>

              <ButtonAlternatives>
                Read more
                <ArrowRight
                  style={{
                    marginBottom: '-0.1rem',
                    marginLeft: '0.2rem'
                  }}
                  weight="bold"
                  size={16}
                />
              </ButtonAlternatives>

            </Link>
          </div>
        </div>
      </AboutContainer>
    </Container>
  );
}
