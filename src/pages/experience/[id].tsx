/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { GetStaticProps, GetStaticPaths } from 'next'
import Head from 'next/head'
import experiences1 from '../../data/experiences'
import { Footer } from '../../components/Footer'
import { ButtonAlt, ButtonSecondary, Title, Description } from '../../styles/styles'
import { Experience } from '../../types/Experience'
import { useState } from 'react'

interface ExperienceProps {
    experiences: Experience
}

export default function Experience({ experiences }: ExperienceProps) {
  return <>
    <Head>
      <title>{experiences.title} | Saravanakumar </title>
      <meta name="description" content={experiences.description} />
      <meta property="og:title" content={experiences.title} />
      <meta property="og:description" content={experiences.description} />
      <meta property="og:image" content={experiences.imgUrl} />
      <meta property="og:image:secure_url" content={experiences.imgUrl} />
      <meta name="twitter:image" content={experiences.imgUrl} />
      <meta name="twitter:image:src" content={experiences.imgUrl} />
    </Head>
    
    <Footer />
  </>;
}

export const getStaticProps: GetStaticProps = async ({ params }: any) => {
  const experiences  = experiences1.map(experiences => ({
    id: experiences.id,
    link: experiences.url,
    imgUrl: experiences.img,
    banner: experiences.banner,
    icon: experiences.icon,
    title: experiences.title,
    web: experiences.link,
    description: experiences.description,
    tags: experiences.tags,
    year: experiences.year,
    status: experiences.status,
    video: experiences.video,
    backgroundImage: experiences.backgroundImage,
  }))

const idExperiences = experiences.find(experience => experience.link === params.id)

  return {
    props: {
      experiences: idExperiences
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
