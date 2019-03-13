import styled from 'styled-components'

export const Nav = styled.nav`
  width: 30%;
  max-width: 300px;
  padding: 0 40px 2rem 0;
  position: relative;

  &::before {
    content: ' ';
    display: block;
    position: absolute;
    width: 1px;
    top: 0;
    bottom: 0;
    left: 7px;
    background: ${props => props.theme.lightestGrey};
    z-index: -1;
  }
`

export const Section = styled.div`
  margin: 2.5rem 0 0 0;
  padding: 0 0 0 25px;
  font-size: ${props => props.theme.fontSizeSmall};

  a,
  a:visited {
    color: black;
    text-decoration: none;
  }

  a:hover {
    color: ${props => props.theme.red};
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  li {
    line-height: 1.2em;
    margin: 0.8em 0;
  }
`