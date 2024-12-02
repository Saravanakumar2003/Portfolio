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
import { useRouter } from 'next/router';
import { useEffect } from 'react';

Modal.setAppElement('#__next');

export function HomeHero() {
  const { t } = useTranslation('common');
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const router = useRouter();
  const [currentLang, setCurrentLang] = useState<'en' | 'ta'>('en');

  useEffect(() => {
    const { locale } = router;
    setCurrentLang(locale as 'en' | 'ta');
  }, [router.locale]);

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
            <span>👋🏻</span> {currentLang === 'ta' ? 'வணக்கம், எனது பெயர்' : 'Hello, my name is'}
          </p>
          <h1>
            {currentLang === 'ta' ? 'சரவணகுமார் ரா' : 'Saravanakumar R'}  
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
                strings: [currentLang === 'ta' ? 'டெவலப்பர் | பேச்சாளர் | தன்னார்வலர்' : 'Developer | Speaker | Volunteer'],
                autoStart: true,
                loop: true,
              }}
            />
          </h2>

          <div className="button">
            <ButtonPrimary onClick={openModal}>
              <b>{currentLang === 'ta' ? 'எனது கதையைப் பார்க்கவும்' : 'See my Story'}</b>
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
              {/* <h2 style={{
                color: 'black',
                textAlign: 'center',
                fontSize: '1.5rem',
              }}>{currentLang === 'ta' ? 'சரவணகுமாரின் கதை' : 'Story of Saravanakumar'}</h2>
              <p style={{
                marginTop: '1rem',
                color: 'black',
                textAlign: 'center',
                fontSize: '1rem',
              }}>{currentLang === 'ta' ? 'நீங்கள் கணினியில் இருந்தால் மட்டுமே தொடரவும்.' : 'Continue only if you are on a computer.'}</p>
              <p style={{
                color: 'black',
                textAlign: 'center',
                fontSize: '1rem',
              }}>{currentLang === 'ta' ? 'நீங்கள் தொலைபேசியில் இருந்தால், பக்கம் சரியாக ஏற்றப்படாது,' : 'If you are on a phone, the page may not load properly,'}</p>
              <p style={{
                color: 'black',
                textAlign: 'center',
                fontSize: '1rem',
              }}>{currentLang === 'ta' ? 'மற்றும் பல அனிமேஷன்கள் தோன்றாது.' : 'and several animations may not appear.'}</p>
              <p style={{
                marginTop: '1rem',
                color: 'black',
                textAlign: 'center',
                fontSize: '1rem',
                fontWeight: 'bold',
              }}>{currentLang === 'ta' ? 'நீங்கள் தொடர விரும்புகிறீர்களா?' : 'Do you want to continue?'}</p> */}
                            <p style={{
                marginTop: '1rem',
                color: 'black',
                textAlign: 'center',
                fontSize: '1rem',
                fontWeight: 'bold',
              }}>{currentLang === 'ta' ? 'தற்போது பராமரிப்பில் உள்ளது. விரைவில் கிடைக்கும்!!' : 'Currently in maintenance. It will be available soon!!'}</p>
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
              }} onClick={closeModal}>{currentLang === 'ta' ? 'மூடு' : 'Close'}</Button>
              {/* <Button style={{
                display: 'inline-block',
                alignSelf: 'center',
                marginTop: '1rem',
                marginRight: '1rem',
                backgroundColor: 'green',
                color: 'white',
                border: 'none',
                padding: '0.5rem 1rem',
                borderRadius: '5px',
              }} onClick={handleContinue}>{currentLang === 'ta' ? 'தொடரவும்' : 'Continue'}</Button> */}
              </div>
            </Modal>
          </div>
        </HomeText>
        <ImgHome>
          <img className="home-img" src="/home.png" alt={currentLang === 'ta' ? 'முகப்பு படம்' : 'Image Home'} />

          <div className="code">
            <Image
              width={150}
              height={150}
              src="/vectors/dino.svg"
              alt="dino"
              loading="lazy"
            />
          </div>
        </ImgHome>
      </Content>
    </Container>
  )
}