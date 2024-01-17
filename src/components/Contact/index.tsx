/* eslint-disable-next-line import/no-anonymous-default-export */
import Link from 'next/link'
import { Form } from './Form'
import { Description, Section, Title } from '../../styles/styles'
import { ContainerContact, ContactContent } from './styles'
import { BsWhatsapp } from 'react-icons/bs'
import { Envelope, TelegramLogo } from 'phosphor-react'

export function Contact() {
  return (
    <Section>
      <Title>
        <p>../contact</p>
        Contact Form
        <span>
          <Envelope /> Contact
        </span>
      </Title>
      <Description>
      So if you are looking for someone hardworking, authentic and always up for a good challenge, look no further than yours truly! Lets connect and see how we can make a difference together:)
      </Description>

      <ContainerContact>
        <ContactContent>
          <div className="contact-content">
            <h4>
              <BsWhatsapp size={22} color="#00fffb" /> WhatsApp{' '}
            </h4>
            <Link href="https://api.whatsapp.com/send?phone=918838416187" target="_blank">

              <span>+91 8838416187</span>

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
          <Title style={{ textAlign: "center" }}> Schedule a Meeting </Title>
          <Description style={{ textAlign: "center", marginTop: "3px" }}>This is powered by Calendy. Hence, it may take some time for loading. 
          (Note: You have to accept the cookies by Calendy in order to Schedule a meet)</Description>          
          <iframe
            src="https://calendly.com/saravanakumar2003/"
            width="100%"
            height="800px"
            frameBorder="0"
            title="Calendly"
          ></iframe>     
      </ContainerContact>
    </Section>
  );
}
