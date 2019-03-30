import React from "react"
import { StyledLi } from "../../styledComponents/styledComponents"
import styled from "styled-components"

const StyledPizzaOption = styled.p`
  color: ${props => props.theme.fg};
  margin-left: 3rem;
  background: ${props => props.theme.fgComp};
  padding: 1rem;
  border-radius: 1rem;
  border: 1px solid ${props => props.theme.fg};
  margin-right: 1.2rem;
  box-shadow: 0 1px 1px ${props => props.theme.fg};
`

function PizzeriaMenyInstans(props) {
  return (
    <StyledPizzaOption>
      <strong>{props.name}:</strong> {props.price} kr <br />{" "}
      <ul style={{ marginTop: "1rem" }}>
        {props.ingredients &&
          props.ingredients.map((ingredient, id) => (
            <StyledLi key={id}>{ingredient}</StyledLi>
          ))}
      </ul>
    </StyledPizzaOption>
  )
}

export default PizzeriaMenyInstans
