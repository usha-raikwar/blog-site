import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div className="about">
    <h4>Hi There!</h4>
      <p>      
      I am a Software Engineer for 7 years in IT industry with domain knowledge in ecommerce, cruise line, telecom industry. With excellent hold of technical skills, effective command over communication, proficient teamwork and project management skills and a can-do-it-right attitude, can get the target achieved holistically. Have a BE in Computer Science and Engineering.
      </p>

      <p>
      I enjoy working on emerging Javascript technology like Node js and the associated functional programming. I also have knowledge in Unix, OOPS, HTML, CSS. Very recently, I have developed great interest in React js, Gatsby and the entire JAMstack ecosystem with GraphQL.
      For maintaining my projects, I have used Github and Bitbucket. I have good command over Project management tool Atlassian's JIRA.
      </p>
      
      <p>
      Apart from my this, I am currently pursuing UI/UX design course from Interactin Design Foundation.
      When I am not working, I am either enhancing my Graphic design skills, do workout including Gym and Yoga, reading books or spending time with my family.
      </p>
    </div>
  </Layout>
);

export default IndexPage;
