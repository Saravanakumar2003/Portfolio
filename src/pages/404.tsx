import Head from 'next/head'
import Link from 'next/link'
import styled from 'styled-components'
import { ArrowLeft } from 'phosphor-react'
import { ButtonAlt } from '../styles/styles'

const Styles404 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: 1rem;

  @media (min-width: 768px) {
    flex-direction: row;
    margin-top: 5rem;
  }

  img {
    width: 15rem;
    margin-bottom: 3rem;

    @media (min-width: 768px) {
      width: 20rem;
    }

    @media (min-width: 1100px) {
      width: 40rem;
    }
  }
`

const Content = styled.div`
  span {
    color: ${props => props.theme.textSecondary};
    margin-bottom: 1rem;
    font-size: small;

    @media (min-width: 468px) {
      font-size: 1rem;
    }

    @media (min-width: 768px) {
      font-size: 1.5rem;
    }
  }

  h1 {
    color: ${props => props.theme.firstColor};
    margin-bottom: 2rem;
    font-size: 2rem;

    @media (min-width: 768px) {
      font-size: 2.5rem;
    }

    @media (min-width: 1100px) {
      font-size: 3rem;
    }
  }
`

export default function Error() {
  return <>
    <Head>
      <title>404</title>
      <meta name="description" content="Ei! Parece que você está perdido" />
      <meta property="og:title" content="404" />
      <meta
        property="og:description"
        content="Ei! Parece que você está perdido"
      />
    </Head>
    
    <Styles404>
    <img src="/vectors/404.svg" alt="404" width={500} height={300}/>
      <Content>
        <span>Hey! Looks like you are lost :((</span>
        <h1>
          {' '}
          404 <br /> Page not found
        </h1>
        <Link href={'/'} legacyBehavior>
          <ButtonAlt>
            <ArrowLeft weight="bold" size={18} />
            Go Back
          </ButtonAlt>
        </Link>
      </Content>
    </Styles404>
    <script src="https://cdn.botpress.cloud/webchat/v1/inject.js"></script>
    <script src="https://mediafiles.botpress.cloud/7d24b661-c169-4cd5-9dd2-671b3cb8ec48/webchat/config.js" defer></script>
  </>;
}
