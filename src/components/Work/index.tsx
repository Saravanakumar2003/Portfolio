import Link from 'next/link'
import work from '../../data/works'
import { Container, Title } from '../../styles/styles'
import { WorkContainer, WorkContent } from './styles'
import { AiOutlineRightCircle } from 'react-icons/ai'
import { BiBarChartSquare } from 'react-icons/bi'

export function Work() {
  return (
    <Container id="work">
      <Title>
      Journey
        <span>
          <BiBarChartSquare />Volunteering
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
                  Learn more<AiOutlineRightCircle />

                </Link>
              </button>
            </WorkContent>
          );
        })}
      </WorkContainer>
    </Container>
  );
}
