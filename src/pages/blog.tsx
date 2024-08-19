import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import blog from '../data/blogs';
import { Footer } from '../components/Footer';
import { ScrollTop } from '../components/ScrollTop';
import * as S from '../styles/Blogs';
import { FiltersContainer, BButton} from '../styles/Blogs';
import * as T from '../styles/styles';
import { HiOutlineDesktopComputer } from 'react-icons/hi';
import { FaSearch } from 'react-icons/fa';
import { ArrowRight } from 'phosphor-react';
import { Publications } from '../components/Publications';
import { Button } from '@mantine/core';

const botkey = process.env.NEXT_PUBLIC_BOTKEY_URL;

interface BlogProps {
  target: HTMLInputElement;
}

export default function Blog() {
  const [query, setQuery] = useState('');
  const [sortCriteria, setSortCriteria] = useState('date'); // Default sorting by date
  const [selectedCategory, setSelectedCategory] = useState(''); // Default no category selected
  const [startDate, setStartDate] = useState(''); // Start date for filtering
  const [endDate, setEndDate] = useState(''); // End date for filtering
  const [readTime, setReadTime] = useState(''); // Single read time for filtering

  const handleChange = (e: BlogProps) => {
    setQuery(e.target.value);
  };

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortCriteria(e.target.value);
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(e.target.value);
  };

  const handleStartDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStartDate(e.target.value);
  };

  const handleEndDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEndDate(e.target.value);
  };

  const handleReadTimeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setReadTime(e.target.value);
  };

  const handleClearFilters = () => {
    setQuery('');
    setSortCriteria('date');
    setSelectedCategory('');
    setStartDate('');
    setEndDate('');
    setReadTime('');
  };

  // console.log('Initial Blogs:', blog);

  const filteredBlogs = blog
    .filter(blog => {
      const matchesQuery = blog.title.toLowerCase().includes(query.toLowerCase());
      // console.log(`Blog "${blog.title}" matches query "${query}":`, matchesQuery);
      return matchesQuery;
    })
    .filter(blog => {
      const matchesCategory = selectedCategory === '' || blog.tags.some(tag => tag.name === selectedCategory);
      // console.log(`Blog "${blog.title}" matches category "${selectedCategory}":`, matchesCategory);
      return matchesCategory;
    })
    .filter(blog => {
      const [day, month, year] = blog.date.split('/').map(Number);
      const blogDate = new Date(year, month - 1, day).getTime();
      const start = startDate ? new Date(startDate).getTime() : -Infinity;
      const end = endDate ? new Date(endDate).getTime() : Infinity;
      const matchesDate = blogDate >= start && blogDate <= end;
      // console.log(`Blog "${blog.title}" matches date range "${startDate}" to "${endDate}":`, matchesDate);
      return matchesDate;
    })
    .filter(blog => {
      const readTimeValue = parseInt(blog.read);
      const readTimeFilter = readTime ? parseInt(readTime) : -Infinity;
      const matchesReadTime = readTimeFilter === -Infinity || readTimeValue === readTimeFilter;
      // console.log(`Blog "${blog.title}" matches read time "${readTime}":`, matchesReadTime);
      return matchesReadTime;
    });

  // console.log('Filtered Blogs:', filteredBlogs);

  const sortedBlogs = filteredBlogs.sort((a, b) => {
    if (sortCriteria === 'date') {
      const [dayA, monthA, yearA] = a.date.split('/').map(Number);
      const [dayB, monthB, yearB] = b.date.split('/').map(Number);
      return new Date(yearB, monthB - 1, dayB).getTime() - new Date(yearA, monthA - 1, dayA).getTime();
    }
    return a.title.localeCompare(b.title);
  });

  // console.log('Sorted Blogs:', sortedBlogs);

  return (
    <>
      <Head>
        <title>Blogs | Saravanakumar </title>
        <meta property="og:title" content="Projects | Saravanakumar" />
      </Head>

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
          My blogs are powered by Hashnode website. If you click on "View Blog", you'll be redirected to Hashnode Blog Site. In order to like or comment you need to login on Hashnode!
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

            <FiltersContainer>
              <select onChange={handleSortChange} value={sortCriteria}>
                <option value="date">Sort by Date</option>
                <option value="title">Sort by Title</option>
              </select>

              <select onChange={handleCategoryChange} value={selectedCategory}>
                <option value="">All Categories</option>
                {Array.from(new Set(blog.flatMap(blog => blog.tags.map(tag => tag.name)))).map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>

              <div className="date-filters">
                <label>
                  From:
                  <input type="date" value={startDate} onChange={handleStartDateChange} />
                </label>
                <label>
                  To:
                  <input type="date" value={endDate} onChange={handleEndDateChange} />
                </label>
              </div>

              <div className="read-time-filters">
                <label>
                  Read Time:
                  <select onChange={handleReadTimeChange} value={readTime}>
                    <option value="">All Read Times</option>
                    {Array.from(new Set(blog.map(blog => blog.read))).map(time => (
                      <option key={time} value={time}>{time}</option>
                    ))}
                  </select>
                </label>
              </div>
            </FiltersContainer>

            <BButton onClick={handleClearFilters}>
              Clear Filters
            </BButton>

            {!sortedBlogs.length && (
              <h3 className="not-found">Blog not found 🙁</h3>
            )}

            {sortedBlogs.map(blog => (
              <div key={blog.id}>
                <div className="border" />
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
                        {blog.tags.map(tag => (
                          <span key={tag.name}>{tag.name}</span>
                        ))}
                      </div>
                    </div>
                    <Link href={blog.url}>
                      <T.ButtonAlternatives>
                        View Blog
                        <ArrowRight
                          style={{ marginBottom: '-0.1rem' }}
                          weight="bold"
                          size={16}
                        />
                      </T.ButtonAlternatives>
                    </Link>
                  </div>
                </S.BlogItem>
              </div>
            ))}

            <p className="github">
              Hey, hey, hey... I have even more on{' '}
              <a href="https://saravanakumar2003.hashnode.dev/">here</a>!!
            </p>
          </S.BlogContent>
        </S.BlogContainer>
      </T.Section>
      <Publications />
      <script src="https://cdn.botpress.cloud/webchat/v1/inject.js"></script>
      <script src={botkey} defer></script>
      <Footer />
    </>
  );
}