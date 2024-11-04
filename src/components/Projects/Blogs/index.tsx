import Link from 'next/link'
import Image from 'next/image'
import { AllContainer, AllContent, Cubo } from './styles'
import { ButtonAlt } from '../../../styles/styles'
import { AiOutlineAppstore } from 'react-icons/ai'
import { useTranslation } from 'react-i18next'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

interface AllContent {
  title: string
}

export function AllBlogs({ title }: AllContent) {
  const { t, i18n } = useTranslation('common');
  const router = useRouter();
  const [currentLang, setCurrentLang] = useState<'en' | 'ta'>('en');

  useEffect(() => {
    const { locale } = router;
    setCurrentLang(locale as 'en' | 'ta');
  }, [router.locale]);

  return (
    <AllContainer>
      <h4>{title}</h4>
      <AllContent>
        <Link href={'/blog'} legacyBehavior>
          <ButtonAlt>
            {currentLang === 'ta' ? 'வலைப்பதிவுகள்' : 'Blogs'} <AiOutlineAppstore size={20} />
          </ButtonAlt>
        </Link>

        <Cubo>
          <div className="stage-cube-cont">
            <div className="cubespinner">
              <div className="face1">
                <Image
                  width={72}
                  height={72}
                  src="/icons/HTML.png"
                  alt="Html"
                />
              </div>
              <div className="face2">
                <Image
                  width={72}
                  height={72}
                  src="/icons/CSS.png"
                  alt="Css"
                />
              </div>
              <div className="face3">
                <Image
                  width={72}
                  height={72}
                  src="/icons/JS.png"
                  alt="JavaScript"
                />
              </div>
              <div className="face4">
                <Image
                  width={72}
                  height={72}
                  src="/icons/python.png"
                  alt="Python"
                />
              </div>
              <div className="face5">
                <Image
                  width={72}
                  height={72}
                  src="/icons/TS.png"
                  alt="TypeScript"
                />
              </div>
              <div className="face6">
                <Image
                  width={72}
                  height={72}
                  src="/icons/Azure.png"
                  alt="Azure"
                />
              </div>
            </div>
          </div>
        </Cubo>
      </AllContent>
    </AllContainer>
  );
} 