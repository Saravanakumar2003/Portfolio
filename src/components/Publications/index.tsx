import React from 'react';
import { Container, Title } from '../../styles/styles';
import { Publication } from '../../types/Publication';
import publications from '../../data/publications';
import { PublicationCard } from './PublicationCard';
import { ORCID } from './ORCID';
import * as S from './style';
import { FaOrcid, FaResearchgate } from 'react-icons/fa';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export function Publications() {
  const { t, i18n } = useTranslation('common');
  const router = useRouter();
  const [currentLang, setCurrentLang] = useState<'en' | 'ta'>('en');

  useEffect(() => {
    const { locale } = router;
    setCurrentLang(locale as 'en' | 'ta');
  }, [router.locale]);

  return (
    <Container>
      <Title>
        {currentLang === 'ta' ? 'வெளியீடுகள்' : 'Publications'}
        <span>
          <FaOrcid size={60} /> {currentLang === 'ta' ? 'ஆராய்ச்சி' : 'Research'}
        </span>
      </Title>
      <S.PublicationContainer>
      <Carousel showArrows={true} showThumbs={false} infiniteLoop={true} showStatus={false} showIndicators={true} autoPlay={false}>
        {publications.map((publication, index) => (
          <div key={index}>
            <PublicationCard
              title={publication.title}
              description={publication.description}
              authors={publication.authors}
              publicationDate={publication.publicationDate}
              source={publication.source}
              link={publication.link} 
              id={publication.id}           
            />
          </div>
        ))}
      </Carousel>
      </S.PublicationContainer>
      <ORCID />
    </Container>
  );
}