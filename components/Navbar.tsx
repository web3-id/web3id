import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import {
  Button,
  Col,
  Container,
  Divider,
  Row,
  Switch,
  Text,
  Tooltip,
  useTheme,
} from '@nextui-org/react';

import { useTheme as useNextTheme } from 'next-themes';
import Link from 'next/link';
import Headroom from 'react-headroom';
import { Menu, Moon, Sun } from 'react-feather';

interface Props {
  showMenu: boolean;
  setShowMenu: (show: boolean) => void;
}

const Navbar = ({ showMenu, setShowMenu }: Props) => {
  const router = useRouter();
  const [show, setShow] = useState(false);
  const { setTheme } = useNextTheme();
  const { isDark } = useTheme();

  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <Headroom
      style={{
        backgroundColor: show ? (isDark ? '#1d1d1d' : '#fff') : 'transparent',
      }}
    >
      <Container
        as="nav"
        css={{
          maxW: '75rem',
          zIndex: 1,
        }}
      >
        <Row
          justify="space-between"
          align="center"
          css={{
            px: '0',
            '@sm': {
              px: '1.5rem',
            },
          }}
        >
          <Col>
            <Link href="/" passHref>
              <Text
                as="a"
                size={60}
                css={{
                  textGradient: '45deg, $blue500 -20%, $pink500 50%',
                  letterSpacing: '-0.2rem',
                }}
                weight="bold"
              >
                N3XT
              </Text>
            </Link>
          </Col>
          <Col
            css={{
              justifyContent: 'flex-end',
              px: '2rem',
              display: 'none',
              '@sm': {
                display: 'flex',
              },
            }}
          >
            <Link href="/" passHref>
              <Text
                as="a"
                size={20}
                css={
                  router.pathname == '/'
                    ? {
                        px: '1rem',
                        textGradient: '45deg, $blue500 -20%, $pink500 50%',
                      }
                    : { px: '1rem' }
                }
                weight="bold"
              >
                Home
              </Text>
            </Link>
            <Tooltip
              content="Connect your Crypto wallet"
              color="invert"
              placement="bottom"
              css={{
                color: isDark ? '#1d1d1d' : '#fff',
              }}
            >
              <Link href="/wallet" passHref>
                <Text
                  as="a"
                  size={20}
                  css={
                    router.pathname == '/wallet'
                      ? {
                          px: '1rem',
                          textGradient: '45deg, $blue500 -20%, $pink500 50%',
                        }
                      : { px: '1rem' }
                  }
                  weight="bold"
                >
                  Wallet
                </Text>
              </Link>
            </Tooltip>
            <Link href="/blog" passHref>
              <Text
                as="a"
                size={20}
                css={
                  router.pathname == '/blog'
                    ? {
                        px: '1rem',
                        textGradient: '45deg, $blue500 -20%, $pink500 50%',
                      }
                    : { px: '1rem' }
                }
                weight="bold"
              >
                Blog
              </Text>
            </Link>
          </Col>
          <Col
            css={{
              justifyContent: 'flex-end',
              display: 'flex',
              '@sm': {
                display: 'none',
              },
            }}
          >
            <Button
              onClick={() => {
                setShowMenu(!showMenu);
              }}
              auto
              light
              css={{ py: '2rem' }}
            >
              <Menu size={30} />
            </Button>
          </Col>
          <Col
            css={{
              justifyContent: 'flex-end',
              w: '10rem',
              display: 'none',
              '@sm': {
                display: 'flex',
              },
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
        </Row>
      </Container>
      <Divider />
    </Headroom>
  );
};

export default Navbar;
