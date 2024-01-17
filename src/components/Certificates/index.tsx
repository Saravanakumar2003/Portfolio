/* eslint-disable @next/next/no-img-element */ 
import Image from 'next/image'
import Link from 'next/link'
import certificates from '../../data/certificates'
import certificate_img from '../../data/certificate_img'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'
import { Title } from '../../styles/styles'
import * as S from './styles'
import { GraduationCap } from 'phosphor-react'

export function Certificates() {
  return (
    <S.ContainerEducation>
      <Title>
        Highlights
        <span>
          <GraduationCap /> Certification
        </span>
      </Title>
      <S.EducationContent>
        <S.EducationList>
          {certificates &&
            certificates.map(certificates => {
              return (
                <S.List key={certificates.id}>
                  <S.ListImage>
                    <img src={certificates.logo} alt={certificates.subTitle} />
                    <p>
                      Date: <span>{certificates.level} </span>
                    </p>
                    <p>
                      Status: <span>{certificates.status}</span>
                    </p>
                  </S.ListImage>

                  <S.ListContent>
                    <h2>{certificates.title}</h2>
                    <h3>
                      <Link href={certificates.link} target="_blank">

                        {certificates.subTitle}

                      </Link>
                    </h3>
                    <p>{certificates.description}</p>
                  </S.ListContent>
                </S.List>
              );
            })}
        </S.EducationList>

        <S.EducationImage>
          <img
            className="education-logo"
            src="/education/education.svg"
            alt="menino no computador"
          />

          <Carousel
            autoPlay={true}
            infiniteLoop={true}
            showStatus={false}
            showIndicators={false}
            showThumbs={false}
            interval={1500}
          >
            {certificate_img &&
              certificate_img.map(certificate_img => {
                return (
                  <Image
                    width={500}
                    height={300}
                    className="carousel"
                    key={certificate_img.id}
                    src={certificate_img.image}
                    alt={certificate_img.name}
                  />
                  )
              })}
          </Carousel>
        </S.EducationImage>
      </S.EducationContent>
    </S.ContainerEducation>
  );
}
