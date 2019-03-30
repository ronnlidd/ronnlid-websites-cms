import React, { Component } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import "../styles/buy.css"
import {
  BasicButton,
  NetlifyForm,
  FlexRow,
} from "../components/styledComponents/styledComponents"
import Skus from "../components/Skus"
import "../styles/svenska/svenska.css"
import GoogleMapDavidRonnlid from "../components/googleMapDavidRonnlid"
import { Link } from "gatsby"

export default class Svenska extends Component {
  render() {
    const { location, data } = this.props
    return (
      <Layout location={location} pageTitle="Svenska">
        <SEO
          title="Köp billig, väldesignad, special-anpassad, högpresterande hemsida via Svenska Ronnlid Websites"
          description="Denna sida är för svenska köpare, främst småföretag som t.ex. pizzeria, bloggare eller frisör. Här kan du läsa om varför du ska välja Ronnlid Website, och ta det första steget till att få din helt egna hemsida."
          lang="sv"
          keywords={["Svenska", "Köp", "Hemsida"]}
        />
        <div>
          <Link to="/pizzeria-prototyp">
            <BasicButton>Lokal pizzeria? Se exempelhemsida</BasicButton>
          </Link>

          <h3>På en kort tid bygger jag en ...</h3>
          <ul className="saljande">
            <li>Väl-designad</li>
            <li>Special-anpassad</li>
            <li>Kostnadseffektiv (billig)</li>
            <li>Högpresterande</li>
          </ul>
          <h3>
            ... hemsida till ditt företag. Hemsidan kan anpassas så att den ser
            ut precis hur du vill.
          </h3>

          <h2 className="mindreSmarta">
            Mindre smärta och mer nöje från webbsidan, för både ägaren och
            slut-användaren.
          </h2>

          <GoogleMapDavidRonnlid pizzeria={false} />
        </div>
        <h1>Köp</h1>
        <Img fluid={data.file.childImageSharp.fluid} className="handshake" />
        <h2>Metod 1: Mejla dina krav</h2>
        <a href="mailto:david@ronnlidwebsites.com">
          <BasicButton>MEJLA DINA KRAV FRÅN VALFRITT PROGRAM</BasicButton>
        </a>
        <br />
        <br />
        <h2>Metod 2: Mejla dina krav</h2>
        <NetlifyForm
          name="contact"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
          action="/contact-success/"
        >
          <p>
            <label>
              Ditt namn: <br />
              <input
                type="text"
                name="name"
                placeholder=" Förnamn och efternamn"
              />
            </label>
          </p>
          <p>
            <label>
              Din e-postadress: <br />
              <input
                type="email"
                name="email"
                placeholder=" E-postadress"
                required
              />
            </label>
          </p>
          <p>
            <label />
            Meddelande: <br />
            <textarea
              name="message"
              required
              placeholder="Berätta för mig vad du vill att hemsidan ska göra för ditt företag och vad du har för krav på design."
            />
          </p>
          <p>
            <label className="fileContainer">
              Sketch eller dylikt: <input type="file" name="name" />
            </label>
          </p>
          <p>
            <BasicButton type="submit" style={{ fontWeight: "300" }}>
              SKICKA
            </BasicButton>
          </p>
        </NetlifyForm>
        <br />
        <br />
        <h2>Metod 3: Välj ett fastpris-paket</h2>
        <h4>
          I nästa steg, välj en e-postadress som du kan använda för att läsa och
          skicka mejl.
        </h4>
        <FlexRow id="fixedCostPackages">
          <Skus
            description={[
              "Detta är det enklaste paketet. Perfekt för en lokal pizzeria eller frisör. Visa upp information om företaget och dess produkter eller tjänster och länka till sociala medier och andra kontaktvägar.",
              "Typisk startup-webbsida med lite mer komplexa kapaciteter. Välj vad som passar för dina behov mellan några funktioner som verkligen höjer kundupplevelsen!",
              "Complex website with a great deal of features that make the UX (User Experience) splendid. Store integration, customer login, contact forms, etc.)",
            ]}
            imgSrc={[
              data.packageOne.childImageSharp.fluid,
              data.packageTwo.childImageSharp.fluid,
              data.packageThree.childImageSharp.fluid,
            ]}
            listItems={[
              [
                "Din valda information uppvisad",
                "Industrins standard inom webbutveckling. (Responsiv m.m.)",
                "Formbar design",
                "Hosting uppsatt",
                "Valfritt domännamn",
                "Max 3 sidor",
              ],
              [
                "Din egen information uppvisad",
                "Industrins standard inom webbutveckling. (Responsiv m.m.)",
                "Formbar design",
                "Hosting uppsatt",
                "Valfritt domännamn",
                "Butik med max 1 produkt ELLER blog med lätt-användbart CMS för författaren",
                "Samla information genom kontakt- ELLER nyhetsbrev-formulär",
                "Max 10 sidor",
              ],
              [
                "Din valda information uppvisad",
                "Industrins standard inom webbutveckling. (Responsiv m.m.)",
                "Formbar design",
                "Hosting uppsatt",
                "Valfritt domännamn",
                "Blog med lätt-användbart CMS för författaren",
                "Samla information genom kontakt- och nyhetsbrev-formulär",
                "Butik med max 10 produkter",
                "Max 40 sidor",
              ],
            ]}
            choices={[false, false, false]}
          />
        </FlexRow>
        <Img
          fluid={data.securedbystripe.childImageSharp.fluid}
          className="securedByStripe"
        />
      </Layout>
    )
  }
}

export const query = graphql`
  query SwedishImage {
    file(relativePath: { regex: "/handshake/" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    securedbystripe: file(relativePath: { regex: "/securedbystripe/" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    packageOne: file(relativePath: { regex: "/fixedPackageOne/" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    packageTwo: file(relativePath: { regex: "/fixedPackageTwo/" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    packageThree: file(relativePath: { regex: "/fixedPackageThree/" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`
