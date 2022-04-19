import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useLockBodyScroll } from 'react-use';
import Menu from './Menu';
import Navbar from './Navbar';

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  const [showMenu, setShowMenu] = useState(false);
  const router = useRouter();
  useLockBodyScroll(showMenu);

  useEffect(() => {
    setShowMenu(false);
  }, [router.pathname]);

  return (
    <>
      <Navbar showMenu={showMenu} setShowMenu={setShowMenu} />
      {showMenu && <Menu />}
      <main>{children}</main>
    </>
  );
};

export default Layout;
