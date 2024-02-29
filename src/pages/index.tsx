import Head from "next/head";
import { About } from "../components/CardAbout";
import { Header } from "../components/Header";
import { HomeHero } from "../components/Home";
import { Projects } from "../components/Projects";
import { Skills } from "../components/Skills";
import { ScrollTop } from "../components/ScrollTop";
import { Footer } from "../components/Footer";
import { Experience } from "../components/Experience";
import { CardContact } from "../components/CardContact";
import { Section } from "../styles/styles";
import { Work } from "../components/Work";
import { Education } from "../components/Education";
import { Achievements } from "../components/Achievements";
import { Testimonials } from "../components/Testimonials";

export default function Home() {
  return (
    <>
      <Head>
        <title>Saravanakumar Portfolio</title>
      </Head>

      <Header />
      <ScrollTop />
      <Section>
        <Section>
        <HomeHero />
        </Section>
        <About />
        <Skills />
        <Education />
        <Experience />
        <Work />
        <Achievements />
        <Projects />
        <Testimonials />
        <CardContact />
      </Section>
      <div className="visme_d" data-title="Custom Form" data-url="kkjne993-custom-form?fullPage=true" data-domain="forms" data-full-page="true" data-min-height="100vh" data-form-id="32099"></div>
      <script src="https://static-bundles.visme.co/forms/vismeforms-embed.js"></script>
      <script src="https://cdn.botpress.cloud/webchat/v1/inject.js"></script>
      <script
        src="https://mediafiles.botpress.cloud/7d24b661-c169-4cd5-9dd2-671b3cb8ec48/webchat/config.js"
        defer
      ></script>
      <Footer />
    </>
  );
}
