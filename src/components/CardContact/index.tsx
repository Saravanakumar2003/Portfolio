import Link from 'next/link'
import Image from 'next/image'
import { ButtonAlt, ButtonSecondary, Section } from '../../styles/styles'
import { CardContactContainer, CardContactContent } from './styles'
import { Pen, TelegramLogo } from 'phosphor-react'
import { useTranslation } from 'react-i18next'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export function CardContact() {
  const { t, i18n } = useTranslation('common');
  const router = useRouter();
  const [currentLang, setCurrentLang] = useState<'en' | 'ta'>('en');

  useEffect(() => {
    const { locale } = router;
    setCurrentLang(locale as 'en' | 'ta');
  }, [router.locale]);

  return (
    <Section>
      <CardContactContainer>
        <div className='ellipse'> 
          <Image
            width={330}
            height={410} 
            src="/vectors/circles.svg"
            alt="circles"
            loading="lazy"
          />
        </div>
        <CardContactContent>
          <div className="description">
            <h2>{currentLang === 'ta' ? 'நாம் பேசலாம்!' : 'Lets talk!'}</h2>
            <p>
              {currentLang === 'ta' ? 'உங்களுக்கு கேள்விகள் இருந்தால் அல்லது வணக்கம் சொல்ல விரும்பினால், தயவுசெய்து என்னை தொடர்பு கொள்ளுங்கள். நான் விரைவில் உங்களுக்கு பதிலளிக்க முயற்சிப்பேன்!' : 'If you have questions or would just like to say hello, please contact me. I will do my best to get back to you as soon as possible!'}
            </p>
          </div>

          <div className="contact">
            <Image 
              width={480} 
              height={500} 
              src="/contact.svg" 
              alt="imagem de contato" 
              loading="lazy"
            />
          </div>
        </CardContactContent>

        <Link href={'/contact'} legacyBehavior>
          <ButtonAlt>
            {currentLang === 'ta' ? 'என்னை தொடர்பு கொள்ளுங்கள்' : 'Contact Me'}{' '}
            <TelegramLogo
              style={{
                marginBottom: '-0.1rem',
                marginLeft: '0.2rem'
              }}
              size={16}
              weight="bold"
            />
          </ButtonAlt>
        </Link>
        <Link href="https://forms.visme.co/formsPlayer/kkjne993-saravana-039-s-portfolio" legacyBehavior>
          <ButtonSecondary style={{
            marginTop: '1rem',
          }}>
            {currentLang === 'ta' ? 'கருத்துக்களை எழுதுங்கள்' : 'Write a feedback'}{' '}
            <Pen
              style={{
                marginBottom: '-0.1rem',
                marginLeft: '0.2rem'
              }}
              size={16}
              weight="bold"
            />
          </ButtonSecondary>
        </Link>
      </CardContactContainer>
    </Section>
  );
}