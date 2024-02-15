import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { HeaderContainer, MobileIcon, NavMenu, Icons } from './styles'
import { List, X } from 'phosphor-react'
import { FiGithub, FiLinkedin, FiInstagram } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'

import AudioPlayer from '../Music/AudioPlayer';

export function Header() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  const musicSrc = 'https://cf-media.sndcdn.com/GdA3Nxspc3Dk.128.mp3?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiKjovL2NmLW1lZGlhLnNuZGNkbi5jb20vR2RBM054c3BjM0RrLjEyOC5tcDMqIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzA4MDExMzYwfX19XX0_&Signature=JxhtZrBPVtat8QCvOzomWtlNJzOsns4D3n4f8NOlyeWpF6CoSSYCVESEVuZaMa4kb5hRxUrqOPHZ6Zpf4NocKYU~sBmKJtyecYec~Y-aEGOtrSheqwrrzT8ir1ktsPEvoSSgww4-q56YqRC9RKFcLujjVP6vwCnjgbaXjsq01QfazyiliYb64r8VVAxAAHtyCcdab2Z3fqI-uifSPjORN-2oJdxh-U3micT17i-tZDF0dWrMv9FlTsqtR8qu7abniw-4Ip2hU~h2UYKLM2uEgoMFz498lHvA7Z2BE1Z5HhjN75fjQx9FcApFhjEiD~M5oPi9aSmz~Y8B5UNtsdD3YQ__&Key-Pair-Id=APKAI6TU7MMXM5DG6EPQ'; 

  return (
    <HeaderContainer style={{ position: 'fixed', top: 0, width: '100%', zIndex: 1000 }}>
      <div className="mobile-content"  style={{ display: 'flex'}}>
        <Link href={'/'}>
          <div className="logo">
            <Image
              className="logo"
              width={50}
              height={50}
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
