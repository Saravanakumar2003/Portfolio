import Head from 'next/head'
import Link from 'next/link'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { ScrollTop } from '../components/ScrollTop'
import { BiUserPin } from 'react-icons/bi'
import { AiFillGithub } from 'react-icons/ai'
import { RiWhatsappFill } from 'react-icons/ri'
import { BsLinkedin } from 'react-icons/bs'
import { GrMail } from 'react-icons/gr'
import { ArrowLeft, ChatCenteredText, Image as IconImage, YoutubeLogo, Hash, InstagramLogo } from 'phosphor-react'
import * as S from '../styles/about'
import { ButtonAlt, Section, Title, ButtonSecondary } from '../styles/styles'
import { Instagram } from './api/Instagram'

interface DashboardPageProps {
  fallback: any;
}
export default function About() {
  return <>
    <Head>
      <title>About | Saravanakumar </title>
      <meta
        name="description"
        content="I am Saravanakumar, a proud student of Velammal Engineering College, where I am pursuing a Bachelors degree in Electronics and Communication Engineering and building a solid foundation in technology."
      />
      <meta property="og:title" content="About | Saravanakumar" />
      <meta
        property="og:description"
        content="I am Saravanakumar, a proud student of Velammal Engineering College, where I am pursuing a Bachelors degree in Electronics and Communication Engineering and building a solid foundation in technology."
      />
    </Head>

    <Header />
    <ScrollTop />
    <Section>
      <S.AboutContainer>
        <Title>
          <p>../about</p>
          About Myself!!
          <span>
            <BiUserPin /> About
          </span>
        </Title>

        <S.AboutContent>
          <S.AboutImage>
            <img
              className="AboutImg"
              src="/Saravana.jpg"
              alt="Saravanakumar"
            />

            <div className="links">
              <ul>
                <Link
                  href={'https://github.com/Saravanakumar2003'}
                  target="_blank"
                  aria-label="Github">

                  <AiFillGithub size={25} />@Saravanakumar2003
                </Link>
                <Link
                  href={'https://www.linkedin.com/in/saravanaramaswamy2003/'}
                  target="_blank"
                  aria-label="Linkedin">

                  <BsLinkedin size={25} />@saravanaramaswamy2003
                </Link>
                <Link 
                  href={'https://api.whatsapp.com/send?phone=918838416187'}
                  target="_blank"
                  aria-label="WhatsApp">

                  <RiWhatsappFill size={25} />+91 8838416187
                </Link>
                <Link
                  href={'mailto:saravanaramaswamy2003@gmail.com'}
                  className="email"
                  target="_blank"
                  aria-label="email">

                  <GrMail size={25} />@saravanaramaswamy2003@gmail.com
                </Link>
              </ul>
            </div>

            <S.AboutContact>
              <h3>
              Lets talk, maybe create an amazing project together?
              </h3>
              <p>Send me a message! 😉</p>
              <Link href={'/contact'}>

                <ButtonAlt>Contact</ButtonAlt>

              </Link>
            </S.AboutContact>
          </S.AboutImage>
          <S.AboutDescription>
            <p style={{ textAlign: 'justify' }}>
            👋 Hey there! I am Saravanakumar, 🎓 a proud student of Velammal Engineering College, where I am pursuing a Bachelors degree in Electronics and Communication Engineering and building a solid foundation in technology. 
            </p>
            <p style={{ textAlign: 'justify' }}>
            💻 I am also an avid game developer, enthusiastic volunteer, and public speaker, and I love exploring new opportunities and avenues.
            </p>
            <p style={{ textAlign: 'justify' }}>
            🎮 As a self-taught game developer, I have spent countless hours sharpening my skills and learning new techniques to bring my ideas to life. I founded Gamecrafters as a passion project, and I am proud to say that its grown into a thriving business with a loyal following.
            </p>
            <p style={{ textAlign: 'justify' }}>
            🎉 I am proud to be a 100% attendance holder in both school and college, till 2nd year. I take my education seriously and love learning about new topics, especially when it comes to nuclear technology 💥.
            </p>
            <p style={{ textAlign: 'justify' }}>
            🧩 In my free time, I love to solve puzzles and brain teasers, which helps me stay sharp and keep my problem-solving skills on point. I am also a big fan of learning myths and legends from around the world 🌍, which gives me a glimpse into different cultures and traditions.
            </p>
            <p style={{ textAlign: 'justify' }}>
            🙌 Beyond my personal pursuits, I am committed to making a positive impact in my community. I love volunteering with local organizations and provide educational resources to underprivileged kids 📚 . Its amazing to see the impact that even a small amount of time and effort can have on someones life.
            </p>
            <p style={{ textAlign: 'justify' }}>
            💪 So if you are looking for someone who is hardworking, authentic and always up for a good challenge, look no further than yours truly! Lets connect and see how we can make a difference together 🤝.
            </p>
          </S.AboutDescription>
        </S.AboutContent>
      </S.AboutContainer>

      <Title>
          Instagram Post
          <span>
            < InstagramLogo /> Latest
          </span>
        </Title>
        <Instagram />
      <a style={{ textAlign: 'center' }}>
        Show your ❤️ by liking and commenting, <br /> Follow me on Instagram for more updates.
      </a>
      <Link href={'/#home'} legacyBehavior>
        <ButtonSecondary>
          <a>
            <ArrowLeft
              style={{ marginBottom: '-0.2rem' }}
              weight="bold"
              size={18}
            />{' '}
            Back
          </a>
        </ButtonSecondary>
      </Link>
    </Section>
    <script src="https://cdn.botpress.cloud/webchat/v1/inject.js"></script>
    <script src="https://mediafiles.botpress.cloud/7d24b661-c169-4cd5-9dd2-671b3cb8ec48/webchat/config.js" defer></script>
    <Footer />
  </>;
}
