import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import projects from "../data/projects";
import { Footer } from "../components/Footer";
import { ScrollTop } from "../components/ScrollTop";
import * as S from "../styles/projects";
import * as T from "../styles/styles";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { FaSearch } from "react-icons/fa";
import { ArrowRight } from "phosphor-react";
import Github from "../components/Github/Github";
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/router';

const botkey = process.env.NEXT_PUBLIC_BOTKEY_URL;

interface ProjectsProps {
  target: HTMLInputElement;
}

export default function Projects() {
  const [query, setQuery] = useState("");
  const { t, i18n } = useTranslation('common');
  const router = useRouter();
  const [currentLang, setCurrentLang] = useState<'en' | 'ta'>('en');

  useEffect(() => {
    const { locale } = router;
    setCurrentLang(locale as 'en' | 'ta');
  }, [router.locale]);

  const handleChange = (e: ProjectsProps) => {
    setQuery(e.target.value);
  };

  const projectFilter = projects.filter((project) =>
    project.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      <Head>
        <title>{currentLang === 'ta' ? 'திட்டங்கள் | சரவணகுமார்' : 'Projects | Saravanakumar'}</title>
        <meta
          name="description"
          content={currentLang === 'ta' ? 'நான் ரியாக்ட், நெக்ஸ்ட் ஜெஎஸ், டெயில்விண்ட், ஸ்டைல்டு காம்போனென்ட்ஸ் போன்ற கருவிகளைப் பயன்படுத்தி குறியிட விரும்புகிறேன்! இங்கே எனது சில விருப்பமான திட்டங்கள் உள்ளன.' : 'I love to code using tools like React, NextJS, Tailwind, Styled Components and more! Here are some of my favorite projects.'}
        />
        <meta property="og:title" content={currentLang === 'ta' ? 'திட்டங்கள் | சரவணகுமார்' : 'Projects | Saravanakumar'} />
        <meta
          property="og:description"
          content={currentLang === 'ta' ? 'நான் ரியாக்ட், நெக்ஸ்ட் ஜெஎஸ், டெயில்விண்ட், ஸ்டைல்டு காம்போனென்ட்ஸ் போன்ற கருவிகளைப் பயன்படுத்தி குறியிட விரும்புகிறேன்! இங்கே எனது சில விருப்பமான திட்டங்கள் உள்ளன.' : 'I love to code using tools like React, NextJS, Tailwind, Styled Components and more! Here are some of my favorite projects.'}
        />
      </Head>

      <ScrollTop />
      <T.Section>
        <T.Title>
          <p>../{currentLang === 'ta' ? 'திட்டங்கள்' : 'projects'}</p>
          {currentLang === 'ta' ? 'திட்ட வேலைகள்' : 'Project Works'}
          <span>
            <HiOutlineDesktopComputer /> {currentLang === 'ta' ? 'திட்டங்கள்' : 'Projects'}
          </span>
        </T.Title>
        <T.Description>
          {currentLang === 'ta' ? 'இங்கே நான் செய்த சில வேலைகளைப் பார்க்கலாம். அவற்றை உலாவி, அவை எவ்வாறு உருவாக்கப்பட்டன, பயன்படுத்திய தொழில்நுட்பங்கள் மற்றும் அம்சங்கள் என்ன என்பதை ஆராயுங்கள்.' : 'Here you can see some of the work I have done. Feel free to browse and explore the projects to see how they were created, the technologies used, and the features implemented.'}
        </T.Description>

        <S.ProjectsContainer>
          <S.ProjectsContent>
            <div className="search">
              <p>{currentLang === 'ta' ? 'திட்டத்தின் பெயரால் தேடுங்கள்' : 'Search by project name'}</p>

              <div className="input">
                <input
                  type="text"
                  placeholder={currentLang === 'ta' ? 'இங்கே தட்டச்சு செய்யவும்...' : 'Type here...'}
                  value={query}
                  onChange={handleChange}
                />
                <FaSearch />
              </div>
            </div>

            {!projectFilter.length && (
              <h3 className="not-found">{currentLang === 'ta' ? 'திட்டம் கிடைக்கவில்லை 🙁' : 'Project not found 🙁'}</h3>
            )}

            {projectFilter.map((project) => {
              return (
                <>
                  <div className="border" key={project.id} />
                  <S.ProjectsItem>
                    <div className="banner">
                      <Image
                        style={{ borderRadius: "20px" }}
                        width={500}
                        height={300}
                        src={project.img}
                        alt={project.title}
                      />
                    </div>

                    <div>
                      <div className="title">
                        <h2>{project.title}</h2>
                      </div>
                      <div className="description">
                        <p>{project.description}</p>
                        <h4 style={{marginBottom:"1rem"}} className="date">{currentLang === 'ta' ? 'தொழில்நுட்ப குவியல்:' : 'Tech Stack:'}</h4>
                        <div className="tags">
                          {project.tech.map((tag) => {
                            return <span key={tag.name}>{tag.name}</span>;
                          })}
                        </div>
                      </div>
                      <Link href={`/project/${project.url}`}>
                        <T.ButtonAlternatives>
                          {currentLang === 'ta' ? 'திட்டத்தைப் பார்க்கவும்' : 'View Project'}
                          <ArrowRight
                            style={{
                              marginBottom: "-0.1rem",
                            }}
                            weight="bold"
                            size={16}
                          />
                        </T.ButtonAlternatives>
                      </Link>
                    </div>
                  </S.ProjectsItem>
                </>
              );
            })}

            
          </S.ProjectsContent>
        </S.ProjectsContainer>
        <T.Title>
          <p>../{currentLang === 'ta' ? 'கிட்ஹப்' : 'github'}</p>
          {currentLang === 'ta' ? 'கிட்ஹப் சுயவிவரம்' : 'Github Profile'}
          <span>
            <HiOutlineDesktopComputer /> {currentLang === 'ta' ? 'புள்ளிவிவரங்கள்' : 'Stats'}
          </span>
        </T.Title>
        <Github />
        <p className="github">
          {currentLang === 'ta' ? 'ஏய், ஏய்... எனக்கு இன்னும் அதிகமான திட்டங்கள் உள்ளன ' : 'Hey, hey... I have more projects on '}
          <a href="https://github.com/Saravanakumar2003" style={{textDecoration: 'underline',}}>{currentLang === 'ta' ? 'எனது கிட்ஹப்' : 'my GitHub'}</a>!!
        </p>
      </T.Section>
      <script src="https://cdn.botpress.cloud/webchat/v1/inject.js"></script>
      <script
        src={botkey}
        defer
      ></script>
      <Footer />
    </>
  );
}