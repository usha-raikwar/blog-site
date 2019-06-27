import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Hi There!</h1>
    <p>      
      This website is dedicated to everyone and covers the topic of life advice, life style, relationship
      and travel from some of my experiences. I am doing this because from a long time I wanted to write
      over so many things and somehow now is the right time I guess.

      Happy Reading!
    </p>
  </Layout>
);

export default IndexPage;
