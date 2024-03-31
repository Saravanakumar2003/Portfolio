
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
      <S.PublicationDescription>Description: {description}</S.PublicationDescription>
      <S.PublicationAuthors>Authors: {authors}</S.PublicationAuthors>
      <S.PublicationDate>Publication Date:{publicationDate}</S.PublicationDate>
      <S.PublicationSource>Published By: {source}</S.PublicationSource>
      <S.PublicationLink href={link} target="_blank">
        Read more
      </S.PublicationLink>
    </S.PublicationCardContainer>
  );
}