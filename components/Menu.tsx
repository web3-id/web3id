import styled from '@emotion/styled';
import { Col, Container, Switch, Text, useTheme } from '@nextui-org/react';
import { useTheme as useNextTheme } from 'next-themes';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Moon, Sun } from 'react-feather';

const textGradient = `
  background-image: linear-gradient(45deg, var(--nextui-colors-blue500) -20%, var(--nextui-colors-pink500) 50%);
  background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Menu = () => {
  const router = useRouter();
  const { isDark } = useTheme();
  const { setTheme } = useNextTheme();
  return (
    <Container
      css={{
        position: 'fixed',
        top: '90px',
        background: isDark ? '#1d1d1d' : '#fff',
        left: '0',
        zIndex: 1,
        py: '2rem',
        height: '100%',
        maxH: '90vh',
      }}
    >
      <Col
        css={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Link href="/" passHref>
          <Text as="a" size={40} weight="bold">
            <StyledText active={router.pathname == '/'}>Home</StyledText>
          </Text>
        </Link>

        <Link href="/wallet" passHref>
          <Text as="a" size={40} weight="bold">
            <StyledText active={router.pathname == '/wallet'}>
              Wallet
            </StyledText>
          </Text>
        </Link>

        <Link href="/blog" passHref>
          <Text as="a" size={40} weight="bold">
            <StyledText active={router.pathname == '/blog'}>Blog</StyledText>
          </Text>
        </Link>

        <Link href="/careers" passHref>
          <Text as="a" size={40} weight="bold">
            <StyledText number={3} active={router.pathname == '/careers'}>
              Careers
            </StyledText>
          </Text>
        </Link>

        <Link href="/contact" passHref>
          <Text as="a" size={40} weight="bold">
            <StyledText active={router.pathname == '/contact'}>
              Contact
            </StyledText>
          </Text>
        </Link>
      </Col>

      <Col
        css={{
          py: '2rem',
        }}
      >
        <Switch
          aria-label={`Toggle dark mode ${isDark ? 'on' : 'off'}`}
          color="primary"
          checked={!isDark}
          onChange={(e) => setTheme(e.target.checked ? 'light' : 'dark')}
          iconOn={<Sun />}
          iconOff={<Moon />}
        />
      </Col>
    </Container>
  );
};

export default Menu;

const StyledText = styled.span<{ number?: number; active: boolean }>`
  ${({ active }) => active && textGradient}
  position: relative;
  &:after {
    content: '${({ number }) => number}';
    position: absolute;
    top: 0;
    right: -1.5rem;
    width: 1.75rem;
    height: 1.75rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    font-weight: bold;
    padding: 0.5rem;
    border-radius: 50%;
    ${({ active }) => active && textGradient}
  }
`;
