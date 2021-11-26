import React from 'react';
import clsx from 'clsx';
import { withRouter } from 'react-router';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';




export default withRouter((props) => {
  const {siteConfig} = useDocusaurusContext();

  React.useLayoutEffect(() => {
    props.history.push('/Blog/blog')
  },[])

  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
    
    </Layout>
  );
})