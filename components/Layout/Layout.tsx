import Head from 'next/head';
import React from 'react';
import MainNavigation from './MainNavigation';

type LayoutProps = {
  title?: string;
};

const Layout: React.FC<LayoutProps> = ({ children, title = 'This is the default title' }) => {
  return (
    <div className="bg-white">
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <MainNavigation />
      <div className="container mx-auto pt-4">{children}</div>
      {/* <Container className="main p-2"></Container> */}
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
