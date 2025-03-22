'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

interface SidebarProps {
  className?: string;
}

export default function Sidebar({ className = '' }: SidebarProps) {
  const pathname = usePathname();
  const [height, setHeight] = useState('100vh');
  
  useEffect(() => {
    const updateHeight = () => {
      setHeight(`${window.innerHeight}px`);
    };

    updateHeight();
    window.addEventListener('resize', updateHeight);
    window.addEventListener('scroll', updateHeight);

    return () => {
      window.removeEventListener('resize', updateHeight);
      window.removeEventListener('scroll', updateHeight);
    };
  }, []);
  
  return (
    <div className={`fixed flex flex-col w-14 bg-[#1b2d3e] text-white overflow-y-auto ${className}`} style={{ height }}>
      {/* Logo */}
      <div className="flex items-center justify-center py-4 sticky top-0 bg-[#1b2d3e] z-10">
        <Link href="/" className="font-bold text-2xl bg-[#263c51] w-8 h-8 rounded-full flex items-center justify-center">
          R
        </Link>
      </div>
      
      {/* Navigation */}
      <div className="flex-1 flex flex-col items-center pt-4 space-y-5 overflow-y-auto">
        {/* Home */}
        <Link 
          href="/" 
          className={`p-2 rounded-full w-12 h-12 flex items-center justify-center ${pathname === '/' ? 'bg-[#23374a]' : 'hover:bg-[#23374a]/70'}`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
          </svg>
        </Link>
        
        {/* Menu/List */}
        <Link 
          href="/list" 
          className={`p-2 rounded-full w-9 h-9 flex items-center justify-center ${pathname === '/list' ? 'bg-[#23374a]' : 'hover:bg-[#23374a]/70'}`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
          </svg>
        </Link>
        
        {/* Settings */}
        <Link 
          href="/settings" 
          className={`p-2 rounded-full w-9 h-9 flex items-center justify-center ${pathname === '/settings' ? 'bg-[#23374a]' : 'hover:bg-[#23374a]/70'}`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
          </svg>
        </Link>
      </div>
      
      <div className="pb-4"></div>
    </div>
  );
} 