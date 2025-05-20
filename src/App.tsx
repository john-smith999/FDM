import { lazy, Suspense } from 'react';
import { MainLayout } from './layouts/MainLayout';
import { LazyLoad } from './components/LazyLoad';
import { NextSection } from './components/NextSection';
import { SECTION_IDS, ANIMATION_CONFIG } from './config/constants';
import type { SectionId } from './types';

// Lazy load pages
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Projects = lazy(() => import('./pages/Projects'));
const Skills = lazy(() => import('./pages/Skills'));
const Contact = lazy(() => import('./pages/Contact'));

// Define section configurations
const sections: Array<{
  id: SectionId;
  Component: typeof Home | typeof About | typeof Projects | typeof Skills | typeof Contact;
  animation: 'fade' | 'slide-up';
}> = [
  { id: 'home', Component: Home, animation: 'fade' },
  { id: 'about', Component: About, animation: 'slide-up' },
  { id: 'skills', Component: Skills, animation: 'slide-up' },
  { id: 'projects', Component: Projects, animation: 'slide-up' },
  { id: 'contact', Component: Contact, animation: 'slide-up' }
];

function App() {
  return (
    <Suspense 
      fallback={
        <div className="flex items-center justify-center min-h-screen">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
        </div>
      }
    >
      <MainLayout>
        {sections.map(({ id, Component, animation }, index) => (
          <section 
            key={id}
            id={SECTION_IDS[id]}
            className={`min-h-screen ${
              id === 'home' 
                ? 'flex items-center justify-center' 
                : 'py-32 md:py-40 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto'
            } relative section-background`}
          >
            <LazyLoad 
              animation={animation}
              duration={ANIMATION_CONFIG.duration.slow}
              delay={index * ANIMATION_CONFIG.delay.medium}
              className="w-full"
            >
              <Component />
            </LazyLoad>
            {id !== 'contact' && (
              <NextSection currentSection={id} />
            )}
          </section>
        ))}
      </MainLayout>
    </Suspense>
  );
}

export default App;
