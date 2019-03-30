import styled from "styled-components"

export const StyledMobileNav = styled.nav`
  margin-left: -1.5rem;
`
export const StyledMobileUl = styled.ul`
  list-style: none;
  box-shadow: 0 2px 2px black;
  & a {
    text-decoration: none;
    color: ${props => props.theme.fg};
  }
`
export const StyledMobileLi = styled.li`
  padding: 1rem;
  text-align: center;
  border-bottom: 1px solid ${props => props.theme.fgComp};
`
