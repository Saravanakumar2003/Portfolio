/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Typewriter from 'typewriter-effect'
import { ButtonPrimary, Container } from '../../styles/styles'
import { Content, ImgHome, HomeText } from './styles'
import { FiArrowRight } from 'react-icons/fi'

export function HomeHero() {
  return (
    <Container>
      <Content>
        <HomeText>
          <p>
            <span>👋🏻</span> Hello, my name is
          </p>
          <h1>
            Saravanakumar R
            <span className="animation">
              <Image
                width={200}
                height={200}
                src="/vectors/triangle.svg"
                alt="triangle"
              />
            </span>
          </h1>
          <h2>
            <Typewriter
              options={{
                strings: ['Developer | Speaker | Volunteer'].map(str => str.replace('and', 'e')),
                autoStart: true,
                loop: true,
              }}
            />
          </h2>

          <div className="button">
            <Link href={'#projects'}>
              <ButtonPrimary>
                  <b>See my Portfolio</b>
                  <FiArrowRight style={{ marginBottom: '-0.3rem' }} size={20} />
              </ButtonPrimary>
            </Link>
          </div>
        </HomeText>
        <ImgHome>
          <img className="home-img" src="/home.png" alt="Imagem da Home" />

          <div className="code">
            <Image
              width={150}
              height={150}
              src="/vectors/dino.svg"
              alt="dinossauro"
            />
          </div>
        </ImgHome>
      </Content>
    </Container>
  )
}
