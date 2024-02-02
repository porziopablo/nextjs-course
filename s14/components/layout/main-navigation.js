import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';

import classes from './main-navigation.module.css';

function MainNavigation() {
  const { status } = useSession();
  const isLoggedIn = status === 'authenticated';
  const isNotLoggedIn = status === 'unauthenticated';

  function logoutHandler() {
    signOut().catch(console.error);
  }

  return (
    <header className={classes.header}>
      <Link href="/">
        <div className={classes.logo}>Next Auth</div>
      </Link>
      <nav>
        <ul>
          {isNotLoggedIn && (
            <li>
              <Link href="/auth">Login</Link>
            </li>
          )}
          {isLoggedIn && (
            <>
              <li>
                <Link href="/profile">Profile</Link>
              </li>
              <li>
                <button onClick={logoutHandler}>Logout</button>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
