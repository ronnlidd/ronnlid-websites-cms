import styled, { keyframes } from "styled-components"

export const StyledMobileNav = styled.nav`
  margin-left: -1.5rem;
`

const slideIn = keyframes`
0% {
  transform: translateY(-100%);
}
100% {
  transform: translateY(0);
}
`
export const StyledMobileUl = styled.ul`
  list-style: none;
  box-shadow: 0 2px 2px black;
  font-family: sans-serif;

  & a {
    text-decoration: none;
    color: ${props => props.theme.fg};
  }
`
export const StyledMobileLi = styled.li`
  padding: 0.5rem;
  margin: 0;
  text-align: center;
  background: ${props => props.theme.fgComp};
  animation: ${slideIn} 0.4s cubic-bezier(0.94, 0.44, 0.46, 1.54);

  :hover {
    background: ${props => props.theme.fg};
    color: ${props => props.theme.bgComp};
  }
`
