import React, { useEffect, useState } from 'react';
import { ChatCenteredText } from 'phosphor-react';
import { Container, Title } from '../../styles/styles';

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
      <div style={{
        width: isLargeScreen ? '100vw' : '100%',
        height: isLargeScreen ? '50vh' : '100%',
        }}>
  <iframe
    id='testimonialto-carousel-saravanakumar-r-tag-all-light'
    src="https://embed-v2.testimonial.to/w/saravanakumar-r?animated=on&horizontal=on&theme=dark&shadowColor=ffffff&speed=1&hideDate=on&hideSource&rows=1&tag=all"
    style={{
      position: 'absolute',
      width: '100%',
      height: '100%',
    }}
    frameBorder="0"
  ></iframe>
</div>
    </Container>
  );
}

export default Testimonials;
