import Head from "next/head";
import { About } from "../components/CardAbout";
import { HomeHero } from "../components/Home";
import { Projects } from "../components/Projects";
import { Skills } from "../components/Skills";
import { ScrollTop } from "../components/ScrollTop";
import { Footer } from "../components/Footer";
import { Experience } from "../components/Experience";
import { CardContact } from "../components/CardContact";
import { Section } from "../styles/styles";
import { Work } from "../components/Volunteer";
import { LoadingScreen } from "../components/Animations/LoadingScreen";
import { Education } from "../components/Education";
import { Achievements } from "../components/Achievements";
import { Testimonials } from "../components/Testimonials";
import { Publications } from "../components/Publications";
import { Wakatime } from "../components/Coding/Wakatime";
import { Certificates } from "../components/Certificates/index";
import { Work_Experience } from "../components/Work/index";
import { Jokes } from "../components/Misc/Joke";
import { useTranslation } from 'react-i18next'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import React from 'react'
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useLoading } from '../hooks/useLoading';
import RouteTransition from '../components/Animations/RouteTransition';
import FadeInAnimation from '../components/Animations/FadeInAnimation';

const botkey = process.env.NEXT_PUBLIC_BOTKEY_URL;

export default function Home() {
  const { t, i18n } = useTranslation('common');
  const router = useRouter();
  const [currentLang, setCurrentLang] = useState<'en' | 'ta'>('en');
  const isLoading = useLoading(3000); 

  useEffect(() => {
    const { locale } = router;
    setCurrentLang(locale as 'en' | 'ta');
  }, [router.locale]);

  if (isLoading) {
    return <LoadingScreen onLoadingComplete={() => {}} />;
  }

  return (
    <RouteTransition>
      <Head>
        <title>{currentLang === 'ta' ? 'சரவணகுமாரின் போர்ட்ஃபோலியோ' : ' Saravanakumar\'s Portfolio'} </title>
      </Head>
      <ScrollTop />
      <Section>
        <FadeInAnimation>
          <HomeHero />
        </FadeInAnimation>
        <FadeInAnimation>
          <About />
        </FadeInAnimation>
        <FadeInAnimation>
          <Skills />
        </FadeInAnimation>
        <FadeInAnimation>
          <Education />
        </FadeInAnimation>
        <FadeInAnimation>
          <Work_Experience/>
        </FadeInAnimation>
        <FadeInAnimation>
          <Experience />
        </FadeInAnimation>
        <FadeInAnimation>
          <Work />
        </FadeInAnimation>
        <FadeInAnimation>
          <Achievements />
        </FadeInAnimation>
        <FadeInAnimation>
          <Publications />
        </FadeInAnimation>
        <FadeInAnimation>
          <Certificates />
        </FadeInAnimation>
        <FadeInAnimation>
          <Projects />
        </FadeInAnimation>
        <FadeInAnimation>
          <Wakatime />
        </FadeInAnimation>
        <FadeInAnimation>
          <Testimonials />
        </FadeInAnimation>
        <FadeInAnimation>
          <Jokes />
        </FadeInAnimation>
        <FadeInAnimation>
          <CardContact />
        </FadeInAnimation>
      </Section>

      <script src="https://cdn.botpress.cloud/webchat/v2.2/inject.js"></script>
      <script
        src={botkey}
        defer
      ></script>
      <Footer />
    </RouteTransition>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale = 'en' }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
});