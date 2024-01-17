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
  };

  useEffect(() => {
    setLoading(true);
    fetchTotalCommits();
    fetchData();
  }, []);

  return (
    <section>
    <Container px="xl" size="lg" style={{ 
      alignContent: "center", 
      alignItems: "center", 
      justifyContent: "center", 
      textAlign: "center" 
    }}>
      <BoxWrapper withBackground={false}>
        <Title style={{fontSize: '2rem', textAlign: 'center'}} order={1}
        >
          {github.contribution}
        </Title>
        <BoxWrapper withBackground={true} style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '250px',
            width: '500px',
            textAlign: 'center',      
          }}>
          <GitHubCalendar
            username={GITHUB_USERNAME}
            blockSize={15}
            blockMargin={5}
            fontSize={16}
            style={{ 
              
            }}
          />
        </BoxWrapper>
      </BoxWrapper>
    </Container>
    </section>
  );
}