import Link from 'next/link'
import Image from 'next/image'
import { AllContainer, AllContent, Cubo } from './styles'
import { ButtonAlt } from '../../../styles/styles'
import { AiOutlineAppstore } from 'react-icons/ai'

interface AllContent {
  title: string
}

export function AllBlogs({ title }: AllContent) {
  return <>
    <AllContainer>
      <h4>{title}</h4>
      <AllContent>
        <Link href={'/blog'} legacyBehavior>
          <ButtonAlt>
            Blogs <AiOutlineAppstore size={20} />
          </ButtonAlt>
        </Link>

        <Cubo>
          <div className="stage-cube-cont">
            <div className="cubespinner">
              <div className="face1">
                <Image
                  width={72}
                  height={72}
                  src="/skills/html.svg"
                  alt="Html"
                />
              </div>
              <div className="face2">
                <Image
                  width={72}
                  height={72}
                  src="/skills/css.svg"
                  alt="Css"
                />
              </div>
              <div className="face3">
                <Image
                  width={72}
                  height={72}
                  src="/skills/javascript.svg"
                  alt="JavaScript"
                />
              </div>
              <div className="face4">
                <Image
                  width={72}
                  height={72}
                  src="/icons/unity2.png"
                  alt="Unity"
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
  </>;
}
