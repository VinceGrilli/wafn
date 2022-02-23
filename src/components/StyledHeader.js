import styled from 'styled-components';

const StyledHeader = styled.header`
  background: black;
  border-bottom: 1px solid black;
  nav {
    height: 60px;
    border-top: 8px solid black;
    align-items: center;
    margin: 0 auto 0.5rem;
    max-width: 900px;
    padding: 0 1rem;
    display: flex;
    justify-content: space-between;
    text-decoration: none;
  }
  .burger {
    display: block;
    position: absolute;
    align-items: right;
    right: 2rem;
    top: 0.8rem;
    z-index: 2;
    background: transparent;
    border: none;
    cursor: pointer;

    @media screen and (min-width: 700px) {
      display: none;
    }
  }
  .menuNav {
    overflow-y: scroll;
    list-style: none;
    position: fixed;
    background: white;
    top: 0;
    left: 0;
    bottom: 0;
    padding-left: 0;
    height: 100vh;
    width: 0;
    overflow: hidden;
    max-width: 290px;
    z-index: 9;
    text-align: center;

    @media screen and (min-width: 700px) {
      list-style-type: none;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
    }
  }
  .menuNav.showMenu {
    width: 100%;
  }

  li {
    display: block;
    padding: 10px 40px;
  }
  .menuNav li:first-child {
    margin-top: 7rem;
  }

  a {
    color: black;
    font-size: 1.2rem;
    font-weight: bold;
    text-decoration: none;
    text-transform: uppercase;
  }
`;

export default StyledHeader;
