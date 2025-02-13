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
  publicationType,
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
      <S.PublicationType><b>{currentLang === 'ta' ? 'வெளியீட்டு வகை: ' : 'Publication Type: '}</b>{publicationType}</S.PublicationType>
      <S.PublicationLink href={link} target="_blank">
        {currentLang === 'ta' ? 'மேலும் வாசிக்க' : 'Read more'}
      </S.PublicationLink>
      <br />
      <p style={{fontSize: '10px', marginTop: '10px'}}>
        <strong>{currentLang === 'ta' ? 'குறிப்பு: ' : 'Note: '}</strong>
        {currentLang === 'ta' ? 'இணைப்பு அணுகல் கட்டுப்படுத்தப்பட்டிருக்கலாம். அணுகலைப் பெற மின்னஞ்சல் மூலம் என்னைத் தொடர்பு கொள்ளவும்.' : 'Link access may be restricted. Request me via email to get access.'}
      </p>
    </S.PublicationCardContainer>
  );
}