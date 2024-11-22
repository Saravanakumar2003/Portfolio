import Link from 'next/link'
import { FaWhatsapp } from 'react-icons/fa'
import { FiGithub, FiLinkedin, FiInstagram } from 'react-icons/fi'
import { FooterContainer } from './styles'
import { useTranslation } from 'react-i18next'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export function Footer() {
  const { t, i18n } = useTranslation('common');
  const router = useRouter();
  const [currentLang, setCurrentLang] = useState<'en' | 'ta'>('en');

  useEffect(() => {
    const { locale } = router;
    setCurrentLang(locale as 'en' | 'ta');
  }, [router.locale]);

  return (
    <FooterContainer>
      <h4> &copy; {new Date().getFullYear()} Saravanakumar Ramaswamy</h4>
      <Link href={'/privacypolicy'} aria-label={currentLang === 'ta' ? 'தனியுரிமைக் கொள்கை' : 'Privacy Policy'} legacyBehavior>
        {currentLang === 'ta' ? 'தனியுரிமைக் கொள்கை' : 'Privacy Policy'}
        </Link>
        <Link href={'/terms&condition'} aria-label={currentLang === 'ta' ? 'விதிமுறைகள் மற்றும் நிபந்தனைகள்' : 'Terms and Conditions'} legacyBehavior>
        {currentLang === 'ta' ? 'விதிமுறைகள் மற்றும் நிபந்தனைகள்' : 'Terms and Conditions'}
        </Link>
      <div className="links">
        <Link
          href={'https://github.com/Saravanakumar2003'}
          target="_blank"
          aria-label={currentLang === 'ta' ? 'கிட்ஹப் இணைப்பு' : 'Link to Github'}
        >
          <FiGithub />
        </Link>
        <Link
          href={'https://www.linkedin.com/in/saravanaramaswamy2003/'}
          target="_blank"
          aria-label={currentLang === 'ta' ? 'லிங்க்டின் இணைப்பு' : 'Link to Linkedin'}
        >
          <FiLinkedin />
        </Link>
        <Link 
          href={'https://www.instagram.com/saravanakumar.me?utm_source=qr'}
          target="_blank" 
          aria-label={currentLang === 'ta' ? 'இன்ஸ்டாகிராம்' : 'Instagram'}
        >
          <FiInstagram />
        </Link>
        <Link
          href={'https://api.whatsapp.com/send?phone=918838416187'}
          target="_blank"
          aria-label={currentLang === 'ta' ? 'வாட்ஸ்அப் மூலம் தொடர்பு கொள்ள' : 'Link to contact via WhatsApp'}
        >
          <FaWhatsapp />
        </Link>
      </div>
    </FooterContainer>
  );
}