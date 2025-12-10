import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={clsx('padding-vert--md', styles.robotImageContainer)}>
          <img src="/AI-humanoid-book/img/technology.jpg" alt="Humanoid Robot" className={styles.robotImage} />
        </div>
        <p className="hero__description">
          Explore the fascinating world of physical AI and humanoid robotics. This book delves into the core concepts,
          cutting-edge research, and practical applications that are shaping the future of embodied intelligence.
          Whether you're a student, researcher, or enthusiast, discover comprehensive insights into designing,
          building, and programming humanoid robots.
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/book/chapter1">
            Start Reading - Chapter 1
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
