import React from 'react';
import { Container, Title } from '../../styles/styles';
import { Publication } from '../../types/Publication';
import publications from '../../data/publications';
import { PublicationCard } from './PublicationCard';
import { ORCID } from './ORCID';
import * as S from './style';
import { FaOrcid, FaResearchgate } from 'react-icons/fa';

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
        {publications.map((publication: Publication) => (
          <PublicationCard
            key={publication.id}
            title={publication.title}
            authors={publication.authors}
            publicationDate={publication.publicationDate}
            source={publication.source}
            link={publication.link}
            description={publication.description}
            id={publication.id}       
            />
        ))}
      </S.PublicationContainer>
      <ORCID />
    </Container>
  );
}
