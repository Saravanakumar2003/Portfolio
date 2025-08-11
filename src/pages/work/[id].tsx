import { GetStaticProps, GetStaticPaths } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import works from '../../data/works'
import { Work } from '../../types/Work'

import * as S from '../../styles/work'
import { ButtonAlternatives, ButtonSecondary } from '../../styles/styles'
import { Footer } from '../../components/Footer'
import { ArrowLeft } from 'phosphor-react'

interface WorkProps {
  work: Work
}

export default function Projeto({ work }: WorkProps) {
  const router = useRouter()
  const [currentLang, setCurrentLang] = useState<'en' | 'ta'>('en')

  useEffect(() => {
    const { locale } = router
    setCurrentLang(locale as 'en' | 'ta')
  }, [router.locale])

  // Get localized content
  const title = work.title[currentLang]
  const subTitle = work.subTitle[currentLang]
  const description = work.description[currentLang]
  const date = work.date[currentLang]

  return <>
    <Head>
      <title>{title} | Saravanakumar </title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={work.imgUrl} />
      <meta property="og:image:secure_url" content={work.imgUrl} />
      <meta name="twitter:image" content={work.imgUrl} />
      <meta name="twitter:image:src" content={work.imgUrl} />
    </Head>

    <S.WorkContainer>
      <S.WorkBanner imgUrl={work.imgUrl}>
        <div className="bannerImg" />
        <div className="title">
          <h1>{title}</h1>
        </div>
        <h2>{subTitle}</h2>
        <span>{date}</span>
        <p>{description}</p>

        <div className="tags">
          {work.tags.map((tag, index) => {
            return (
              <ul key={index}>
                <Image width={40} height={40} src={tag.icon} alt={tag.name} />
                <p>{tag.name}</p>
              </ul>
            )
          })}
        </div>

        <Link href={'/'}>
          <ButtonAlternatives>
            <ArrowLeft
              style={{
                marginBottom: '-0.1rem'
              }}
              weight="bold"
              size={16}
            />
            {currentLang === 'ta' ? 'திரும்பு' : 'Back'}
          </ButtonAlternatives>
        </Link>
      </S.WorkBanner>

      <S.WorkDescription>
        {work.prints.map((print, index) => {
          const printName = print.name[currentLang]
          const printDescription = print.description[currentLang]
          const printDate = print.date[currentLang]
          const printUrlTitle = print.urltitle?.[currentLang]

          return (
            <S.WorkContent key={index}>
              <div className="workItem">
                <div className="text">
                  <h3>{printName}</h3>
                  <p style={{
                    textAlign: 'justify',
                  }}>{printDescription}</p>
                  <span>
                    {currentLang === 'ta' ? 'தேதி : ' : 'Date : '}{printDate}
                  </span>
                  {print.url && printUrlTitle && (
                    <a href={print.url} style={{
                      textDecorationLine: 'underline',
                      marginBottom: '1rem',
                      display: 'block',
                      marginTop: '0.5rem'
                    }}>{printUrlTitle}</a>
                  )}
                </div>
                <Image
                  width={700}
                  height={400}
                  src={print.image}
                  alt={printName}
                />
              </div>
            </S.WorkContent>
          )
        })}
      </S.WorkDescription>

      <Link href={'/#work'} legacyBehavior>
        <ButtonSecondary>
          <a>
            <ArrowLeft
              style={{ marginBottom: '-0.2rem' }}
              weight="bold"
              size={18}
            />{' '}
            {currentLang === 'ta' ? 'திரும்பு' : 'Back'}
          </a>
        </ButtonSecondary>
      </Link>
    </S.WorkContainer>

    <Footer />
  </>;
}

export const getStaticProps: GetStaticProps = async ({ params }: any) => {
  const work = works.map(work => ({
    id: work.id,
    url: work.url,
    imgUrl: work.img,
    title: work.title,
    title2: work.title2,
    title3: work.title3,
    subTitle: work.subTitle,
    description: work.description,
    tags: work.tags,
    date: work.date,
    prints: work.prints
  }))

  const workId = work.find(work => work.url === params.id)

  return {
    props: {
      work: workId
    },
    revalidate: 60 // 60 seconds
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking'
  }
}