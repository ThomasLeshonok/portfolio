import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink } from '@/components/ui/navigation-menu'
import { ThemeToggle } from '@/functions/ThemeSwitch'
import styles from './navigationBar.module.css'

export function NavigationBar({ isDark, setIsDark }: { isDark: boolean, setIsDark: (next: boolean) => void }) {
  return (
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
  )
}