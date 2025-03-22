'use client';

import { usePathname } from 'next/navigation';
import Sidebar from './Sidebar';
import Image from "next/image";

export default function ConditionalSidebar() {
  const pathname = usePathname();
  
  // Hide sidebar on login page
  if (pathname === '/login') {
    return null;
  }
  
  return <Sidebar />;
} 