import React from 'react';
import clsx from 'clsx';
import { withRouter } from 'react-router';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          
        </div>
      </div>
    </header>
  );
}


export default withRouter((props) => {
  const {siteConfig} = useDocusaurusContext();

  React.useLayoutEffect(() => {
    props.history.push('/Blog/blog')
  },[])

  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      {/* <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main> */}
    </Layout>
  );
})