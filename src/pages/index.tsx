import React from 'react';
import clsx from 'clsx';
import { withRouter } from 'react-router';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import Head from '@docusaurus/Head'

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
  const str = `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-D7V5KJ0QWC');
  `

  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
        <Head>
<script async src="https://www.googletagmanager.com/gtag/js?id=G-D7V5KJ0QWC"></script>
<script dangerouslySetInnerHTML={{ __html:str }}>
</script>
        </Head>
      {/* <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main> */}
    </Layout>
  );
})