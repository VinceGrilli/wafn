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
              fluid(quality: 100) {
                ...GatsbyImageSharpFluid
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
        <Carousel.Item key={image.node.childImageSharp.id} interval={3000}>
          <Img
            className={css.carouselImg}
            fluid={image.node.childImageSharp.fluid}
            alt={image.node.childImageSharp.fluid.originalName}
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
}
