import React from 'react';
import { Helmet } from 'react-helmet';
import ToolsListContainer from './ToolsListContainer';

/**
 * Home page to display the tools list
 */
const Home = () => (
  <>
    <Helmet>
      <meta charSet="utf-8" />
      <title>VUTTR - Very Usefull Tools to Remember </title>
      <meta
        name="description"
        content="This useful tools manager application is the challenge required by
         Bossa Box to integrate your ProLancers teams."
      />
      <meta
        name="robots"
        content="index, nofollow"
      />
    </Helmet>
    <ToolsListContainer />
  </>
);

export default Home;
