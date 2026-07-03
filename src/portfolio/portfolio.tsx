import styles from '../portfolio/portfolio.module.css'
import { NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from '@/components/ui/navigation-menu'
import { useState } from 'react'
// import { Switch } from "@/components/ui/switch"
import {ThemeToggle} from "@/functions/ThemeSwitch"


export function Portfolio() {
  const [isDark, setIsDark] = useState(false);
  return (
    <div className={styles.portfolio}>
      <div className={styles.navbar}>
        <h2 className={styles.logo}>Tomas Leshonok</h2>
        <NavigationMenu>
          <NavigationMenuList className={styles.navList}>
            <NavigationMenuItem>
              <NavigationMenuLink href="#about">About</NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="#projects">Projects</NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="#contact">Contact</NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <ThemeToggle
          checked={isDark}
          onToggle={(next) => {
            setIsDark(next);
            document.documentElement.classList.toggle("dark", next);
          }}
        />
      </div>
    </div>
  )
}
