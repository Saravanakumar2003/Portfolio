import { Code } from "phosphor-react";
import Image from 'next/image';
import { Container, Title } from '../../styles/styles';
import { Figure, Box } from "./style";
import { useTranslation } from 'react-i18next'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export function Wakatime() {
  const { t, i18n } = useTranslation('common');
  const router = useRouter();
  const [currentLang, setCurrentLang] = useState<'en' | 'ta'>('en');

  useEffect(() => {
    const { locale } = router;
    setCurrentLang(locale as 'en' | 'ta');
  }, [router.locale]);

  const currentDate = new Date();
  const lastWeekDate = new Date();
  lastWeekDate.setDate(currentDate.getDate() - 7);

  return (
    <Container>
      <Title>
        {currentLang === 'ta' ? 'புள்ளிவிவரங்கள்' : 'Stats'}
        <span>
          <Code /> {currentLang === 'ta' ? 'கோடிங்' : 'Coding'}
        </span>
      </Title>

      <div style={{
        margin: '2rem 0',
      }}>
        <h1 style={{ textAlign: "center" }}>
          {currentLang === 'ta' ? 'எனது கோடிங் புள்ளிவிவரங்கள்' : 'My coding stats from'}
        </h1>
        <div style={{
          border: '2px solid lightblue',
          borderRadius: '8px',
          padding: '0.5rem',
          textAlign: 'center',
          width: 'fit-content',
          margin: '1rem auto',
          fontWeight: 'bold',
        }}>
          {` ${lastWeekDate.toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' })} to ${currentDate.toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' })}`}
        </div>
      </div>

      <Figure>
        <iframe
          src="https://wakatime.com/share/@Saravanakumar2003/329dcf8c-6405-44e8-9355-32c07448883c.svg"
          width="500"
          height="300">
        </iframe>
        <iframe
          src="https://wakatime.com/share/@Saravanakumar2003/ef787f7e-ed82-45f6-86d7-021ed9c6859d.svg"
          width="500"
          height="300">
        </iframe>
      </Figure>

      <h1 style={{
        margin: '2rem 0',
      }}>{currentLang === 'ta' ? 'குறியீட்டு தளங்கள்,' : 'Coding Platforms,'} <br /> {currentLang === 'ta' ? 'நீங்கள் என்னை இதில் காணலாம்:' : 'you can find me on:'}</h1>

      <Box>
        <a href="http://www.skillrack.com/profile/381703/7d59d9d0ed57993adcca4f71e60bcc308c4abf09" target="_blank" rel="noopener noreferrer">
          <img
            src="https://custom-icon-badges.demolab.com/badge/-SkillRack-0000FF?style=for-the-badge&logo=skillrack&logoColor=0000FF&labelColor=black"
            alt="SkillRack badge"
            width={150}
            height={30}
          />
        </a>

        <a href="https://www.hackerrank.com/profile/Saravana2003" target="_blank" rel="noopener noreferrer">
          <img
            src="https://img.shields.io/badge/-Hackerrank-00c353?style=for-the-badge&logo=HackerRank&logoColor=00EA64&labelColor=black"
            alt="Hackerrank badge"
            width={150}
            height={30}
          />
        </a>

        <a href="https://leetcode.com/Saravana2003/" target="_blank" rel="noopener noreferrer">
          <img
            src="https://img.shields.io/badge/-LeetCode-da8200?style=for-the-badge&logo=LeetCode&logoColor=ffa116&labelColor=black"
            alt="LeetCode badge"
            width={150}
            height={30}
          />
        </a>
      </Box>
    </Container>
  );
}