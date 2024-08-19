import React from "react";
import Head from "next/head";
import { Briefcase } from "phosphor-react";
import { ScrollTop } from "../ScrollTop/index";
import { Section, Title, Description } from "../../styles/styles";
import Image from 'next/image'
import { useState } from 'react'

export default function privacypolicy() {
  return (
    <div>
      <Head>
        <title>Privacy Policy | Saravanakumar </title>
        <meta
          name="description"
          content="Privacy Policy"
        />
        <meta property="og:title" content="Privacy Policy | Saravanakumar" />
        <meta
          property="og:description"
          content="My experience"
        />
      </Head>

      <ScrollTop />
      <Section>
        <Title>
          <p>../policy</p>
          Privacy
          <span>
            <Briefcase /> Work
          </span>
        </Title>

        <Description>
          <p>
          At Saravanakumar's Portfolio, accessible from https://saravanakumar.engineer, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Saravanakumar and how we use it.
          </p>
        </Description>
        
        </Section>
        </div>
    );

}