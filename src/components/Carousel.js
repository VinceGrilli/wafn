import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Img from 'gatsby-image';
import * as css from './Carousel.module.css';

export default function MyCarousel() {
  const data = useStaticQuery(graphql`
    query {
      images: allFile(filter: { extension: { eq: "png" } }) {
        edges {
          node {
            childImageSharp {
              fixed {
                ...GatsbyImageSharpFixed
              }
              id
            }
          }
        }
      }
    }
  `);

  return (
    <Carousel
      className={css.carousel}
      fade
      controls={false}
      indicators={false}
      pause={false}
    >
      {data.images.edges.map((image) => (
        <Carousel.Item key={image.node.childImageSharp.id} interval={2000}>
          <Img
            className={css.carouselImg}
            fixed={image.node.childImageSharp.fixed}
            alt={image.node.childImageSharp.fixed.originalName}
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
}
