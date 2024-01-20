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

  return (
    <section>
    <Container style=
    {{ 
      borderRadius: '10px',
      padding: '1rem',
      }}>
        <BoxWrapper withBackground={true} style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '200px',
          width: '500px',
          border: '1px solid #ffff',
          borderRadius: '5px',
          marginBottom: '3rem',
        }}>
          <img
            src={user?.avatar_url}
            alt="Saravana's Image"
            style={
              {
                height: '150px',
                width: '150px',
                borderRadius: '50%',
                display: 'block',
                marginLeft: '10px',
                marginRight: '10px',
              }
            }
          />
        <div className="aboutDescription">
        <Title style={{fontSize: '1rem', textAlign: 'center'}}>
          {user?.login}
        </Title>

        <Text style={{fontSize: '1rem', textAlign: 'center'}}>
          {user?.bio}
        </Text>
        
        <Text style={{fontSize: '1rem', textAlign: 'center'}} >
          Company : {user?.company}
        </Text>

        <Text style={{fontSize: '1rem', textAlign: 'center'}}>
          Followers : {user?.followers}
        </Text>

        <Text style={{fontSize: '1rem', textAlign: 'center'}}>
         Following : {user?.following}
        </Text>

        <Text style={{fontSize: '1rem', textAlign: 'center'}}>
          Total Stars : {totalStars}
        </Text>

        </div>
</BoxWrapper>

<BoxWrapper withBackground={true}>
        <Title style={{fontSize: '2rem', textAlign: 'center'}} order={1}
        >
          {github.contribution}
        </Title>

        <BoxWrapper withBackground={true} style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: 'auto',
          width: 'auto',
          textAlign: 'center',
          padding: '1rem',    
          }}>
          <GitHubCalendar
            username={GITHUB_USERNAME}
            blockSize={5}
            blockMargin={3}
            fontSize={10}
          />
        </BoxWrapper>

        
      </BoxWrapper>
    </Container>
    </section>
  );
}