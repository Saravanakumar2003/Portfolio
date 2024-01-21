import { useEffect, useState } from "react";
// Mantine
import {
  Avatar,
  Box,
  Center,
  Container,
  Group,
  Skeleton,
  Text,
  Title,
} from "@mantine/core";
import { Grid } from "@mantine/core";
import { createStyles } from "@mantine/styles";
import { useMediaQuery } from "@mantine/hooks";
// Components
import GitHubCalendar from "react-github-calendar";
import BoxWrapper from "./BoxWrapper";
// _mock & config
import { GITHUB_USERNAME } from "../config";
import github from "../../data/github.json";
import styled from 'styled-components';

// ----------------------------------------------------------------------------

const useStyles = createStyles((theme) => ({
  icon: {
  },

  name: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
  },
}));

type GithubUser = {
  login: string;
  avatar_url: string;
  bio: string;
  blog: string;
  company: string;
  created_at: string;
  followers: number;
  followers_url: string;
  following: number;
  following_url: string;
  html_url: string;
};


export default function Github() {
  const [user, setUser] = useState<GithubUser>();
  const { classes } = useStyles();
  const [loading, setLoading] = useState(true);
  const [totalCommits, setTotalCommits] = useState(0);
  const [totalStars, setTotalStars] = useState(0);
  const matches = useMediaQuery("(min-width: 630px)");

  const fetchData = async () => {
    const res = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}`);
    const data = await res.json();
    setUser(data);
    setLoading(false);
  };

  const fetchTotalCommits = async () => {
    const res = await fetch(
      `https://github-contributions-api.jogruber.de/v4/${GITHUB_USERNAME}?y=all`
    );
    const data: { total: Object } = await res.json();
    let total = Object.values(data.total).reduce((a: any, b: any) => a + b, 0);
    setTotalCommits(total);

    const res2 = await fetch(
      `https://api.github.com/users/${GITHUB_USERNAME}/repos`
    );
    const data2 = await res2.json();
    let stars = data2.reduce((a: any, b: any) => a + b.stargazers_count, 0);
    setTotalStars(stars);
  };

  useEffect(() => {
    setLoading(true);
    fetchTotalCommits();
    fetchData();
  }, []);

  const BoxWrapper = styled.div<{ withBackground: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  margin: 1rem;
  background: ${({ withBackground }) => withBackground ? '#f2f2f2' : 'transparent'};
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);

  @media (max-width: 630px) {
    margin: 0.5rem;
  }

  @media (max-width: 450px) {
    margin: 0.25rem;
  }

  @media (max-width: 350px) {
    margin: 0.125rem;
  }

  @media (max-width: 300px) {
    margin: 0.0625rem;
  }
`;

const Text = styled.p`
  font-size: 1rem;
  font-weight: 200;
  margin: 0.5rem;
  text-align: center;
  color: white;

  @media (max-width: 630px) {
    font-size: 0.8rem;
  }

  @media (max-width: 450px) {
    font-size: 0.7rem;
  }

  @media (max-width: 350px) {
    font-size: 0.5rem;
  }

  @media (max-width: 300px) {
    font-size: 0.2rem;
  }
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  margin: 0.5rem;
  text-align: center;
  color: white;

  @media (max-width: 630px) {
    font-size: 0.9rem;
    font-weight: 600;
  }

  @media (max-width: 450px) {
    font-size: 0.8rem;
    font-weight: 500;
  }

  @media (max-width: 350px) {
    font-size: 0.75rem;
    font-weight: 400;
  }
`;


  return (
    <section>
    <Container>
        <BoxWrapper withBackground={true} style={{ flexDirection: "row"}}>
        <BoxWrapper withBackground={true} style={{
            flexDirection: 'row',
            backgroundColor: 'black',
            color: 'white',
            textEmphasisColor: 'white',
            borderRadius: '10px',
            padding: '1rem',
          }}>
          <img
            src={user?.avatar_url}
            alt="Saravana's Image"
            style={
              {
                height: '200px',
                width: '200px',
                borderRadius: '50%',
                display: 'block',
                marginLeft: '10px',
                marginRight: '10px',
              }
            }
          />    
        <div className="aboutDescription">
        <Title>
          {user?.login}
        </Title>

        <Text>
          {user?.bio}
        </Text>

        <Text>
          Total Followers : {user?.followers}
        </Text>

        <Text>
         Total Following : {user?.following}
        </Text>

        <Text>
         Total Stars : {totalStars}
        </Text>
        </div>
        </BoxWrapper>
</BoxWrapper>

<BoxWrapper withBackground={true}>
 <BoxWrapper withBackground={true} style={{
            backgroundColor: 'black',
            color: 'white',
            textEmphasisColor: 'white',
            borderRadius: '10px',
            padding: '1rem',
          }}>
        <Title>
          {github.contribution}
        </Title>
          <BoxWrapper withBackground={true}>
          <GitHubCalendar style={{color: '#000'}}
            username={GITHUB_USERNAME}
            blockSize={matches ? 15 : 5}
            fontSize={matches ? 14 : 7}
            blockMargin={matches ? 5 : 2}
          />
        </BoxWrapper> 
      </BoxWrapper>
    </BoxWrapper>
    </Container>
    </section>
  );
}
