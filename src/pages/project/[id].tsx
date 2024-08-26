import { GetStaticProps, GetStaticPaths } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { Project } from '../../types/Project'
import projects from '../../data/projects'
import ReactPlayer from 'react-player'
import { Footer } from '../../components/Footer'
import * as S from '../../styles/project'
import { ButtonAlt, ButtonSecondary, Title, Description } from '../../styles/styles'
import { ArrowLeft, ChatCenteredText, Image as IconImage, YoutubeLogo, Hash, ChalkboardSimple,UsersThree, Clock } from 'phosphor-react'
import { FaAddressBook, FaBlog, FaGithub, FaGoogle, FaInstagram, FaLinkedin, FaTrello, FaTwitter } from 'react-icons/fa'
import { BsGlobe } from 'react-icons/bs'

interface ProjectProps {
  project: Project
}

export default function Projeto({ project }: ProjectProps) {
  return <>
    <Head>
      <title>{project.title} | Saravanakumar </title>
      <meta name="description" content={project.description} />
      <meta property="og:title" content={project.title} />
      <meta property="og:description" content={project.description} />
      <meta property="og:image" content={project.imgUrl} />
      <meta property="og:image:secure_url" content={project.imgUrl} />
      <meta name="twitter:image" content={project.imgUrl} />
      <meta name="twitter:image:src" content={project.imgUrl} />
    </Head>

    <S.ProjectContainer>
      <S.Banner>
        <img className="bannerUrl" style={{ marginTop: '5rem' }} src={project.banner} alt={project.title} />
        <div className="bannerContainer">
          <div className="bannerContent">
            <img src={project.icon} alt={project.title} />
            <div>
              <h1>{project.title}</h1>
              <p>{project.type}</p>
            </div>
          </div>

          <div className="link">
            <Link href={project.web} target="_blank">
              <ButtonAlt>
                Website <BsGlobe size={15} />
              </ButtonAlt>
            </Link>
            <Link href={project.github} target="_blank">
              <ButtonAlt>
                Repository <FaGithub size={17} />
              </ButtonAlt>
            </Link>
            <Link href={project.blog}>
              <ButtonAlt>
                Blog <FaBlog size={17} />
              </ButtonAlt>
            </Link>
          </div>
        </div>
      </S.Banner>

      <S.DescriptionProject>
        <Title>
          Project
          <span>
            <ChatCenteredText /> Description
          </span>
        </Title>
        <div className="description">
          <p style={{ textAlign: "justify" }}>{project.description}</p>
        </div>
      </S.DescriptionProject>

      <S.Tags>
        <Title>
          Tech Stack
          <span>
            <Hash /> Skills
          </span>
        </Title>

        <Description style={{ textAlign: 'center' }}>
          Technologies used in the development of the project.
        </Description>

        <S.TagsContainer>
          {project.tech &&
            project.tech.map(tech => {
              return (
                <S.TagsContent key={tech.id} color={tech.color}>
                  <div
                    className="card-icon"
                    style={{
                      backgroundColor: `rgba(${tech.rgb}, .1)`,
                      border: `1px solid ${tech.color}`
                    }}
                  >
                    <Image
                      src={tech.icon}
                      alt={tech.name}
                      width={50}
                      height={50}
                    />
                  </div>
                  <h3>{tech.name}</h3>
                </S.TagsContent>
              )
            })}
        </S.TagsContainer>
      </S.Tags>

      <S.PrintContainer>
        <Title>
          Screenshot
          <span>
            <IconImage /> Project
          </span>
        </Title>

        <S.PrintContent>
          <S.Gif>
            <h2>Details</h2>
            <p>
              Name: <span>{project.title}</span>
            </p>
            <p>
              Status: <span>{project.status}</span>
            </p>
            <p>
              Year: <span>{project.year}</span>
            </p>
            <h5>Preview</h5>
            <video className="preview" loop autoPlay muted playsInline>
              <source src={project.gif} />
            </video>
          </S.Gif>

          <S.Print>
            {project.print &&
              project.print.map(print => {
                return (
                  <div className="print-list" key={print.id}>
                    <h3>{print.name}</h3>
                    <p style={{ textAlign: "justify" }}>{print.description}</p>
                    <Image
                      width={770}
                      height={460}
                      src={print.img}
                      alt={print.name}
                    />
                  </div>
                )
              })}
          </S.Print>
        </S.PrintContent>
      </S.PrintContainer>

      <S.Trelloboard>
        <S.DescriptionProject>
          <Title>
            Project Board
            <span>
              <FaTrello /> Trello
            </span>
          </Title>
          <div className="description">
            <p style={{ textAlign: "justify" }}> The Trello Board is integrated into this project section to provide a transparent view of the project's status and progress. If you have any suggestions or features you'd like to see added, please feel free to edit the Trello board using the button below.
              <br /> <br /> <strong>Note:</strong> The Trello board is updated occasionally and may not reflect the current status of the project.
            </p>
          </div>
        </S.DescriptionProject>
        <div className="trello-board">
          <iframe
            src={project.trelloboard}
            width="100%"
            height="600"
            placeholder='Trello Board'
            frameBorder="100"
            title="Trello Board"
          ></iframe>
        </div>

        <div className="edit-trello-board">
          <a
            href={project.trelloedit}
            target="_blank"
            rel="noopener noreferrer"
            className="edit-link"
          >
            Edit Trello Board
          </a>
        </div>
      </S.Trelloboard>

      <S.ContainerVideo>
        <div className="imageVideo">
          <img src={project.backgroundImage} alt={project.title} />
        </div>
        <Title className="title-video">
          Video
          <span>
            <YoutubeLogo /> Project
          </span>
          <img
            className="vector"
            src="/vectors/youtube.svg"
            alt="logo do YouTube"
          />
        </Title>
        <S.Video>
          <ReactPlayer
            url={project.video}
            width="100%"
            height="100%"
            controls={true}
            pip
            config={{ file: { forceHLS: true } }}
          />
        </S.Video>
      </S.ContainerVideo>

      <S.DescriptionProject>
      <Title>
          Contributers
          <span>
            <UsersThree /> Project
          </span>
        </Title>
        </S.DescriptionProject>
        <S.Team>
        <S.TeamContent>
          {project.team &&
            project.team.map((team: any) => (
              <S.TeamMember key={team.id}>
                <Image
                  src={team.img}
                  alt={team.name}
                  width={100}
                  height={100}
                />
                <h3>{team.name}</h3>
                <p>{team.role}</p>
                <div className="social-links">
                  {team.github && (
                    <a href={team.github} target="_blank" rel="noopener noreferrer">
                      <FaGithub size={20} />
                    </a>
                  )}
                  {team.linkedin && (
                    <a href={team.linkedin} target="_blank" rel="noopener noreferrer">
                      <FaLinkedin size={20} />
                    </a>
                  )}
                  {team.twitter && (
                    <a href={team.twitter} target="_blank" rel="noopener noreferrer">
                      <FaTwitter size={20} />
                    </a>
                  )}
                  {team.instagram && (
                    <a href={team.instagram} target="_blank" rel="noopener noreferrer">
                      <FaInstagram size={20} />
                    </a>
                  )}
                  {team.email && (
                    <a href={`mailto:${team.email}`} target="_blank" rel="noopener noreferrer">
                      <FaGoogle size={20} />
                    </a>
                  )}
                  </div>
              </S.TeamMember>
            ))}
        </S.TeamContent>
      </S.Team>

      <Link href={'/#projects'} legacyBehavior>
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
    </S.ProjectContainer>

    <Footer />
  </>;
}

export const getStaticProps: GetStaticProps = async ({ params }: any) => {
  const project = projects.map(project => ({
    id: project.id,
    link: project.url,
    imgUrl: project.img,
    banner: project.banner,
    icon: project.icon,
    title: project.title,
    type: project.type,
    github: project.github,
    web: project.web,
    description: project.description,
    tags: project.tags,
    print: project.print,
    gif: project.gif,
    year: project.year,
    status: project.status,
    video: project.video,
    tech: project.tech,
    backgroundImage: project.backgroundImage,
    blog: project.blog,
    trelloboard: project.trelloboard,
    trelloedit: project.trelloedit,
    team: project.team
  }))

  const idProject = project.find(project => project.link === params.id)

  return {
    props: {
      project: idProject
    },
    revalidate: 10
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking'
  }
}