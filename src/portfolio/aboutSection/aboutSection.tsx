import styles from './about.module.css'

export function AboutSection() {
  return (
    <section id="about" className={styles.aboutSection}>
      <p className={styles.title}>About Me</p>
      <p className={styles.subtitle}>
        Hey there, I'm Thomas — a Frontend engineer.
      </p>
      <p className={styles.subtitle}>
        I am a motivated software developer focused on frontend web development and open-source projects. I specialize in creating interactive web applications on the client side. I mainly work with technologies such as React, JavaScript, and TypeScript.
      </p>
      <p className={styles.subtitle}>
        I believe in continuous learning and self-improvement, so I always look for ways to learn from any situation, whether it's good or bad.
      </p>
    </section>
  )
}