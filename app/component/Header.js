"use client"
import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';
const navLink = [
  { id: 1, title: 'home', href: '/' },
  { id: 2, title: 'Articles', href: '/Articles' },
  { id: 3, title: 'Product', href: '/product' },
];

const Header = () => {
    const pathe = usePathname()
console.log('pathe',pathe)
  return (
    <ul>
      {navLink.map((link) => (
        <li key={link.id}>
          <Link href={link.href}>{link.title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default Header;
