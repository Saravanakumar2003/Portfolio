import React from 'react';
import { Publication } from '../../types/Publication';
import * as S from './style';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export function PublicationCard({
  title,
  authors,
  publicationDate,
  source,
  description,
  link,
}: Publication) {
  const { t, i18n } = useTranslation('common');
  const router = useRouter();
  const [currentLang, setCurrentLang] = useState<'en' | 'ta'>('en');

  useEffect(() => {
    const { locale } = router;
    setCurrentLang(locale as 'en' | 'ta');
  }, [router.locale]);

  return (
    <S.PublicationCardContainer>
      <S.PublicationTitle>{title}</S.PublicationTitle>
      <S.PublicationDescription><b>{currentLang === 'ta' ? 'விளக்கம்: ' : 'Description: '}</b>{description}</S.PublicationDescription>
      <S.PublicationAuthors><b>{currentLang === 'ta' ? 'ஆசிரியர்கள்: ' : 'Authors: '}</b>{authors}</S.PublicationAuthors>
      <S.PublicationDate><b>{currentLang === 'ta' ? 'வெளியீட்டு தேதி: ' : 'Publication Date: '}</b>{publicationDate}</S.PublicationDate>
      <S.PublicationSource><b>{currentLang === 'ta' ? 'வெளியீடு: ' : 'Published By: '}</b>{source}</S.PublicationSource>
      <S.PublicationLink href={link} target="_blank">
        {currentLang === 'ta' ? 'மேலும் வாசிக்க' : 'Read more'}
      </S.PublicationLink>
    </S.PublicationCardContainer>
  );
}