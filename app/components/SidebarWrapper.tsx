// 'use client';

// import { usePathname } from 'next/navigation';
// import Sidebar from './Sidebar';

// export default function SidebarWrapper({ 
//   children 
// }: { 
//   children: React.ReactNode 
// }) {
//   const pathname = usePathname();
//   const isHomePage = pathname === '/';
  
//   if (isHomePage) {
//     return <main className="w-full">{children}</main>;
//   }
  
//   return (
//     <div className="flex">
//       <Sidebar />
//       <main className="flex-1">
//         {children}
//       </main>
//     </div>
//   );
// } 