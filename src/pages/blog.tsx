import { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import blog from '../data/blogs'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { ScrollTop } from '../components/ScrollTop'
import * as S from '../styles/Blogs'
import * as T from '../styles/styles'
import { HiOutlineDesktopComputer } from 'react-icons/hi'
import { FaSearch } from 'react-icons/fa'
import { ArrowRight } from 'phosphor-react'

interface BlogProps {
  target: HTMLInputElement
}

export default function Blog() {
  const [query, setQuery] = useState('')

  const handleChange = (e: BlogProps) => {
    setQuery(e.target.value)
  }

  const blogFilter = blog.filter(blog =>
    blog.title.toLowerCase().includes(query.toLowerCase())
  )

  return <>
    <Head>
      <title>Blogs | Saravanakumar </title>
      <meta property="og:title" content="Projects | Saravanakumar" />
    </Head>

    <Header />
    <ScrollTop />
    <T.Section>
      <T.Title>
        <p>../blogs</p>
        Posts
        <span>
          <HiOutlineDesktopComputer />Blog
        </span>
      </T.Title>
      <T.Description>
      My blogs are powered by Hashnode website. If you click on "View Blog", you'll be redirected to Hashnode Blog Site. In order to like or comment you need to login!
      </T.Description>

      <S.BlogContainer>
        <S.BlogContent>
          <div className="search">
            <p>Search by Blog name</p>

            <div className="input">
              <input
                type="text"
                name="search"
                placeholder="Type here..."
                value={query}
                onChange={handleChange}
              />
              <FaSearch />
            </div>
          </div>

          {!blogFilter.length && (
            <h3 className="not-found">Blog not found 🙁</h3>
          )}

          {blogFilter.map(blog => {
            return <>  
            <div className="border" key={blog.id} />   
              <S.BlogItem>
                <div className="banner">
                  <Image
                    width={500}
                    height={300}
                    src={blog.img}
                    alt={blog.title}
                  />
                </div>

                <div>
                  <div className="title">
                    <h2>{blog.title}</h2>
                  </div>
                  <div className="description">
                    <p>{blog.description}</p>
                    <p className="date">Date Published : {blog.date}</p>
                    <p className="read">Reading Time : {blog.read}</p>

                    <div className="tags">
                      {blog.tags.map(tag => {
                        return <span key={tag.name}>{tag.name}</span>
                      })}
                    </div>
                  </div>
                  <Link href={blog.url}>
                    <T.ButtonAlternatives>
                      View Blog
                      <ArrowRight
                        style={{
                          marginBottom: '-0.1rem',
                        }}
                        weight="bold"
                        size={16}
                      />
                    </T.ButtonAlternatives>
                  </Link>
                </div>
              </S.BlogItem>
            </>;
          })}

          <p className="github">
          Hey, hey, hey... I have even more on {' '}
            <a
              href="https://saravanakumar2003.hashnode.dev/"
            >
              here{' '}
            </a>
            !!
          </p>
        </S.BlogContent>
      </S.BlogContainer>
    </T.Section>
    <script src="https://cdn.botpress.cloud/webchat/v1/inject.js"></script>
    <script src="https://mediafiles.botpress.cloud/7d24b661-c169-4cd5-9dd2-671b3cb8ec48/webchat/config.js" defer></script>
    <Footer />
  </>;
}
