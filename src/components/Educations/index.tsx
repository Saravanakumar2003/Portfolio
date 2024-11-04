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
import { useTranslation } from 'react-i18next'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export function Educations() {
  const { t, i18n } = useTranslation('common');
  const router = useRouter();
  const [currentLang, setCurrentLang] = useState<'en' | 'ta'>('en');

  useEffect(() => {
    const { locale } = router;
    setCurrentLang(locale as 'en' | 'ta');
  }, [router.locale]);

  return (
    <S.ContainerEducation>
      <Title>
        {currentLang === 'ta' ? 'முக்கிய நிகழ்வுகள்' : 'Highlights'}
        <span>
          <GraduationCap /> {currentLang === 'ta' ? 'சான்றிதழ்' : 'Certification'}
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
                      {currentLang === 'ta' ? 'தேதி:' : 'Date:'} <span>{certificates.level} </span>
                    </p>
                    <p>
                      {currentLang === 'ta' ? 'நிலை:' : 'Status:'} <span>{certificates.status}</span>
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
            alt={currentLang === 'ta' ? 'கணினியில் சிறுவன்' : 'boy on computer'}
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
                    loading="lazy"
                  />
                )
              })}
          </Carousel>
        </S.EducationImage>
      </S.EducationContent>
    </S.ContainerEducation>
  );
}