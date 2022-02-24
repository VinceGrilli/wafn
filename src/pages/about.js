import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';
import StoreLayout from '../components/StoreLayout';

const H2Styles = styled.h2`
  text-align: center;
  font-weight: 600;
  margin-bottom: 1.5rem;
`;

const AboutStyles = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-gap: 2rem;
  margin: auto 1rem;

  @media only screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: 2;
    div {
      text-align: center;
    }
  }
`;

export default function AboutPage() {
  const img = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "wafn-people.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 400, quality: 100) {
            ...GatsbyImageSharpFluid
            originalName
          }
          id
        }
      }
    }
  `);
  const image = img.file.childImageSharp.fluid;
  console.log(image);
  return (
    <StoreLayout>
      <H2Styles>About WAFN</H2Styles>
      <AboutStyles>
        <div>
          <Img fluid={image} alt={image.originalName} />
        </div>
        <div>
          <p>
            Where do we start? We determined that the leading lifestyle brand
            should represent the times. The times are a nightmare. WAFN
            pronounced "wah-fin" is easy to say and rolls off the tongue, easier
            to say than "What a F&#$ing Nightmare". As a result, we launched the
            lifestyle brand. The world has taken notice and things have become
            increasingly nightmarish across the globe. We have political WAFN,
            we have COVID WAFN, we have economic WAFN, we have psychological
            WAFN, social distancing WAFN. You name it, it is WAFN everywhere you
            look. So fly your WAFN flag at full staff and join the movement. and
            soon you'll be saying it in almost every breath. Embrace your inner
            WAFN, and look for our COVID-19 era and election 2020 relevant
            merchandise... WAFN 2020 hats are in! SHOP NOW! "WAFN"!
          </p>
          <p>
            Oh and if the kids don't want to be left out, that is fine. We make
            sure they know the hat really stands for "What A Fun Night"! So feel
            free to invite them into the movement too, WAFN is truly a
            family-oriented brand!
          </p>
        </div>
      </AboutStyles>
    </StoreLayout>
  );
}
