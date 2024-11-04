import Image from 'next/image'
import Link from 'next/link'
import { Button, Container, ButtonAlternatives } from '../../styles/styles'
import { AboutContainer } from './styles'
import { ArrowRight, TelegramLogo } from 'phosphor-react'
import { useTranslation } from 'react-i18next'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export function About() {
  const { t, i18n } = useTranslation('common');
  const router = useRouter();
  const [currentLang, setCurrentLang] = useState<'en' | 'ta'>('en');

  useEffect(() => {
    const { locale } = router;
    setCurrentLang(locale as 'en' | 'ta');
  }, [router.locale]);

  return (
    <Container>
      <AboutContainer>
        <div className="AboutImg">
          <Image
            width={200}
            height={200}
            className="AboutImg"
            src="/Professional_edited.jpg"
            alt="Saravana's Image"
            loading="lazy"
          />
        </div>

        <div className="aboutContent">
          <div className="aboutDescription">
            <h2>{currentLang === 'ta' ? 'என்னைப் பற்றி சிறிது!!' : 'Little About Me!!'}</h2>
            <li>
              {currentLang === 'ta' ? 'நான் வேலம்மல் பொறியியல் கல்லூரியின் மாணவர், எலக்ட்ரானிக்ஸ் மற்றும் கம்யூனிகேஷன் இன்ஜினியரிங் படித்து வருகிறேன் மற்றும் தொழில்நுட்பத்தில் ஒரு வலுவான அடித்தளத்தை உருவாக்குகிறேன்.' : 'A proud student of Velammal Engineering College, where I am pursuing a Bachelors degree in Electronics and Communication Engineering and building a solid foundation in technology.'}
            </li>
            <li>
              {currentLang === 'ta' ? 'நான் ஒரு ஆர்வமுள்ள டெவலப்பர், ஆர்வமுள்ள தன்னார்வலர் மற்றும் பொது பேச்சாளர், மேலும் புதிய வாய்ப்புகள் மற்றும் வழிகளை ஆராய்வதில் நான் ஆர்வமாக இருக்கிறேன்.' : 'I am also an avid developer, enthusiastic volunteer, and public speaker, and I love exploring new opportunities and avenues.'}
            </li>
          </div>

          <div className='aboutButton'>
            <Link href={'/resume'}>
              <Button>
                {currentLang === 'ta' ? 'சுயவிவரம்' : 'Resume'}
                <TelegramLogo
                  style={{
                    marginBottom: '-0.1rem',
                    marginLeft: '0.2rem',
                  }}
                  size={16}
                  weight="bold"
                />
              </Button>
            </Link>
            <Link href={'/about'}>
              <ButtonAlternatives>
                {currentLang === 'ta' ? 'மேலும் வாசிக்க' : 'Read more'}
                <ArrowRight
                  style={{
                    marginBottom: '-0.1rem',
                    marginLeft: '0.2rem'
                  }}
                  weight="bold"
                  size={16}
                />
              </ButtonAlternatives>
            </Link>
          </div>
        </div>
      </AboutContainer>
    </Container>
  );
}