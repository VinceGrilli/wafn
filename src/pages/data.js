import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import StoreLayout from '../components/StoreLayout';

export default function DataPage() {
  const data = useStaticQuery(graphql`
    query MyQuery {
      mysqlContent(title: { eq: "Team History" }) {
        body
      }
    }
  `);
  const content = data.mysqlContent.body;
  function createMarkup() {
    return { __html: content };
  }

  return (
    <StoreLayout>
      <div dangerouslySetInnerHTML={createMarkup()} />;
    </StoreLayout>
  );
}
