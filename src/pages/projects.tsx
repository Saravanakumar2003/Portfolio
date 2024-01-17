import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import projects from "../data/projects";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { ScrollTop } from "../components/ScrollTop";
import * as S from "../styles/projects";
import * as T from "../styles/styles";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { FaSearch } from "react-icons/fa";
import { ArrowRight } from "phosphor-react";
import Github from "../components/Github/Github";

interface ProjectsProps {
  target: HTMLInputElement;
}

export default function Projects() {
  const [query, setQuery] = useState("");

  const handleChange = (e: ProjectsProps) => {
    setQuery(e.target.value);
  };

  const projectFilter = projects.filter((project) =>
    project.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      <Head>
        <title>Projects | Saravanakumar </title>
        <meta
          name="description"
          content="I love to code using tools like React, NextJS, Tailwind, Styled Components and more! Here are some of my favorite projects."
        />
        <meta property="og:title" content="Projects | Saravanakumar" />
        <meta
          property="og:description"
          content="I love to code using tools like React, NextJS, Tailwind, Styled Components and more! Here are some of my favorite projects."
        />
      </Head>

      <Header />
      <ScrollTop />
      <T.Section>
        <T.Title>
          <p>../projects</p>
          Project Works
          <span>
            <HiOutlineDesktopComputer /> Projects
          </span>
        </T.Title>
        <T.Description>
          Here you can see some of the work I have done. Feel free to browse and
          explore the projects to see how they were created, the technologies
          used, and the features implemented.
        </T.Description>

        <S.ProjectsContainer>
          <S.ProjectsContent>
            <div className="search">
              <p>Search by project name</p>

              <div className="input">
                <input
                  type="text"
                  placeholder="Type here..."
                  value={query}
                  onChange={handleChange}
                />
                <FaSearch />
              </div>
            </div>

            {!projectFilter.length && (
              <h3 className="not-found">Project not found 🙁</h3>
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

                        <div className="tags">
                          {project.tags.map((tag) => {
                            return <span key={tag.name}>{tag.name}</span>;
                          })}
                        </div>
                      </div>
                      <Link href={`/project/${project.url}`}>
                        <T.ButtonAlternatives>
                          View Project
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
          <p>../github</p>
          Github Profile
          <span>
            <HiOutlineDesktopComputer /> Stats
          </span>
        </T.Title>
        <Github />
        <p className="github">
              Hey, hey, hey... I have even more projects on{" "}
              <a href="https://github.com/Saravanakumar2003" style={{textDecoration: 'underline',}}> my GitHub </a>
              !!
        </p>
      </T.Section>
      <script src="https://cdn.botpress.cloud/webchat/v1/inject.js"></script>
      <script
        src="https://mediafiles.botpress.cloud/7d24b661-c169-4cd5-9dd2-671b3cb8ec48/webchat/config.js"
        defer
      ></script>
      <Footer />
    </>
  );
}
