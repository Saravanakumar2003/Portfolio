import React, { useEffect, useState } from 'react';
import { ChatCenteredText } from 'phosphor-react';
import { Container, Title } from '../../styles/styles';
import Link from 'next/link'
import { ButtonAlt, Section } from '../../styles/styles'
import { Heart } from 'phosphor-react'

const testimonial = process.env.NEXT_PUBLIC_TESTIMONIAL_URL;

export function Testimonials() {
  const [isLargeScreen, setIsLargeScreen] = useState(false);

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
        What people say
        <span>
          <ChatCenteredText />Testimonials 
        </span>
      </Title>
  <iframe
    id='testimonialto-carousel-saravanakumar-r-tag-all-light'
    src={testimonial}
    style={{
      width: '100vw',
      height: '75vh',
      maxWidth: '100%',
      border: 'none',
      overflow: 'hidden',
      margin: '0',
      padding: '0',
      display: 'block',
      zIndex: 9999,
      position: 'relative',
    }}
    scrolling='no'
    frameBorder='0'
  ></iframe>

<Link href="https://testimonial.to/saravanakumar-r" legacyBehavior>
          <ButtonAlt style={{
            marginTop: '1rem',
          }}>
            Write your Testimonial{' '}
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
