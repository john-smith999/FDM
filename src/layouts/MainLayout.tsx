import type { ReactNode } from 'react';
import Navbar from '../components/Navbar';
import { ScrollToTop } from '../components/ScrollToTop';

interface MainLayoutProps {
  children: ReactNode;
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="relative">
      <Navbar />
      <main>{children}</main>
      <ScrollToTop />
    </div>
  );
}; 