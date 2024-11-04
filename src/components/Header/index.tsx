import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { HeaderContainer, MobileIcon, NavMenu, Icons } from './styles'
import { List, X } from 'phosphor-react'
import { FiGithub, FiLinkedin, FiInstagram } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import { Button } from '../../styles/styles'
import { useContext } from 'react'
import { useThemeContext } from '../../context/ThemeContext'
import { FaSun, FaMoon } from 'react-icons/fa';
import LanguageSwitcher from '../Language/index';
import Settings from '../Settings/SettingsButton';
import AudioPlayer from '../Music/AudioPlayer';
import { useTranslation } from 'react-i18next'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

export function Header() {
  const [open, setOpen] = useState(false);
  const { currentTheme, toggleTheme } = useThemeContext(); 

  const handleOpen = () => {
    setOpen(!open);
  };

  const musicSrc = '/music/in-slow-motion-inspiring-ambient-lounge-219592.mp3';

  const { t, i18n } = useTranslation('common');
  const router = useRouter();
  const [currentLang, setCurrentLang] = useState<'en' | 'ta'>('en');

  useEffect(() => {
    const { locale } = router;
    setCurrentLang(locale as 'en' | 'ta');
  }, [router.locale]);

  return (
    <HeaderContainer style={{ position: 'fixed', top: 0, width: '100%', zIndex: 1000 }}>
      <div className="mobile-content" style={{ display: 'flex' }}>
        <Link href={'/'}>
          <div className="logo">
            <Image
              className="logo"
              width={45}
              height={45}
              src="/Logo1.png"
              alt="logo"
            />
          </div>
          {'Saravanakumar'}
        </Link>

        <div className="audio-player">
          <AudioPlayer audioSrc={musicSrc} />
        </div>
        <style jsx>{`
          .audio-player {
            padding-top: 0.5rem;
            padding-bottom: 0.5rem;
            padding-left: 0.5rem;
            margin: 0 0.5rem;
          }
        `}</style>

        <div className="settings">
          <Settings toggleTheme={toggleTheme} currentTheme={currentTheme} />
        </div>
        <style jsx>{`
          .settings {
            padding-top: 0.5rem;
            padding-bottom: 0.5rem;
            padding-left: 0.5rem;
            margin: 0 0.5rem;
          }
        `}</style>


        <MobileIcon onClick={handleOpen}>
          {open ? (
            <X size={30} weight="bold" />
          ) : (
            <List size={30} weight="bold" />
          )}
        </MobileIcon>
      </div>

      <NavMenu onClick={handleOpen} open={open}>
        <ul>
          <li>
            <Link href={'/'}>
              <span>{currentLang === 'ta' ? 'முகப்பு' : 'Home'}</span>
            </Link>
          </li>
          <li>
            <Link href={'/about'}>
              <span>{currentLang === 'ta' ? 'பற்றி' : 'About'}</span>
            </Link>
          </li>
          <li>
            <Link href={'/experience'}>
              <span>{currentLang === 'ta' ? 'அனுபவம்' : 'Experience'}</span>
            </Link>
          </li>
          <li>
            <Link href={'/blog'}>
              <span>{currentLang === 'ta' ? 'பதிவுகள்' : 'Blogs'}</span>
            </Link>
          </li>
          <li>
            <Link href={'/projects'}>
              <span>{currentLang === 'ta' ? 'திட்டங்கள்' : 'Projects'}</span>
            </Link>
          </li>
          <li>
            <Link href={'/resume'}>
              <span>{currentLang === 'ta' ? 'சுயவிவரம்' : 'Resume'}</span>
            </Link>
          </li>
          <li>
            <Link href={'/contact'}>
              <span>{currentLang === 'ta' ? 'தொடர்பு' : 'Contact'}</span>
            </Link>
          </li>
        </ul>

        <Icons>
          <Link
            href={'https://github.com/Saravanakumar2003'}
            target="_blank"
            aria-label={currentLang === 'ta' ? 'கிட்ஹப் இணைப்பு' : 'Link to Github'}>
            <FiGithub />
          </Link>
          <Link
            href={'https://www.linkedin.com/in/saravanaramaswamy2003/'}
            target="_blank"
            aria-label={currentLang === 'ta' ? 'லிங்க்டின் இணைப்பு' : 'Link to Linkedin'}>
            <FiLinkedin />
          </Link>
          <Link
            href={'https://www.instagram.com/saravanakumar.me?utm_source=qr'}
            target="_blank"
            aria-label={currentLang === 'ta' ? 'இன்ஸ்டாகிராம்' : 'Instagram'}>
            <FiInstagram />
          </Link>
          <Link
            href={'https://api.whatsapp.com/send?phone=918838416187'}
            target="_blank"
            aria-label={currentLang === 'ta' ? 'வாட்ஸ்அப் மூலம் தொடர்பு கொள்ள' : 'Link to contact via WhatsApp'}>
            <FaWhatsapp />
          </Link>
        </Icons>
      </NavMenu>
    </HeaderContainer>
  );
}