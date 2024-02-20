/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { GetStaticProps, GetStaticPaths } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { Education } from '../../types/Education'
import education1 from '../../data/education'
import ReactPlayer from 'react-player'
import { Footer } from '../../components/Footer'
import * as S from "../../styles/education";
import { ButtonAlt, ButtonSecondary, Title, Description } from '../../styles/styles'
import { ArrowLeft, ChatCenteredText, Image as IconImage,
YoutubeLogo, Hash } from 'phosphor-react'
import { FaBlog, FaGithub } from 'react-icons/fa'
import { BsGlobe } from 'react-icons/bs'

interface EducationProps {
  education: Education
}

export default function Education({ education }: EducationProps) {
  return <>
    <Head>
      <title>{education.title} | Saravanakumar </title>
      <meta name="description" content={education.description} />
      <meta property="og:title" content={education.title} />
      <meta property="og:description" content={education.description} />
      <meta property="og:image" content={education.imgUrl} />
      <meta property="og:image:secure_url" content={education.imgUrl} />
      <meta name="twitter:image" content={education.imgUrl} />
      <meta name="twitter:image:src" content={education.imgUrl} />
    </Head>

    
    
    
    <Footer />
  </>;
}

export const getStaticProps: GetStaticProps = async ({ params }: any) => {
  const education = education1.map(education => ({
    id: education.id,
    link: education.url,
    imgUrl: education.img,
    banner: education.banner,
    icon: education.icon,
    title: education.title,
    web: education.link,
    description: education.description,
    tags: education.tags,
    year: education.year,
    status: education.status,
    video: education.video,
    backgroundImage: education.backgroundImage,
  }))

  const idEducation = education.find(education => education.link === params.id)

  return {
    props: {
      education: idEducation
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
