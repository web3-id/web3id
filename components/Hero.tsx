import styled from '@emotion/styled';
import { Button, Container, Row, Text } from '@nextui-org/react';

const Hero = () => {
  return (
    <Container
      as="header"
      css={{
        marginTop: '2rem',
        maxW: '75rem',
        display: 'flex',
        flexDirection: 'column-reverse',
        alignItems: 'center',

        '@sm': {
          margin: '0 auto',
          flexDirection: 'row',
        },
      }}
    >
      <HeroContent>
        <Text
          h1
          css={{
            fontSize: '4rem',
            lineHeight: 1,
            mb: '0',
            wordBreak: 'break-word',
            '@sm': {
              mb: '1rem',
              fontSize: '5rem',
            },
          }}
        >
          Digital data analytics_..
        </Text>
        <Text
          as="p"
          css={{
            fontSize: '1.5rem',
            letterSpacing: '0.025rem',
            lineHeight: 1.25,
            w: '100%',
            '@sm': {
              w: '75%',
            },
          }}
        >
          Integrate our solutions - and start processing more sales
        </Text>
        <Row
          align="center"
          css={{
            marginTop: '2rem',
          }}
        >
          <Button
            color="gradient"
            auto
            size="xl"
            css={{
              mr: '1rem',
              zIndex: 0,
            }}
          >
            Get started
          </Button>
          <Button
            light
            auto
            size="xl"
            css={{
              zIndex: 0,
              px: '1.5rem',
              margin: 0,
              textTransform: 'uppercase',
              fontFamily: '$mono',
              fontSize: '0.875rem',
            }}
          >
            It&apos;s free
          </Button>
        </Row>
      </HeroContent>
      <HeroImage>
        <HeroIllustration />
      </HeroImage>
    </Container>
  );
};

export default Hero;

const HeroContent = styled.div`
  height: 100%;
  width: 100%;
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (min-width: 960px) {
    height: 80vh;
    width: 50%;
  }
`;

const HeroImage = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  svg {
    margin-top: 2rem;
    padding: 0;
    width: 100%;
  }
  @media (min-width: 960px) {
    height: 80vh;
    width: 50%;
    svg {
      padding: 1rem;
    }
  }
`;

const HeroIllustration = () => (
  <svg viewBox="0 0 122.88 94.12">
    <defs>
      <linearGradient id="gradient" gradientUnits="userSpaceOnUse">
        <stop stopColor="#0070f3" offset="-20%" />
        <stop stopColor="#ff4ecd" offset="50%" />
      </linearGradient>
    </defs>
    <g>
      <path
        fill="url(#gradient)"
        d="M6.33,0h91.16c3.46,0,6.33,2.87,6.33,6.34v33.16c-1.96-0.71-4.03-1.2-6.16-1.45V11.91l0,0l0,0H6.08v54.41 h61.03c0.08,2.07,0.38,4.07,0.89,6H6.33C2.87,72.32,0,69.45,0,65.98V6.34C0,2.87,2.87,0,6.33,0L6.33,0L6.33,0z M95.86,45.36 c5.87,0,11.19,2.39,15.05,6.23c3.85,3.86,6.23,9.16,6.23,15.05c0,4.29-1.28,8.3-3.46,11.64l9.21,10.04l-6.35,5.81l-8.88-9.77 c-3.37,2.25-7.43,3.56-11.78,3.56c-5.87,0-11.19-2.39-15.04-6.23c-3.86-3.86-6.23-9.16-6.23-15.04c0-5.87,2.39-11.19,6.23-15.05 C84.67,47.73,89.98,45.36,95.86,45.36L95.86,45.36L95.86,45.36z M107.17,55.32c-2.89-2.89-6.9-4.69-11.31-4.69 c-4.41,0-8.42,1.8-11.31,4.69c-2.89,2.89-4.69,6.9-4.69,11.31c0,4.41,1.8,8.42,4.69,11.31c2.89,2.89,6.9,4.69,11.31,4.69 c4.41,0,8.42-1.8,11.31-4.69c2.89-2.89,4.69-6.9,4.69-11.31C111.86,62.22,110.07,58.22,107.17,55.32L107.17,55.32L107.17,55.32 L107.17,55.32z M59.05,53.48h10.69c-0.52,1.09-0.97,2.22-1.34,3.38h-9.34V53.48L59.05,53.48L59.05,53.48z M59.05,44.86h17.14 c-1.15,1.03-2.22,2.17-3.18,3.38H59.05V44.86L59.05,44.86L59.05,44.86z M77.81,29.57h4.73c0.25,0,0.42,0.17,0.42,0.42v9.29 c0,0.25-0.17,0.42-0.42,0.42h-4.73c-0.25,0-0.42-0.17-0.42-0.42v-9.29C77.38,29.82,77.55,29.57,77.81,29.57L77.81,29.57 L77.81,29.57L77.81,29.57z M59.56,23.91h4.73c0.25,0,0.42,0.17,0.42,0.43v15.04c0,0.25-0.17,0.42-0.42,0.42h-4.73 c-0.25,0-0.42-0.17-0.42-0.42V24.33C59.05,24.08,59.31,23.91,59.56,23.91L59.56,23.91L59.56,23.91L59.56,23.91L59.56,23.91z M68.68,20.7h4.73c0.25,0,0.42,0.17,0.42,0.42v18.25c0,0.25-0.17,0.42-0.42,0.42h-4.73c-0.25,0-0.42-0.17-0.42-0.42V21.12 C68.26,20.87,68.43,20.7,68.68,20.7L68.68,20.7L68.68,20.7L68.68,20.7z M33.2,40.72l14.36,0.25c0,5.15-2.53,9.88-6.76,12.76 L33.2,40.72L33.2,40.72L33.2,40.72L33.2,40.72z M31.76,38.27l-0.17-16.73v-1.1l1.1,0.08l0,0l0,0c1.35,0.08,2.7,0.34,3.97,0.68 c1.27,0.34,2.45,0.84,3.63,1.44c5.83,3.04,9.88,9.12,10.22,16.05l0.08,1.1h-1.1l-16.64-0.51h-0.93L31.76,38.27L31.76,38.27 L31.76,38.27L31.76,38.27z M33.62,22.56l0.17,14.7l14.62,0.42c-0.59-5.75-4.14-10.73-9.04-13.35c-1.01-0.51-2.11-0.93-3.21-1.27 C35.23,22.9,34.47,22.73,33.62,22.56L33.62,22.56L33.62,22.56L33.62,22.56z M30.33,39.88l8.19,14.19c-2.53,1.44-5.32,2.2-8.19,2.2 c-9.04,0-16.39-7.35-16.39-16.39c0-8.79,6.93-16.05,15.71-16.39L30.33,39.88L30.33,39.88L30.33,39.88L30.33,39.88z"
      />
    </g>
  </svg>
);
