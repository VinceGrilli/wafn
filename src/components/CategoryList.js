import { graphql, Link, useStaticQuery } from 'gatsby';
import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';

const CategoryGridStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 3rem;
  grid-auto-rows: auto 500px;
  margin: auto 1rem;
  h3 {
    text-align: center;
    color: black;
    margin-top: 1rem;
    text-decoration: none;
  }
`;

const SingleCategoryStyles = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
`;

export default function CategoryList() {
  const data = useStaticQuery(graphql`
    query CategoryImages {
      allFile(
        filter: {
          sourceInstanceName: { eq: "images" }
          extension: { eq: "jpg" }
        }
      ) {
        nodes {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
              originalName
            }
            id
          }
        }
      }
    }
  `);
  const category = data.allFile.nodes.map((image) => {
    const name = image.childImageSharp.fluid.originalName.replace('.jpg', '');
    return (
      <SingleCategoryStyles key={image.childImageSharp.id}>
        <Link to={`categories/${name.replace('-', '').toLowerCase()}`}>
          <h3>{name} </h3>
          <Img fluid={image.childImageSharp.fluid} />
        </Link>
      </SingleCategoryStyles>
    );
  });

  return <CategoryGridStyles>{category}</CategoryGridStyles>;
}
