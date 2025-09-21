import Image from 'next/image'
import { ButtonSecondAlt, Container, Title } from "../../styles/styles";
import { CVContainer, CVContent, CVDescription, Curriculum } from "./styles"
import { FiDownload } from 'react-icons/fi'
import { useTranslation } from 'react-i18next'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export function CV() {
  const { t, i18n } = useTranslation('common');
  const router = useRouter();
  const [currentLang, setCurrentLang] = useState<'en' | 'ta'>('en');

  useEffect(() => {
    const { locale } = router;
    setCurrentLang(locale as 'en' | 'ta');
  }, [router.locale]);

  return (
    <Container>
      <CVContainer>
        <Title>
          <span>
            <FiDownload /> {currentLang === 'ta' ? 'பதிவிறக்க' : 'Download'}
          </span>
        </Title>

        <CVContent>
          <CVDescription>
            <div className="aspas">&ldquo;</div>
            <p>
              {currentLang === 'ta' ? 'பதிவிறக்க பொத்தானைக் கிளிக் செய்வதன் மூலம் எனது தொழில்முறை சுயவிவரத்தை நீங்கள் பதிவிறக்கம் செய்யலாம்.' : 'Here you can download my professional resume by clicking on the download button.'}
            </p>
            <div className="profile">
              <Image src="https://github.com/Saravanakumar2003.png" alt="Imagem de perfil" width={80} height={80} />
              <div className="name">
                <h3>Saravanakumar R</h3>
                <span>{currentLang === 'ta' ? 'டெவலப்பர் | பேச்சாளர் | தன்னார்வலர்' : 'Developer | Speaker | Volunteer'}</span>
              </div>
            </div>
          </CVDescription>
          
          <Curriculum>
            <Image src="/cv.png" alt="Resume" width={300} height={400} />
            <a href="/pdf/Saravanakumar_Resume.pdf" download>
              <ButtonSecondAlt>
                <b>{currentLang === 'ta' ? 'சுயவிவரத்தை பதிவிறக்கவும்' : 'Download CV'}</b> <FiDownload size={20}  />
              </ButtonSecondAlt>
            </a>
          </Curriculum>
        </CVContent>        
      </CVContainer>
    </Container>
  )
}