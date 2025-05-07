/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Typewriter from 'typewriter-effect'
import { Button, ButtonPrimary, Container } from '../../styles/styles'
import { Content, ImgHome, HomeText, Card, Announcement, Logo, Box } from './styles'
import { FiArrowRight } from 'react-icons/fi'
import { useState } from 'react';
import Modal from 'react-modal';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useRef } from 'react';
import * as htmlToImage from 'html-to-image';
import Confetti from 'react-confetti';

Modal.setAppElement('#__next');

export function HomeHero() {
  const { t } = useTranslation('common');
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalIsOpen2, setModalIsOpen2] = useState(false);
  const [userName, setUserName] = useState('');
  const [date, setDate] = useState('');
  const [showConfetti, setShowConfetti] = useState(false);
  const [showCard, setShowCard] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const [currentLang, setCurrentLang] = useState<'en' | 'ta'>('en');
  const router = useRouter();

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

  function openModal2() {
    setModalIsOpen2(true);
  }

  useEffect(() => {
    // Fetch the current date using JavaScript's built-in Date object
    const currentDate = new Date().toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
    setDate(currentDate);
  }, []);

  function closeModal2() {
    setModalIsOpen2(false);
  }

  function handleGenerate() {
    if (userName.trim() === '') {
      alert('Please enter a name!');
      return;
    }

    setShowCard(true);

    // Trigger confetti
    setShowConfetti(true);

    // Stop confetti after 3 seconds
    setTimeout(() => {
      setShowConfetti(false);
    }, 10000);
  }

  async function downloadCard() {
    if (cardRef.current) {
      try {
        const dataUrl = await htmlToImage.toPng(cardRef.current); // Convert the card to PNG
        const link = document.createElement('a');
        link.href = dataUrl;
        link.download = 'business-card.png'; // Set the download filename
        link.click(); // Trigger the download
      } catch (error) {
        console.error('Failed to generate the business card image:', error);
      }
    }
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
              <b>{currentLang === 'ta' ? 'எனது கதையைப் பார்க்கவும்' : 'See my story'}</b>
              <FiArrowRight style={{ marginBottom: '-0.3rem' }} size={20} />
            </ButtonPrimary>

            <Modal
              isOpen={modalIsOpen}
              onRequestClose={closeModal}
              contentLabel="Info Modal"
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

            <ButtonPrimary onClick={openModal2}>
              <b>{currentLang === 'ta' ? 'அட்டை உருவாக்கவும்' : 'Generate your card'}</b>
              <FiArrowRight style={{ marginBottom: '-0.3rem' }} size={20} />
            </ButtonPrimary>

            <Modal
              isOpen={modalIsOpen2}
              onRequestClose={closeModal2}
              contentLabel="Card Modal"
              style={{
                overlay: {
                  backgroundColor: 'rgba(0, 0, 0, 0.75)',
                },
                content: {
                  top: '50%',
                  left: '50%',
                  right: 'auto',
                  bottom: 'auto',
                  marginRight: '-50%',
                  transform: 'translate(-50%, -50%)',
                  backgroundColor: '#fff',
                  borderRadius: '10px',
                  padding: '20px',
                  width: '90%', // Adjust width for responsiveness
                  maxWidth: '600px', // Limit the maximum width
                  height: 'auto',
                },
              }}
            >
              <h2 style={{ textAlign: 'center', color: 'black' }}>
                {currentLang === 'ta' ? 'அட்டை உருவாக்கவும்' : 'Generate Card'}
              </h2>
              <input
                type="text"
                placeholder={currentLang === 'ta' ? 'உங்கள் பெயரை உள்ளிடவும்' : 'Enter your name'}
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                style={{
                  width: '100%',
                  padding: '10px',
                  margin: '10px 0',
                  borderRadius: '5px',
                  border: '1px solid #ccc',
                }}
              />
              <Button
                onClick={handleGenerate}
                style={{
                  marginBottom: '10px',
                  backgroundColor: 'blue',
                  padding: '10px 20px',
                  borderRadius: '5px',
                  color: 'white',
                  margin: '0 auto',
                }}
              >
                Generate
              </Button>
              <div
                ref={cardRef}
                style={{
                  width: '100%',
                  maxWidth: '600px',
                  height: 'auto',
                  aspectRatio: '3 / 2',
                  margin: '20px auto',
                  padding: '20px',
                  border: '1px solid #000',
                  borderRadius: '10px',
                  textAlign: 'center',
                  backgroundColor: '#f9f9f9',
                }}
              >
                {showCard && (
                  <Box>
                    <Card>
                      <header>
                        <span>{date || 'Loading...'}</span>
                        <Logo>
                          <Image
                            width={50}
                            height={50}
                            src="/Logo1.png"
                            alt="logo"
                            loading="lazy"
                          />
                        </Logo>
                        <span>DEV CARD</span>
                      </header>
                      <Announcement>
                        <h3>Yo! </h3>
                        <h1>{userName || 'Error'}</h1>
                        <h3 className="italic">thanks for stopping by my world</h3>
                      </Announcement>
                      <span>www.saravanakumar.engineer</span>
                    </Card>
                  </Box>
                )}
              </div>
              <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'row' }}>
                <Button onClick={downloadCard} style={{
                  marginBottom: '10px',
                  backgroundColor: 'blue',
                  padding: '10px 20px',
                  borderRadius: '5px',
                  margin: '0 auto',
                  color: 'white',
                }}>
                  {currentLang === 'ta' ? 'பதிவிறக்கவும்' : 'Download'}
                </Button>
                <Button
                  onClick={closeModal2}
                  style={{
                    marginTop: '10px',
                    paddingTop: '10px',
                    backgroundColor: 'red',
                    padding: '10px 20px',
                    borderRadius: '5px',
                    margin: '0 auto',
                    color: 'white',
                  }}
                >
                  {currentLang === 'ta' ? 'மூடு' : 'Close'}
                </Button>
              </div>
            </Modal>
          </div>
        </HomeText>

        {showConfetti && (
          <Confetti
            width={window.innerWidth}
            height={window.innerHeight}
            numberOfPieces={250} 
            gravity={0.5}
            wind={0.05}
          />
        )}
        <ImgHome>
          <img className="home-img" src="/home.png" alt={currentLang === 'ta' ? 'முகப்பு படம்' : 'Image Home'} />

          <div className="code">
            <Image
              width={150}
              height={50}
              src="/vectors/dino.svg"
              alt="dino"
              loading="lazy"
            />
          </div>
        </ImgHome>

      </Content >
    </Container >
  )
}