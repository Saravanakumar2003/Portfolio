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

  const musicSrc = 'https://preview-downloads.customer.envatousercontent.com/files/311477275/preview.mp3?response-content-disposition=attachment%3Bfilename%3D29263231_at-dubstep_by_zedbadley_preview.mp3&Expires=1706873095&Signature=Z-viT8fTOVEOJA1m-fFnocWAZRwO7qgm2PIo9U5C-pAOP-O3Y6enPh~qdjiwHNFrVRKN3IXpfr1wh0KGauKqFPS6abRmT23c4zBVJTA9mqJIZ5ka9JsWy8R-O0X9wwbZbB2QXhclNGZQE6v2HH62MdtzN2g89D3eHxae9RXj8Oi3bzSBIbgTo2ekprnD5U0rW2k-skQSvYXdrhxF59NPjkEQ3gC-bjfLodvYHs2Iaelsdwh7-mtdguPeHt8eViAjpcJUC7PqDY2LoEX6022FMrdYrYkI0RDfpumKRt~qHQOm5GupeJZRv-gGnXSZDJ6D3CJwB2bs4kBIaEiFZwgl-M3UwJzAf5N8fDZk7QpTOUdGLLabGpYsZEaun24zx1qSdwvGXWgxBNFolERIiQJae6s28BDYIM7h8qA-zq6NDHvkYW1vAitl0g7STsrLvlIsRez-YtI5fyHTn-jlKJ0I-4gIlkPkZ9J4Onfp93qP-yJHA5cBHLOXuXzBcU2nIfnyh7Qe-VViI~vp5J6veQVPPFIMNk2zB1XxrIzKflJbimKKgKMXWspUYUXi0c8PYRz1tFzKFUFL4PgMUqspBWDaHLj-AbH49vUa9Y6YR~BFfnoEC1kRn-uhPy~gDa0NtqDGxM-nKDuhtpLKJeUPUdb5pC80N3tLVAuT8TYahR9D9hQ_&Key-Pair-Id=APKAJRP2AVKNFZOM4BLQ'; 

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
