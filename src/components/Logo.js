import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { Link, useStaticQuery, graphql } from 'gatsby';

const LogoWrap = styled.div`
  margin: auto 0;
  flex: 0 1 36px;
  border-top: 0.5rem solid black;

  @media (max-width: 768px) and (orientation: landscape) {
    flex: 0 1 25px;
  }
`;
const Logo = () => {
  const data = useStaticQuery(graphql`
    query {
      file(name: { eq: "wafn-logo-sm" }, extension: { eq: "jpg" }) {
        childImageSharp {
          fixed(quality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return (
    <LogoWrap as={Link} to="/">
      <Img fixed={data.file.childImageSharp.fixed} alt="logo" />
    </LogoWrap>
  );
};

export default Logo;
