import { GetServerSideProps } from 'next';
import axios from 'axios';
import createDOMPurify from 'dompurify';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Script from 'next/script';
import { Footer } from '../../components/Footer';
import { ScrollTop } from '../../components/ScrollTop';
import { NewsletterForm } from '../../components/Newsletter';
import { MainContainer, GiscusContainer, MarkdownContainer, CenteredContainer, TextContainer, Tag, TOCContainer, TOCList, TOCItem, InfoContainer, InfoItem } from '../../styles/markdown';
import Link from 'next/link';
import { ButtonSecondary } from '../../styles/styles';
import { ArrowLeft } from 'phosphor-react';
import { useTranslation } from 'react-i18next';
import { useEffect, useState, useRef } from 'react';
import Giscus from '@giscus/react';
import TextToSpeechPlayer from '../../components/TTS/TextToSpeechPlayer';
import blogData from '../../data/blogs';
import { JSDOM } from 'jsdom';

interface BlogProps {
  htmlContent: string;
  title: string;
  date: string;
  readTime: string;
  tags: { name: string }[];
  discussions: any[];
}

export default function BlogDetail({ htmlContent, title, date, readTime, tags, discussions }: BlogProps) {
  const router = useRouter();
  const { id } = router.query;
  const { t, i18n } = useTranslation('common');
  const [currentLang, setCurrentLang] = useState<'en' | 'ta'>('en');
  const [toc, setToc] = useState<{ id: string; text: string; level: number }[]>([]);

  const contentRef = useRef<HTMLDivElement>(null);

  const kitkey = process.env.NEXT_PUBLIC_KITKEY_URL;

  useEffect(() => {
    const { locale } = router;
    setCurrentLang(locale as 'en' | 'ta');
  }, [router.locale]);

  useEffect(() => {
    const generateTOC = (htmlContent: string) => {
      const toc: { id: string; text: string; level: number }[] = [];
      const parser = new DOMParser();
      const doc = parser.parseFromString(htmlContent, 'text/html');
      const headings = doc.querySelectorAll('h1, h2');
      headings.forEach((heading) => {
        toc.push({
          id: heading.id,
          text: heading.textContent || '',
          level: parseInt(heading.tagName.substring(1)),
        });
      });
      return toc;
    };

    setToc(generateTOC(htmlContent));
  }, [htmlContent]);

  const audioSrc = `/tts/blog${id}.mp3`; // Construct the audioSrc using the blog ID

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <ScrollTop />
      <MainContainer>
        <br /><br />
        <TextContainer>
          <h1>{title}</h1>
          <InfoContainer>
            <InfoItem>Date Published: {date}</InfoItem>
            <InfoItem>Read Time: {readTime}</InfoItem>
          </InfoContainer>
          <div>
            {tags.map((tag) => (
              <Tag key={tag.name}>{tag.name}</Tag>
            ))}
          </div>
        </TextContainer>
        <TOCContainer>
          <h2>Table of Contents</h2>
          <TOCList>
            {toc.map((item) => (
              <TOCItem key={item.id} level={item.level}>
                <a href={`#${item.id}`}>{item.text}</a>
              </TOCItem>
            ))}
          </TOCList>
        </TOCContainer>
        <TextToSpeechPlayer contentRef={contentRef} audioSrc={audioSrc} />
        <MarkdownContainer ref={contentRef} dangerouslySetInnerHTML={{ __html: htmlContent }} />
        <GiscusContainer>
          <Giscus
            repo="Saravanakumar2003/Portfolio"
            repoId="R_kgDOLFzyGQ"
            category="Blog"
            categoryId="DIC_kwDOLFzyGc4Ckx5G"
            mapping="specific"
            term={`Blog Post ID: ${id}`}
            reactionsEnabled="1"
            emitMetadata="0"
            inputPosition="top"
            theme="dark"
            lang="en"
            loading="lazy"
          />
        </GiscusContainer>
        <NewsletterForm />
        <CenteredContainer>
          <Link href={'/blog'} legacyBehavior>
            <ButtonSecondary>
              <a>
                <ArrowLeft style={{ marginBottom: '-0.2rem' }} weight="bold" size={18} />{' '}
                {currentLang === 'ta' ? 'திரும்பி செல்' : 'Go Back'}
              </a>
            </ButtonSecondary>
          </Link>
        </CenteredContainer>
      </MainContainer>
      <Footer />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params as { id: string };

  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/blog/${id}`);
    const { markdownContent } = response.data;

    if (!markdownContent) {
      return {
        notFound: true,
      };
    }

    // Create a DOMPurify instance
    const window = new JSDOM('').window;
    const DOMPurify = createDOMPurify(window);

    // Parse the HTML content
    const dom = new JSDOM(markdownContent);
    const document = dom.window.document;

    // Remove the header and footer elements
    const header = document.querySelector('header');
    const footer = document.querySelector('footer');
    if (header) header.remove();
    if (footer) footer.remove();

    const firstH1 = document.querySelector('h1');
    if (firstH1) {
      let currentNode = firstH1.previousSibling;
      while (currentNode) {
        const previousNode = currentNode.previousSibling;
        currentNode.remove();
        currentNode = previousNode;
      }
      firstH1.remove();
    }

    const title = firstH1 ? firstH1.textContent : "Saravanakumar's Blogs";

    // Remove the specific parts of the code
    const specificPart1 = document.querySelector(
      '.relative.z-20.mb-8.flex.flex-row.flex-wrap.items-center.justify-center.px-4.md\\:-mt-7.md\\:mb-14.md\\:text-lg.last\\:md\\:mb-10'
    );
    if (specificPart1) specificPart1.remove();

    const specificPart2 = document.querySelector(
      '.mt-6.break-words.px-4.text-center.font-heading.text-3xl.font-bold.text-slate-900.dark\\:text-white.md\\:mt-10.md\\:px-5.md\\:text-4xl.lg\\:px-8.xl\\:px-20.xl\\:text-5xl.mb-8.md\\:mb-14'
    );
    if (specificPart2) specificPart2.remove();

    const specificPart3 = document.querySelector('.mb-5.flex.w-full.flex-row.flex-wrap.justify-center.md\\:mb-0');
    if (specificPart3) specificPart3.remove();

    const specificPart4 = document.querySelector(
      '.flex.flex-row.items-center.rounded-lg.border.border-slate-300.bg-white.p-4.text-slate-800.shadow-lg.dark\\:border-white.dark\\:bg-slate-800.dark\\:text-slate-300'
    );
    if (specificPart4) specificPart4.remove();

    // Get the sanitized HTML content
    const htmlContent = DOMPurify.sanitize(document.body.innerHTML);

    // Fetch additional blog data
    const blog = blogData.find((b) => b.id.toString() === id);
    if (!blog) {
      return {
        notFound: true,
      };
    }

    return {
      props: {
        htmlContent,
        title: blog.title.en,
        date: blog.date.en,
        readTime: blog.read.en,
        tags: blog.tags,
      },
    };
  } catch (error) {
    console.error('Error fetching blog content:', error);
    return {
      notFound: true,
    };
  }
};