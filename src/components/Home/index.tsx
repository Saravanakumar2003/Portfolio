/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Typewriter from 'typewriter-effect'
import { Button, ButtonPrimary, Container } from '../../styles/styles'
import { Content, ImgHome, HomeText } from './styles'
import { FiArrowRight } from 'react-icons/fi'
import { useState } from 'react';
import Modal from 'react-modal';
import { useTranslation } from 'react-i18next';

Modal.setAppElement('#__next');

export function HomeHero() {
  const { t } = useTranslation('common');
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function openModal() {
    setModalIsOpen(true);
  }

  function closeModal() {
    setModalIsOpen(false);
  }

  function handleContinue() {
    window.location.href = "https://storyofsaravana.vercel.app/";
  }

  return (
    <Container>
      <Content>
        <HomeText>
          <p>
            <span>👋🏻</span> {t('Hello, my name is')}
          </p>
          <h1>
            {t('title')}  
            <span className="animation">
              <Image
                width={200}
                height={200}
                src="/vectors/triangle.svg"
                alt="triangle"
                loading='lazy'
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
            <ButtonPrimary onClick={openModal}>
              <b>See my Story</b>
              <FiArrowRight style={{ marginBottom: '-0.3rem' }} size={20} />
            </ButtonPrimary>

            <Modal
              isOpen={modalIsOpen}
              onRequestClose={closeModal}
              contentLabel="Example Modal"
              style={{
                overlay: {
                  backgroundColor: 'rgba(0, 0, 0, 0.75)', // semi-transparent black
                },
                content: {
                  alignContent: 'center',
                  color: 'lightsteelblue',
                  top: '50%',
                  left: '50%',
                  right: 'auto',
                  bottom: 'auto',
                  marginRight: '-50%',
                  transform: 'translate(-50%, -50%)',
                  backgroundColor: '#fff',
                  borderRadius: '10px', 
                  padding: '20px',
                },
              }}
            >
              <h2 style={{
                color: 'black',
                textAlign: 'center',
                fontSize: '1.5rem',
              }}>Story of Saravanakumar</h2>
              <p style={{
                marginTop: '1rem',
                color: 'black',
                textAlign: 'center',
                fontSize: '1rem',
              }}>Continue only if you are in computer.</p>
              <p style={{
                color: 'black',
                textAlign: 'center',
                fontSize: '1rem',
              }}>If you are on phone the page may not load properly,</p>
              <p style={{
                color: 'black',
                textAlign: 'center',
                fontSize: '1rem',
              }}>and several animations may not appear.</p>
              <p style={{
                marginTop: '1rem',
                color: 'black',
                textAlign: 'center',
                fontSize: '1rem',
                fontWeight: 'bold',
              }}>Do you want to continue?</p>
              <div style={{
                display: 'flex',
                justifyContent: 'center',
              }}>
              <Button style={{
                display: 'inline-block',
                alignContent: 'center',
                marginTop: '1rem',
                marginRight: '1rem',
                backgroundColor: 'red',
                color: 'white',
                border: 'none',
                padding: '0.5rem 1rem',
                borderRadius: '5px',
              }} onClick={closeModal}>Close</Button>
              <Button style={{
                display: 'inline-block',
                alignSelf: 'center',
                marginTop: '1rem',
                marginRight: '1rem',
                backgroundColor: 'green',
                color: 'white',
                border: 'none',
                padding: '0.5rem 1rem',
                borderRadius: '5px',
              }} onClick={handleContinue}>Continue</Button>
              </div>
            </Modal>
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
              loading="lazy"
            />
          </div>
        </ImgHome>
      </Content>
    </Container>
  )
}
