import React, { Component } from "react"
import {
  StyledH1,
  StyledH2,
  StyledP,
} from "../../styledComponents/textStyledComponents"
import {
  FlexRow,
  StyledLi,
  StyledImg,
  StyledImgTwo,
} from "../../styledComponents/styledComponents"
import PizzeriaMenyInstans from "./pizzeriaMenyInstans"
import PizzaImgOne from "./pizzaImgs/pizzaOne"
import PizzaImgTwo from "./pizzaImgs/pizzaTwo"
import PizzaImgThree from "./pizzaImgs/pizzaThree"

export default class PizzeriaMeny extends Component {
  render() {
    return (
      <div id="meny">
        <StyledH1>Meny</StyledH1>

        <StyledH2>Pizzor:</StyledH2>
        <FlexRow style={{ margin: "0 auto 0 -3rem" }}>
          <PizzeriaMenyInstans
            name="Exempelrätt"
            price="100"
            ingredients={["Ingrediens 1", "Ingrediens 2", "Ingrediens 3"]}
          />
          <PizzeriaMenyInstans
            name="Exempelrätt"
            price="100"
            ingredients={["Ingrediens 1", "Ingrediens 2", "Ingrediens 3"]}
          />
          <PizzeriaMenyInstans
            name="Exempelrätt"
            price="100"
            ingredients={["Ingrediens 1", "Ingrediens 2", "Ingrediens 3"]}
          />
          <PizzeriaMenyInstans
            name="Exempelrätt"
            price="100"
            ingredients={["Ingrediens 1", "Ingrediens 2", "Ingrediens 3"]}
          />
          <PizzeriaMenyInstans
            name="Exempelrätt"
            price="100"
            ingredients={["Ingrediens 1", "Ingrediens 2", "Ingrediens 3"]}
          />
        </FlexRow>
        <StyledImg>
          <PizzaImgOne />
          <div className="overlay">
            <br />
            <br />

            <PizzeriaMenyInstans
              name="Exempelrätt"
              price="100"
              ingredients={["Ingrediens 1", "Ingrediens 2", "Ingrediens 3"]}
            />
          </div>
        </StyledImg>
        <StyledH2>Inbakade pizzor:</StyledH2>
        <FlexRow style={{ margin: "0 auto 0 -3rem" }}>
          <PizzeriaMenyInstans
            name="Exempelrätt"
            price="100"
            ingredients={["Ingrediens 1", "Ingrediens 2", "Ingrediens 3"]}
          />
          <PizzeriaMenyInstans
            name="Exempelrätt"
            price="100"
            ingredients={["Ingrediens 1", "Ingrediens 2", "Ingrediens 3"]}
          />
          <PizzeriaMenyInstans
            name="Exempelrätt"
            price="100"
            ingredients={["Ingrediens 1", "Ingrediens 2", "Ingrediens 3"]}
          />
          <PizzeriaMenyInstans
            name="Exempelrätt"
            price="100"
            ingredients={["Ingrediens 1", "Ingrediens 2", "Ingrediens 3"]}
          />
          <PizzeriaMenyInstans
            name="Exempelrätt"
            price="100"
            ingredients={["Ingrediens 1", "Ingrediens 2", "Ingrediens 3"]}
          />
        </FlexRow>
        <StyledH2>Pasta:</StyledH2>
        <FlexRow style={{ margin: "0 auto 0 -3rem" }}>
          <PizzeriaMenyInstans
            name="Exempelrätt"
            price="100"
            ingredients={["Ingrediens 1", "Ingrediens 2", "Ingrediens 3"]}
          />
          <PizzeriaMenyInstans
            name="Exempelrätt"
            price="100"
            ingredients={["Ingrediens 1", "Ingrediens 2", "Ingrediens 3"]}
          />
          <PizzeriaMenyInstans
            name="Exempelrätt"
            price="100"
            ingredients={["Ingrediens 1", "Ingrediens 2", "Ingrediens 3"]}
          />
          <PizzeriaMenyInstans
            name="Exempelrätt"
            price="100"
            ingredients={["Ingrediens 1", "Ingrediens 2", "Ingrediens 3"]}
          />
          <PizzeriaMenyInstans
            name="Exempelrätt"
            price="100"
            ingredients={["Ingrediens 1", "Ingrediens 2", "Ingrediens 3"]}
          />
        </FlexRow>
        <StyledH2>Kebab:</StyledH2>

        <FlexRow style={{ margin: "0 auto 0 -3rem" }}>
          <PizzeriaMenyInstans
            name="Exempelrätt"
            price="100"
            ingredients={["Ingrediens 1", "Ingrediens 2", "Ingrediens 3"]}
          />
          <PizzeriaMenyInstans
            name="Exempelrätt"
            price="100"
            ingredients={["Ingrediens 1", "Ingrediens 2", "Ingrediens 3"]}
          />
          <PizzeriaMenyInstans
            name="Exempelrätt"
            price="100"
            ingredients={["Ingrediens 1", "Ingrediens 2", "Ingrediens 3"]}
          />
          <PizzeriaMenyInstans
            name="Exempelrätt"
            price="100"
            ingredients={["Ingrediens 1", "Ingrediens 2", "Ingrediens 3"]}
          />
          <PizzeriaMenyInstans
            name="Exempelrätt"
            price="100"
            ingredients={["Ingrediens 1", "Ingrediens 2", "Ingrediens 3"]}
          />
        </FlexRow>
        <StyledH2>Drycker:</StyledH2>

        <FlexRow style={{ margin: "0 auto 0 -3rem" }}>
          <PizzeriaMenyInstans
            name="Exempelrätt"
            price="100"
            ingredients={["Ingrediens 1", "Ingrediens 2", "Ingrediens 3"]}
          />
          <PizzeriaMenyInstans
            name="Exempelrätt"
            price="100"
            ingredients={["Ingrediens 1", "Ingrediens 2", "Ingrediens 3"]}
          />
          <PizzeriaMenyInstans
            name="Exempelrätt"
            price="100"
            ingredients={["Ingrediens 1", "Ingrediens 2", "Ingrediens 3"]}
          />
          <PizzeriaMenyInstans
            name="Exempelrätt"
            price="100"
            ingredients={["Ingrediens 1", "Ingrediens 2", "Ingrediens 3"]}
          />
          <PizzeriaMenyInstans
            name="Exempelrätt"
            price="100"
            ingredients={["Ingrediens 1", "Ingrediens 2", "Ingrediens 3"]}
          />
        </FlexRow>
        <StyledH2>Tillbehör:</StyledH2>

        <FlexRow style={{ margin: "0 auto 0 -3rem" }}>
          <PizzeriaMenyInstans
            name="Exempelrätt"
            price="100"
            ingredients={["Ingrediens 1", "Ingrediens 2", "Ingrediens 3"]}
          />
          <PizzeriaMenyInstans
            name="Exempelrätt"
            price="100"
            ingredients={["Ingrediens 1", "Ingrediens 2", "Ingrediens 3"]}
          />
          <PizzeriaMenyInstans
            name="Exempelrätt"
            price="100"
            ingredients={["Ingrediens 1", "Ingrediens 2", "Ingrediens 3"]}
          />
          <PizzeriaMenyInstans
            name="Exempelrätt"
            price="100"
            ingredients={["Ingrediens 1", "Ingrediens 2", "Ingrediens 3"]}
          />
          <PizzeriaMenyInstans
            name="Exempelrätt"
            price="100"
            ingredients={["Ingrediens 1", "Ingrediens 2", "Ingrediens 3"]}
          />
        </FlexRow>
        <StyledH2>Alternativ:</StyledH2>
        <ul>
          <StyledLi style={{ margin: ".9rem 1.9rem .9rem .9rem" }}>
            Standard
          </StyledLi>
          <StyledLi style={{ margin: ".9rem 1.9rem .9rem .9rem" }}>
            Inbakad
          </StyledLi>
          <StyledLi style={{ margin: ".9rem 1.9rem .9rem .9rem" }}>
            Dubbel botten (+5kr)
          </StyledLi>
          <StyledLi style={{ margin: ".9rem 1.9rem .9rem .9rem" }}>
            Dubbelinbakad (+10kr)
          </StyledLi>
          <StyledLi style={{ margin: ".9rem 1.9rem .9rem .9rem" }}>
            Glutenfri (+30kr)
          </StyledLi>
          <StyledLi style={{ margin: ".9rem 1.9rem .9rem .9rem" }}>
            Barnpizza (-10kr)
          </StyledLi>
          <StyledLi style={{ margin: ".9rem 1.9rem .9rem .9rem" }}>
            Glutenfri (+30kr)
          </StyledLi>
          <StyledLi style={{ margin: ".9rem 1.9rem .9rem .9rem" }}>
            Familjepizza (+115kr)
          </StyledLi>
        </ul>
        <StyledP>Det går även att ta bort ingredienser.</StyledP>
        <StyledImgTwo>
          <PizzaImgTwo />
          <div className="overlay">
            <br />
            <br />

            <PizzeriaMenyInstans
              name="Exempelrätt"
              price="100"
              ingredients={["Ingrediens 1", "Ingrediens 2", "Ingrediens 3"]}
            />
          </div>
        </StyledImgTwo>
        <StyledImgTwo>
          <PizzaImgThree />
          <div className="overlay">
            <br />
            <br />

            <PizzeriaMenyInstans
              name="Exempelrätt"
              price="100"
              ingredients={["Ingrediens 1", "Ingrediens 2", "Ingrediens 3"]}
            />
          </div>
        </StyledImgTwo>
      </div>
    )
  }
}
