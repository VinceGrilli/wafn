import React from 'react';
import styled from 'styled-components';
import facebook from '../../pictures/social/facebook.svg';
import instagram from '../../pictures/social/instagram.svg';
import twitter from '../../pictures/social/twitter.svg';

const FooterStyles = styled.footer`
  display: grid;
  text-align: center;
  background-color: black;
  color: white;
  top: 100%;
  position: sticky;

  margin-top: 4rem;
  div {
    display: grid;
    grid-auto-rows: 3rem;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
  }
  a {
    margin: 3rem auto 0;
  }

  .copyright {
    margin-top: 1.5rem;
    display: grid;
    grid-template-columns: 1fr auto 1fr;
  }
  #copytext {
    color: white;
    align-items: center;
    margin: 0 auto;
  }
`;

export default function Footer() {
  return (
    <FooterStyles>
      <div className="social">
        <a
          title="facebook"
          target="_blank"
          rel="noreferrer"
          href="https://www.facebook.com/WAFNofficial/"
        >
          <img src={facebook} alt="Facebook" style={{ width: '2.5rem' }} />
        </a>
        <a
          title="instagram"
          target="_blank"
          rel="noreferrer"
          href="https://www.instagram.com/wafnofficial/"
        >
          <img src={instagram} alt="Instagram" style={{ width: '2.5rem' }} />
        </a>
        <a
          title="twitter"
          target="_blank"
          rel="noreferrer"
          href="https://www.twitter.com/wafnofficial/"
        >
          <img src={twitter} alt="twitter" style={{ width: '2.5rem' }} />
        </a>
      </div>

      <div className="copyright">
        <a />
        <a id="copytext" href="https://www.clickcapecod.com/">
          © {new Date().getFullYear()}
          {` `}
          Website crafted by
          {` `}
          Click Cape Cod
        </a>
      </div>
    </FooterStyles>
  );
}
