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


export function Publications() {
  return (
    <Container>
      <Title>
        Publications
        <span>
          <FaOrcid size={60} /> Research
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
