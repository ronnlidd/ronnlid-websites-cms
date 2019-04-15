import React from "react"
import Technology from "./technology"
import ReactImg from "../images/react.jpg"
import JavaScriptImg from "../images/javascript.jpg"
import HTML5Img from "../images/html5.jpg"
import CSS3Img from "../images/css3.jpg"
import SASSImg from "../images/sass.jpg"
import GatsbyImg from "../images/gatsby.png"
import GraphQLImg from "../images/GraphQL.png"
import NetlifyImg from "../images/netlify.png"
import "../styles/techStack.css"
import { Spring } from "react-spring/renderprops"

export default class TechStack extends React.Component {
  render() {
    return (
      <Spring
        from={{
          opacity: 0,
          marginLeft: -200,
        }}
        to={{ opacity: 1, marginLeft: 0 }}
        config={{ delay: 200 }}
      >
        {props => (
          <div className="techStack" style={props}>
            <Technology
              title="Netlify"
              officialDocs="https://www.netlify.com/"
              image={NetlifyImg}
              aka="Netlify host"
              sort="web host"
              reasonForUse="host your website, manage content (I can set up a blog for you with Netlify CMS that you can then edit easily with almost no technical knowledge), project management and backend services"
            />
            <Technology
              title="Gatsby"
              officialDocs="https://www.gatsbyjs.org/docs/"
              image={GatsbyImg}
              aka="GatsbyJS"
              sort="framework"
              reasonForUse="build fast websites that are up to date with the latest & best philosophies in web development"
            />
            <Technology
              title="GraphQL"
              officialDocs="https://graphql.org/learn/"
              image={GraphQLImg}
              aka="the new way to query data"
              sort="spec"
              reasonForUse="query data (mainly via APIs). The benefit of using GraphQL is that you get back exactly the data you query, as opposed to a whole batch of resources as in for example REST APIs, one of the most popular alternatives"
            />
            <Technology
              title="React"
              officialDocs="https://reactjs.org/docs/getting-started.html"
              image={ReactImg}
              aka="ReactJS"
              sort="library"
              reasonForUse="build re-usable components & create the UI of a website"
            />
            <Technology
              title="SCSS"
              officialDocs="https://sass-lang.com/guide"
              image={SASSImg}
              sort="extension"
              an={true}
              aka="SASS"
              reasonForUse="style a website faster and with more readable code than CSS, which SCSS will eventually be compiled to"
            />

            <Technology
              title="JavaScript"
              officialDocs="https://developer.mozilla.org/bm/docs/Web/JavaScript"
              aka="JS"
              image={JavaScriptImg}
              sort="programming language"
              reasonForUse="introduce user interactivity to apps (websites) and very much more. It is used in React, for example"
            />
            <Technology
              title="CSS3"
              officialDocs="https://developer.mozilla.org/kab/docs/Web/CSS"
              aka="Cascading Stylesheets"
              image={CSS3Img}
              sort="library"
              reasonForUse="style websites"
            />
            <Technology
              title="HTML5"
              officialDocs="https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5"
              aka="HyperText Markup Language"
              image={HTML5Img}
              sort="markup language"
              reasonForUse='add elements, or "the skeleton" of a website'
            />
          </div>
        )}
      </Spring>
    )
  }
}
