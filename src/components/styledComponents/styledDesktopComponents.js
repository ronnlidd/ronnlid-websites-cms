import styled from "styled-components"

export const DesktopNavbar = styled.nav`
  width: 100%;
  background: red;
  padding: 0;
  margin: 0;
`

export const DesktopUl = styled.ul`
  background: ${props => props.theme.bgComp};
  list-style: none;
  margin: 0;
  display: flex;
  height: 70px;
  justify-content: space-around;
  border-bottom: 2px solid ${props => props.theme.fgComp};
  box-shadow: 0 2px 2px ${props => props.theme.fg};
  

  a {
    text-decoration: none;
    color: ${props => props.theme.fg};
    :hover {
      cursor: pointer;
      color: ${props => props.theme.bgComp};
    }
`
export const DesktopLi = styled.li`
  height: 70px;
  padding: 1rem 3rem;
  transition: border-bottom 0.6s, box-shadow 0.6s, background 0.6s,
    border-bottom-left-radius 0.6s, border-bottom-right-radius 0.6s, color 0.6s;

  :hover {
    cursor: pointer;
    background: ${props => props.theme.fg};
    color: ${props => props.theme.bgComp};
    border-bottom: 4px solid ${props => props.theme.fgComp};
    border-bottom-left-radius: 1rem;
    border-bottom-right-radius: 1rem;
    box-shadow: 0 1px 1px ${props => props.theme.fg};
  }
`
