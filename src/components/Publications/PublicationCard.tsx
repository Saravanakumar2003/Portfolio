
import React from 'react';
import { Publication } from '../../types/Publication';
import * as S from './style';

export function PublicationCard({
  title,
  authors,
  publicationDate,
  source,
  description,
  link,
}: Publication) {
  return (
    <S.PublicationCardContainer>
      <S.PublicationTitle>{title}</S.PublicationTitle>
      <S.PublicationDescription><b>Description: </b>{description}</S.PublicationDescription>
      <S.PublicationAuthors><b>Authors: </b>{authors}</S.PublicationAuthors>
      <S.PublicationDate><b>Publication Date: </b>{publicationDate}</S.PublicationDate>
      <S.PublicationSource><b>Published By: </b>{source}</S.PublicationSource>
      <S.PublicationLink href={link} target="_blank">
        Read more
      </S.PublicationLink>
    </S.PublicationCardContainer>
  );
}