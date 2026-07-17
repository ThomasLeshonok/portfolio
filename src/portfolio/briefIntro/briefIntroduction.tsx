import styles from './briefIntroduction.module.css'

export function BriefIntroduction() {
  return (
    <section id="brief_introduction" className={styles.briefSection}>
      <p className={styles.title}>Hi, my name is</p>
      <h1 className={styles.name}>Thomas Leshonok</h1>
      <h2 className={styles.quote}>Turning ideas into <span className={styles.quote_gradient}>projects</span>.</h2>
      <p className={styles.subtitle}>
        I'm a Software Engineer with experience in creating scalable, high-performance web platforms. My works includes UI engineering, tools, and large-scale design. This experience has influenced how I approach building fast and reliable systems.
      </p>
    </section>
  )
}