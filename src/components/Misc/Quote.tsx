/* eslint-disable-next-line import/no-anonymous-default-export */
import Link from 'next/link'
import { Description, Section, Title, ButtonPrimary, ButtonSecondary, SubTitle} from '../../styles/styles'
import { SmileyWink, ArrowCounterClockwise, ShareNetwork } from 'phosphor-react'
import { useTranslation } from 'react-i18next'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export function Quotes() {
  const { t, i18n } = useTranslation('common');
  const router = useRouter();
  const [currentLang, setCurrentLang] = useState<'en' | 'ta'>('en');
  const [jokeImageUrl, setJokeImageUrl] = useState<string>('https://github-readme-quotes-bay.vercel.app/quote?theme=default&animation=default&layout=default&font=default&quoteType=random');

  useEffect(() => {
    const { locale } = router;
    setCurrentLang(locale as 'en' | 'ta');
  }, [router.locale]);

  const handleRefresh = () => {
    setJokeImageUrl(`hhttps://github-readme-quotes-bay.vercel.app/quote?${Date.now()}`);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Joke for You!',
        text: 'Check out this joke!',
        url: jokeImageUrl,
      }).catch((error) => console.error('Error sharing:', error));
    } else {
      alert('Sharing not supported on this browser.');
    }
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
        <ButtonSecondary onClick={handleRefresh} style={{ marginRight: '10px' }}>
          <ArrowCounterClockwise size={24} /> {currentLang === 'ta' ? 'புதுப்பிக்க' : 'Refresh'}
        </ButtonSecondary>
        <ButtonSecondary onClick={handleShare}>
          <ShareNetwork size={24} /> {currentLang === 'ta' ? 'பகிர்' : 'Share'}
        </ButtonSecondary>
      </div>
    </Section>
  );
}