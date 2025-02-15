import Link from 'next/link'
import work from '../../data/works'
import { Container, Title } from '../../styles/styles'
import { WorkContainer, WorkContent } from './styles'
import { AiOutlineRightCircle } from 'react-icons/ai'
import { BiBarChartSquare } from 'react-icons/bi'
import { useTranslation } from 'react-i18next'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export function Work() {
  const { t, i18n } = useTranslation('common');
  const router = useRouter();
  const [currentLang, setCurrentLang] = useState<'en' | 'ta'>('en');

  useEffect(() => {
    const { locale } = router;
    setCurrentLang(locale as 'en' | 'ta');
  }, [router.locale]);

  return (
    <Container id="work">
      <Title>
        {currentLang === 'ta' ? 'பயணம்' : 'Journey'}
        <span>
          <BiBarChartSquare />{currentLang === 'ta' ? 'தன்னார்வம்' : 'Volunteering'}
        </span>
      </Title>

      <WorkContainer>
        {work.map(work => {
          return (
            <WorkContent key={work.id} imgUrl={work.img}>
              <div className="workItem">
                <div className="overlay" />
                <div className="text">
                  <h1>{work.title2}</h1>
                  <h2>{work.title3}</h2>
                </div>
              </div>
              <button type="button">
                <Link href={`/work/${work.url}`}>
                  {currentLang === 'ta' ? 'மேலும் அறிக' : 'Learn more'}<AiOutlineRightCircle />
                </Link>
              </button>
            </WorkContent>
          );
        })}
      </WorkContainer>
    </Container>
  );
}