import styled from 'styled-components'

export default styled.header`
  box-shadow: 0px 6px 20px ${props => props.theme.lightestGrey};
  padding: 0.6rem 0;
  font-size: 1rem;
  text-align: center;

  @media (max-width: ${props => props.theme.breakpoint}) {
    padding: 0.2rem 1rem;
    text-align: left;
  }
`
