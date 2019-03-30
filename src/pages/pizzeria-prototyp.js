import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"
import { BasicButton } from "../components/styledComponents/styledComponents"
import PizzeriaSite from "../components/pizzeriaPrototype/pizzeriaSite"
import { ThemeProvider } from "styled-components"

const pizzeriaTheme = {
  fg: "black",
  bg: "white",
  fgComp: "#BAA898",
  bgComp: "#EEE0CB",
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
    <Link to="/">
      <BasicButton>
        Go to Ronnlid Websites <i>Home</i>
      </BasicButton>
    </Link>
  </Layout>
)

export default PizzeriaPrototype
