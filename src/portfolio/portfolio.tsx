import styles from '../portfolio/portfolio.module.css'
import { useEffect, useState } from 'react'
import {NavigationBar} from './navBar/navigationBar'
import { BriefIntroduction } from './briefIntro/briefIntroduction'
import { AboutSection } from './aboutSection/aboutSection';

function getInitialTheme(): boolean {
  return window.matchMedia('(prefers-color-scheme: dark)').matches;
}

export function Portfolio() {
  const [isDark, setIsDark] = useState(getInitialTheme);

  // useEffect(() => {
  //   const mq = window.matchMedia('(prefers-color-scheme: dark)');
  //   const handler = (e: MediaQueryListEvent) => setIsDark(e.matches);
  //   mq.addEventListener('change', handler);
  //   return () => mq.removeEventListener('change', handler);
  // }, []);
  
  return (
    <div className={styles.portfolio}>
      <header className={styles.header}>
        <NavigationBar 
            isDark={isDark} 
            setIsDark={setIsDark} />
      </header>
      <div className={styles.content}>
        <BriefIntroduction />
        <AboutSection />
        <section id="projects" className={styles.projectsSection}>
          <h2>Projects</h2>
        </section>
      </div>
    </div>
  )
}
