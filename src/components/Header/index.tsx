import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { HeaderContainer, MobileIcon, NavMenu, Icons } from './styles'
import { List, X } from 'phosphor-react'
import { FiGithub, FiLinkedin, FiInstagram } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import { Button } from '../../styles/styles'
import { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext'
import { FaSun, FaMoon } from 'react-icons/fa';


import AudioPlayer from '../Music/AudioPlayer';

export function Header() {
  const [open, setOpen] = useState(false);

  const { toggleTheme, theme } = useContext(ThemeContext);

  const handleOpen = () => {
    setOpen(!open);
  };

  const musicSrc = '/music/in-slow-motion-inspiring-ambient-lounge-219592.mp3';

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
          margin: 5px 20px;
          flex-grow: 1; 
          max-width: 600px; 
        }
          `}</style>

        <MobileIcon onClick={handleOpen}>
          {open ? (
            <X size={25} weight="bold" />
          ) : (
            <List size={25} weight="bold" />
          )}
        </MobileIcon>
      </div>

      {/* <button onClick={toggleTheme}
          style={{
            width: '40px',
            height: '40px',
            borderRadius: '20%',
            backgroundColor: 'white',
            color: 'black',
            cursor: 'pointer'
          }}>
          {theme === 'light' ? <FaMoon /> : <FaSun />}
        </button> */}

      <NavMenu onClick={handleOpen} open={open}>
        <ul>
          <li>
            <Link href={'/'}>

              <span>Home</span>

            </Link>
          </li>

          <li>
            <Link href={'/about'}>

              <span>About</span>

            </Link>
          </li>

          <li>
            <Link href={'/experience'}>

              <span>Experience</span>

            </Link>
          </li>

          <li>
            <Link href={'/blog'}>

              <span>Blogs</span>

            </Link>
          </li>

          <li>
            <Link href={'/projects'}>

              <span>Projects</span>

            </Link>
          </li>

          <li>
            <Link href={'/resume'}>

              <span>Resume</span>

            </Link>
          </li>

          <li>
            <Link href={'/contact'}>

              <span>Contact</span>

            </Link>
          </li>
        </ul>
        

        <Icons>
          <Link
            href={'https://github.com/Saravanakumar2003'}
            target="_blank"
            aria-label="Github">

            <FiGithub />

          </Link>
          <Link
            href={'https://www.linkedin.com/in/saravanaramaswamy2003/'}
            target="_blank"
            aria-label="Linkedin">

            <FiLinkedin />

          </Link>

          <Link
            href={'https://www.instagram.com/saravanakumar.me?utm_source=qr'}
            target="_blank"
            aria-label="Instagram">

            <FiInstagram />

          </Link>

          <Link
            href={'https://api.whatsapp.com/send?phone=918838416187'}
            target="_blank"
            aria-label="Whatsapp">

            <FaWhatsapp />

          </Link>


        </Icons>
      </NavMenu>
    </HeaderContainer>
  );
}
