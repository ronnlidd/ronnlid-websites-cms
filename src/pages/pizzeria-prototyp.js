import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"
import { BasicButton } from "../components/styledComponents/styledComponents"
import PizzeriaSite from "../components/pizzeriaPrototype/pizzeriaSite"
import { ThemeProvider } from "styled-components"

const pizzeriaTheme = {
  fg: "#000",
  bg: "#ACBEA3",
  fgComp: "#AD5D4E",
  bgComp: "#EB6534",
}

const PizzeriaPrototype = location => (
  <Layout location={location} pageTitle="Pizzeria exempelhemsida">
    <SEO
      title="Lokal Pizzeria Stockholm Hemsida Exempel"
      description="Lokal Pizzeria Stockholm Hemsida Exempel, billig, meny, beställning, telefonnummer m.m."
      meta={[]}
      keywords={["Pizzeria Stockholm", "Pizzeria"]}
    />
    <ThemeProvider theme={pizzeriaTheme}>
      <PizzeriaSite />
    </ThemeProvider>
    <Link to="/svenska#fixedCostPackages">
      <BasicButton>Köp Pizza-hemsida (The basic package)</BasicButton>
    </Link>
    <Link to="/svenska">
      <BasicButton>
        Gå till Ronnlid Websites <i>Svenska</i>
      </BasicButton>
    </Link>
  </Layout>
)

export default PizzeriaPrototype
