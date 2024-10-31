import React, { useEffect, useRef } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import IconAlerts from './alertsig';
import { usePrefersReducedMotion } from '@hooks';

const StyledAboutSection = styled.section`
  max-width: 900px;

  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;

    @media (max-width: 768px) {
      display: block;
    }
  }
`;
const StyledText = styled.div`
  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    grid-gap: 0 10px;
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;

    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-mono);
      font-size: var(--fz-xs);

      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: var(--green);
        font-size: var(--fz-sm);
        line-height: 12px;
      }
    }
  }
`;
const StyledPic = styled.div`
  position: relative;
  max-width: 300px;

  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
  }

  .wrapper {
    ${({ theme }) => theme.mixins.boxShadow};
    display: block;
    position: relative;
    width: 100%;
    border-radius: var(--border-radius);
    background-color: var(--green);

    &:hover,
    &:focus {
      outline: 0;
      transform: translate(-4px, -4px);

      &:after {
        transform: translate(8px, 8px);
      }

      .img {
        filter: none;
        mix-blend-mode: normal;
      }
    }

    .img {
      position: relative;
      border-radius: var(--border-radius);
      mix-blend-mode: multiply;
      filter: grayscale(100%) contrast(1);
      transition: var(--transition);
    }

    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: var(--border-radius);
      transition: var(--transition);
    }

    &:before {
      top: 0;
      left: 0;
      background-color: var(--navy);
      mix-blend-mode: screen;
    }

    &:after {
      border: 2px solid var(--green);
      top: 14px;
      left: 14px;
      z-index: -1;
    }
  }
`;

const About = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  const skills = [
    'JavaScript (ES6+)',
    'Python',
    'Jenkins',
    'Kubernetes',
    'Terraform',
    'Docker',
    'ArgoCD',
    'Prometheus',
    'AWS Compute',
  ];

  useEffect(() => {
    const script = document.createElement('script');
    script.src = '//cdn.credly.com/assets/utilities/embed.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <StyledAboutSection id="about" ref={revealContainer}>
      <h2 className="numbered-heading">About Me</h2>

      <div className="inner">
        <StyledText>
          <div>
            <p>
              I am a software engineer specialising in DevOps and Cloud Infrastructure. My interest
              for software development peaked in 2022 when I had to join a software engineering
              bootcamp at <a href="https://alxafrica.com/">alx</a>.
            </p>

            <p>
              Fast-forward to today, and I’ve had the privilege of working at{' '}
              <a href="https://xacent.com/">Xacent</a>, a software development startup based in
              Ontario as a fullstack developer and my current company{' '}
              <a href="https://reallygreattech.com/">RGT</a>, a software development company where I
              operate as a DevOps Engineer. My main focus these days is ensuring web applications,
              mobile native applications, are reliable and highly available to its users while
              facilitating effective in-house development of software products
            </p>

            <p>
              I also take pride in sharing new knowlege I encounter on{' '}
              <a href="https://medium.com/@michaeladev">medium</a> ranging from programming
              languages, developement best practices and operations.
            </p>

            <p>Here are a few technologies I’ve been working with recently:</p>
          </div>

          <ul className="skills-list">
            {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
          </ul>
        </StyledText>

        <StyledPic>
          <div className="wrapper">
            <StaticImage
              className="img"
              src="../../images/me2.jpeg"
              width={500}
              quality={95}
              formats={['AUTO', 'WEBP', 'AVIF']}
              alt="Headshot"
            />
          </div>
          <br></br>
        </StyledPic>
        <StyledText>
          <div>
            <h2 className="numbered-heading">Highlight</h2>
            {/* <ReactPlayer
              url="/df.mp4"
              width={500}
              controls={true}
              config={{
                file: {
                  tracks: [{ kind: 'subtitles', src: 'lecture.srt', srcLang: 'en', default: true }],
                },
              }}
            /> */}
          </div>
          <div>
            <p>
              Running{' '}
              <a
                href="https://github.com/Terre8055/BitNet"
                target="_blank"
                rel="noopener noreferrer">
                1-Bit
              </a>{' '}
              LLMs on deployed UI Playground. This project is a fork of Microsoft's{' '}
              <a
                href="https://github.com/microsoft/BitNet"
                target="_blank"
                rel="noopener noreferrer">
                BitNet.cpp
              </a>{' '}
              official inference framework
            </p>
            <div className="video-container">
              <iframe
                src="https://www.loom.com/embed/e00c05ee5d564be8880c2495b18cebfe?sid=3f0b0833-d469-4aa0-98fd-31750fece8e3"
                frameBorder="0"
                webkitAllowFullScreen
                mozAllowFullScreen
                allowFullScreen
                className="video-iframe"
                title="Video demonstration of 1-Bit LLMs"
                style={{ width: '500px', height: '500px' }}></iframe>
            </div>
          </div>
          <div>
            <br />
            <div>
              <p>Testing the deployed model directly from the terminal on t3.xlarge instance</p>
              <div className="video-wrapper">
                <iframe
                  src="https://www.loom.com/embed/4c7ee84c81c6454fb231e48e26231376?sid=92303aae-7973-4b3e-945c-c51d8a5cac50"
                  frameBorder="0"
                  webkitAllowFullScreen
                  mozAllowFullScreen
                  allowFullScreen
                  className="video-iframe"
                  title="Testing the deployed model"
                  style={{ width: '500px', height: '500px' }}></iframe>
              </div>
              <p>
                Prompt (p): &quot;Palo Alto is a vibrant community in America with a bit of history
                among startup founders. Can you tell me why it&apos;s loved by technophiles?&quot;
                <br />
                Model (m): Llama3-8B-1.58-100B-tokens
                <br />
                Temperature (t): 499
                <br />
                Tokens (n): 300
              </p>
            </div>
          </div>
          <div>
            {/* <p>
              Check it out where I explain how these metrics improved my team's release strategy and
              deployment frequency by 60%{' '}
            </p> */}
            <br />
            <IconAlerts />
          </div>
        </StyledText>
      </div>
    </StyledAboutSection>
  );
};

export default About;
