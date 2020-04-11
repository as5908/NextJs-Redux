import React from 'react';
import Link from 'next/link';
const Navbar = () => {
  const styles = {
    display: 'flex',
    background: 'grey',
    justifyContent: 'space-between',
    padding: '1rem',
  };
  return (
    <div style={styles}>
      <Link href="/">
        <a>Orig Way</a>
      </Link>
      <Link href="/1">
        <a>This Way</a>
      </Link>
      <Link href="/2">
        <a>Another Way</a>
      </Link>
    </div>
  );
};

export default Navbar;
