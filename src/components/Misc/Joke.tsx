/* eslint-disable-next-line import/no-anonymous-default-export */
import Link from 'next/link'
import { Description, Section, Title, ButtonPrimary, ButtonAlt, SubTitle} from '../../styles/styles'
import { SmileyWink, ArrowCounterClockwise, ShareNetwork } from 'phosphor-react'
import { useTranslation } from 'react-i18next'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export function Jokes() {
  const { t, i18n } = useTranslation('common');
  const router = useRouter();
  const [currentLang, setCurrentLang] = useState<'en' | 'ta'>('en');
  const [jokeImageUrl, setJokeImageUrl] = useState<string>('https://readme-jokes.vercel.app/api');

  useEffect(() => {
    const { locale } = router;
    setCurrentLang(locale as 'en' | 'ta');
  }, [router.locale]);

  const handleRefresh = () => {
    setJokeImageUrl(`https://readme-jokes.vercel.app/api?${Date.now()}`);
  };

  return (
    <Section>
      <Title >
        {currentLang === 'ta' ? 'தொடர்பு படிவம்' : 'Joke For You!'}
        <span>
          <SmileyWink /> {currentLang === 'ta' ? 'தொடர்பு' : 'Special'}
        </span>
      </Title>
      <SubTitle>
        {currentLang === 'ta' ? ':)' : 'If you came this far, then you deserve a Joke!!'}
      </SubTitle>
      <img src={jokeImageUrl} alt="Jokes Card" />
      <div>
        <ButtonAlt onClick={handleRefresh} style={{ marginRight: '10px' }}>
          <ArrowCounterClockwise size={24} /> {currentLang === 'ta' ? 'புதுப்பிக்க' : 'Refresh'}
        </ButtonAlt>
      </div>
    </Section>
  );
}