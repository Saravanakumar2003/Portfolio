import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import projects from '../../data/projects';
import { AllBlogs } from './Blogs';
import { ProjectsContainer, ProjectsContent, TagButton } from './styles';
import { Container, Title } from '../../styles/styles';
import { HiOutlineDesktopComputer } from 'react-icons/hi';

interface Projects {
  slug: string;
  url: string;
  title: string;
  type: string;
  img: string;
}

export function Projects() {
  const [selectedTags, setSelectedTags] = useState<string[]>(['All']);
  const tags = ['All', ...new Set(projects.flatMap(project => project.tags.map(tag => tag.name)))];

  /* For Multiple Selection
  const toggleTag = (tag: string) => {
    setSelectedTags(tags =>
      tags.includes(tag) ? tags.filter(t => t !== tag) : [...tags, tag]
    );
  }; 
  */
  const toggleTag = (tag: string) => {
    setSelectedTags([tag]);
  };

  return (
    <Container id="projects">
      <Title>
        Works
        <span>
          <HiOutlineDesktopComputer />Project
        </span>
        <img className="vector" width={100} height={100} src="/vectors/code.svg" alt="project" />
      </Title>

      <div style={{
        marginBottom: '2rem',
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        gap: '0.5rem'

      }}
      className="tag-selection">
      {tags.map(tag => (
        <TagButton
          key={tag}
          selected={selectedTags.includes(tag)}
          onClick={() => toggleTag(tag)}
        >
          {tag}
        </TagButton>
      ))}
      </div>

      <ProjectsContainer>
      {projects
        .filter(project =>
          selectedTags.includes('All') || project.tags.some(tag => selectedTags.includes(tag.name))
        )
        .slice(0, 9)
          .map(project => (
            <Link href={`/project/${project.url}`} key={project.id}>
              <ProjectsContent>
                <Image width={400} height={210} src={project.img} alt={project.title} />
                <div className="title">
                  <h2>{project.title}</h2>
                  <span>{project.type}</span>
                  <div className="tags">
                    {project.tags.map(tag => (
                      <Image width={32} height={32} key={tag.name} src={tag.icon} alt={tag.name} />
                    ))}
                  </div>
                </div>
              </ProjectsContent>
            </Link>
          ))}
      </ProjectsContainer>

      <AllBlogs title={'Read all of my Blogs'} />
    </Container>
  );
}