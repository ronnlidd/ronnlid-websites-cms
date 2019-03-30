import React from "react"
import { StyledP } from "../../styledComponents/textStyledComponents"
import { StyledLi } from "../../styledComponents/styledComponents"

function PizzeriaMenyInstans(props) {
  return (
    <StyledP>
      <strong>{props.name}:</strong> {props.price} kr <br />{" "}
      <ul style={{ marginTop: "1rem" }}>
        {props.ingredients.map((ingredient, id) => (
          <Spring from={{ marginLeft: -200 }} to={{ marginLeft: 0 }}>
            {props => (
              <StyledLi key={id} style={props}>
                {ingredient}
              </StyledLi>
            )}
          </Spring>
        ))}
      </ul>
    </StyledP>
  )
}

export default PizzeriaMenyInstans
