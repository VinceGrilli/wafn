import { graphql, Link, useStaticQuery } from 'gatsby';
import React from 'react';
import Img from 'gatsby-image';

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

  return data.allFile.nodes.map((image) => {
    const name = image.childImageSharp.fluid.originalName.replace('.jpg', '');
    return (
      <div key={image.id}>
        <Link to={`categories/${name.replace('-', '').toLowerCase()}`}>
          <h3>{name} </h3>
          <Img fluid={image.childImageSharp.fluid} />
        </Link>
      </div>
    );
  });
}
