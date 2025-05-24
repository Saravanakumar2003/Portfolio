/* eslint-disable-next-line import/no-anonymous-default-export */
import Link from 'next/link'
import { Form } from './Form'
import { Description, Section, Title } from '../../styles/styles'
import { ContainerContact, ContactContent, ResponsiveIframeContainer } from './styles'
import { BsWhatsapp } from 'react-icons/bs'
import { Envelope, TelegramLogo, LinkedinLogo } from 'phosphor-react'
import { useTranslation } from 'react-i18next'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

const calendy = process.env.NEXT_PUBLIC_CALENDLY_URL;
const calender = process.env.NEXT_PUBLIC_PORTFOLIO_CALENDER_URL;

export function Contact() {
  const { t, i18n } = useTranslation('common');
  const router = useRouter();
  const [currentLang, setCurrentLang] = useState<'en' | 'ta'>('en');

  useEffect(() => {
    const { locale } = router;
    setCurrentLang(locale as 'en' | 'ta');
  }, [router.locale]);

  return (
    <Section>
      <Title>
        <p>../contact</p>
        {currentLang === 'ta' ? 'தொடர்பு படிவம்' : 'Contact Form'}
        <span>
          <Envelope /> {currentLang === 'ta' ? 'தொடர்பு' : 'Contact'}
        </span>
      </Title>
      <Description>
        {currentLang === 'ta' ? 'எனவே நீங்கள் கடினமாக உழைக்கும், உண்மையான மற்றும் நல்ல சவாலுக்கு எப்போதும் தயாராக இருக்கும் ஒருவரைத் தேடுகிறீர்கள் என்றால், உண்மையானவர்களைத் தவிர வேறு எதையும் பார்க்க வேண்டாம்! நாம் இணைந்து எப்படி மாற்றத்தை ஏற்படுத்த முடியும் என்று பார்க்கலாம்:)' : 'So if you are looking for someone hardworking, authentic and always up for a good challenge, look no further than yours truly! Lets connect and see how we can make a difference together:)'}
      </Description>

      <ContainerContact>
        <ContactContent>
          <div className="contact-content">
            <h4>
              <LinkedinLogo size={22} color="#00fffb" /> Linkedin{' '}
            </h4>
            <Link href="https://www.linkedin.com/in/saravanaramaswamy2003/" target="_blank">
              <span>saravanaramaswamy2003</span>
            </Link>
          </div>

          <div className="contact-content">
            <h4>
              {' '}
              <TelegramLogo size={22} color="#00fffb" /> Email{' '}
            </h4>
            <Link href="mailto:saravanaramaswamy2003@gmail.com" target="_blank">
              <span>saravanaramaswamy2003@gmail.com</span>
            </Link>
          </div>
        </ContactContent>
        <Form />
        <Title style={{ textAlign: "center" }}>
          {currentLang === 'ta' ? 'ஒரு சந்திப்பை திட்டமிடுங்கள்' : 'Schedule a Meeting'}
        </Title>
        <Description style={{ textAlign: "center", marginTop: "3px" }}>
          {currentLang === 'ta' ? 'இது Calendy மூலம் இயக்கப்படுகிறது. எனவே, ஏற்றுவதற்கு சில நேரம் ஆகலாம். (குறிப்பு: சந்திப்பை திட்டமிட நீங்கள் Calendy குக்கீகளை ஏற்க வேண்டும்)' : 'This is powered by Calendy. Hence, it may take some time for loading. (Note: You have to accept the cookies by Calendy in order to Schedule a meet)'}
        </Description>
        <ResponsiveIframeContainer>
          <iframe
            src={calendy}
            width="100%"
            height="800px"
            frameBorder="0"
            title="Calendly"
          ></iframe>
        </ResponsiveIframeContainer>
        <Title style={{ textAlign: "center" }}>
          {currentLang === 'ta' ? 'எனது நாட்காட்டியைக் காண்க' : 'See my Calendar'}
        </Title>
        <ResponsiveIframeContainer>
        <iframe
          src={calender}
          style={{ border: 0 }}
          width="800"
          height="600"
          frameBorder="0"
          scrolling="no"
          title="Google Calendar"
        ></iframe>
        </ResponsiveIframeContainer>
      </ContainerContact>
    </Section>
  );
}