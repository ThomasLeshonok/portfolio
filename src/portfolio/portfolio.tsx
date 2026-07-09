import styles from '../portfolio/portfolio.module.css'
import { NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from '@/components/ui/navigation-menu'
import { useEffect, useState } from 'react'
// import { Switch } from "@/components/ui/switch"
import {ThemeToggle} from "@/functions/ThemeSwitch"
import {NavigationBar} from './navBar/navigationBar'

function getInitialTheme(): boolean {
  return window.matchMedia('(prefers-color-scheme: dark)').matches;
}

export function Portfolio() {
  const [isDark, setIsDark] = useState(getInitialTheme);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    const handler = (e: MediaQueryListEvent) => setIsDark(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
  }, [isDark]);
  
  return (
    <div className={styles.portfolio}>
      <NavigationBar 
          isDark={isDark} 
          setIsDark={setIsDark} />
    </div>
  )
}
