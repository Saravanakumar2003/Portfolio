import Head from 'next/head'
import { Contact } from '../components/Contact'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { ScrollTop } from '../components/ScrollTop'

const botkey = process.env.NEXT_PUBLIC_BOTKEY_URL;

export default function Contacts() {
  return (
    <>
      <Head>
        <title>Contact | Saravanakumar </title>
        <meta
          name="description"
          content="Feel free to get in touch and let's talk about how we can work together."
        />
        <meta property="og:title" content="Contact | Evander Inácio" />
        <meta
          property="og:description"
          content="Feel free to get in touch and let's talk about how we can work together."
        />

        
      </Head>

      <Header />
      <ScrollTop />
      <Contact />
      <script src="https://cdn.botpress.cloud/webchat/v1/inject.js"></script>
      <script src={botkey} defer></script>
      <Footer />
    </>
  )
}
