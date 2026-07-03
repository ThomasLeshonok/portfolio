import React, { useCallback, useRef } from 'react';
import styles from './themeswitch.module.css';
import { flushSync } from "react-dom";

interface ThemeToggleProps {
  checked: boolean;
  onToggle: (checked: boolean) => void;
  className?: string;
}

export function ThemeToggle({ checked, onToggle, className }: ThemeToggleProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const nextChecked = e.target.checked;
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (
        !wrapperRef.current ||
        !document.startViewTransition ||
        prefersReducedMotion
      ) {
        onToggle(nextChecked);
        return;
      }

      const { top, left, width, height } =
        wrapperRef.current.getBoundingClientRect();
      const x = left + width / 2;
      const y = top + height / 2;
      const maxRadius = Math.hypot(
        Math.max(x, window.innerWidth - x),
        Math.max(y, window.innerHeight - y)
      );

      const transition = document.startViewTransition(() => {
        flushSync(() => {
          onToggle(nextChecked);
        });
      });

      transition.ready.then(() => {
        document.documentElement.animate(
          {
            clipPath: [
              `circle(0px at ${x}px ${y}px)`,
              `circle(${maxRadius}px at ${x}px ${y}px)`,
            ],
          },
          {
            duration: 500,
            easing: "ease-in-out",
            pseudoElement: "::view-transition-new(root)",
          }
        );
      });
    },
    [onToggle]
  );

  return (
    <div className={[styles.switch, className].filter(Boolean).join(" ")} ref={wrapperRef}>
      <label className={styles.switchLabel}>
        <input
          type="checkbox"
          checked={checked}
          onChange={handleChange}
          className={styles.checkbox}
          aria-label="Toggle dark mode"
        />
        <span className={styles.slider} />
      </label>
    </div>
  );
}