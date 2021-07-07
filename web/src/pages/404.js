import Layout from "../components/layout";
import React from "react";
import Seo from "../components/seo";

const NotFoundPage = () => (
  <div className="flex flex-col justify-between h-screen">
    <Layout className="relative flex-grow">
      <Seo title="404: Not found" />
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Layout>
  </div>
);

export default NotFoundPage;
