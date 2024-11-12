import React, { useEffect, useState } from 'react';
import { ChatCenteredText } from 'phosphor-react';
import { Container, Title } from '../../styles/styles';
import Link from 'next/link'
import { ButtonAlt, Section } from '../../styles/styles'
import { Heart } from 'phosphor-react'
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/router';

const testimonial = process.env.NEXT_PUBLIC_TESTIMONIAL_URL;

export function Testimonials() {
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  const { t, i18n } = useTranslation('common');
  const router = useRouter();
  const [currentLang, setCurrentLang] = useState<'en' | 'ta'>('en');

  useEffect(() => {
    const { locale } = router;
    setCurrentLang(locale as 'en' | 'ta');
  }, [router.locale]);

  useEffect(() => {
    setIsLargeScreen(window.innerWidth > 768);
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://testimonial.to/js/iframeResizer.min.js';
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <Container>
      <Title>
        {currentLang === 'ta' ? 'மக்கள் என்ன சொல்கிறார்கள்' : 'What people say'}
        <span>
          <ChatCenteredText />{currentLang === 'ta' ? 'சான்றுகள்' : 'Testimonials'}
        </span>
      </Title>
      <iframe
        id='testimonialto-carousel-saravanakumar-r-tag-all-light'
        src={testimonial}
        style={{
          width: '100vw',
          height: '75vh',
          maxWidth: '100%',
          backgroundColor: '#020617',
          border: 'none',
          overflow: 'hidden',
          margin: '0',
          padding: '0',
          display: 'block',
          position: 'relative',
        }}
        scrolling='no'
        frameBorder='0'
      ></iframe>

      <Link href="https://testimonial.to/saravanakumar-r" legacyBehavior>
        <ButtonAlt style={{
          marginTop: '1rem',
        }}>
          {currentLang === 'ta' ? 'உங்கள் சான்றுகளை எழுதுங்கள்' : 'Write your Testimonial'}{' '}
          <Heart
            style={{
              marginBottom: '-0.1rem',
              marginLeft: '0.2rem'
            }}
            size={16}
            weight="bold"
          />
        </ButtonAlt>
      </Link>
    </Container>
  );
}

export default Testimonials;