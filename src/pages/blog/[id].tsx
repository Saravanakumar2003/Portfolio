import { GetServerSideProps } from 'next';
import axios from 'axios';
import createDOMPurify from 'dompurify';
import { JSDOM } from 'jsdom';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { Footer } from '../../components/Footer';
import { ScrollTop } from '../../components/ScrollTop';
import { MarkdownContainer, CenteredContainer } from '../../styles/markdown';
import Link from 'next/link';
import { ButtonSecondary } from '../../styles/styles';
import { ArrowLeft } from 'phosphor-react';
import { useTranslation } from 'react-i18next'
import { useEffect, useState } from 'react'

interface BlogProps {
  htmlContent: string;
}

export default function BlogDetail({ htmlContent }: BlogProps) {
  const router = useRouter();
  const { id } = router.query;
  const { t, i18n } = useTranslation('common'); // Use the 'common' namespace
  const [currentLang, setCurrentLang] = useState<'en' | 'ta'>('en');

  useEffect(() => {
    const { locale } = router;
    setCurrentLang(locale as 'en' | 'ta');
  }, [router.locale]);

  return (
    <>
      <Head>
        <title>Saravanakumar's Blogs || {id}</title>
      </Head>
      <ScrollTop />
      <br /> <br /> <br />
      <MarkdownContainer dangerouslySetInnerHTML={{ __html: htmlContent }} />
      <CenteredContainer>
        <Link href={'/blog'} legacyBehavior>
          <ButtonSecondary>
            <a>
              <ArrowLeft
                style={{ marginBottom: '-0.2rem' }}
                weight="bold"
                size={18}
              />{' '}
              {currentLang === 'ta' ? 'திரும்பி செல்' : 'Go Back'}
            </a>
          </ButtonSecondary>
        </Link>
      </CenteredContainer>
      <Footer />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params;

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

    // Remove the specific parts of the code
    const specificPart1 = document.querySelector('.relative.z-20.mb-8.flex.flex-row.flex-wrap.items-center.justify-center.px-4.md\\:-mt-7.md\\:mb-14.md\\:text-lg.last\\:md\\:mb-10');
    if (specificPart1) specificPart1.remove();

    const specificPart2 = document.querySelector('.mt-6.break-words.px-4.text-center.font-heading.text-3xl.font-bold.text-slate-900.dark\\:text-white.md\\:mt-10.md\\:px-5.md\\:text-4xl.lg\\:px-8.xl\\:px-20.xl\\:text-5xl.mb-8.md\\:mb-14');
    if (specificPart2) specificPart2.remove();

    const specificPart3 = document.querySelector('.mb-5.flex.w-full.flex-row.flex-wrap.justify-center.md\\:mb-0');
    if (specificPart3) specificPart3.remove();

    const specificPart4 = document.querySelector('.flex.flex-row.items-center.rounded-lg.border.border-slate-300.bg-white.p-4.text-slate-800.shadow-lg.dark\\:border-white.dark\\:bg-slate-800.dark\\:text-slate-300');
    if (specificPart4) specificPart4.remove();

    // Get the sanitized HTML content
    const htmlContent = DOMPurify.sanitize(document.body.innerHTML);

    return {
      props: {
        htmlContent,
      },
    };
  } catch (error) {
    console.error('Error fetching blog content:', error);
    return {
      notFound: true,
    };
  }
};