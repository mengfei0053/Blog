import React from 'react';
import clsx from 'clsx';
import { withRouter } from 'react-router';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';




export default withRouter((props) => {
  const {siteConfig} = useDocusaurusContext();

  React.useLayoutEffect(() => {
    props.history.push('/blog')
  },[])

  return (
    <Layout
      title={`${siteConfig.title}'s Blog`}
      keywords={['前端','技术博客', '前端技术博客', '常用工具', '备忘速查']}
      >
    
    </Layout>
  );
})