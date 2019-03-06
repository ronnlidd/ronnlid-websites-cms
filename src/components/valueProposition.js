import React from "react"
import "../styles/valueProposition.css"

export default class ValueProposition extends React.Component {
  render() {
    return (
      <div className="valueProposition" id="value-proposition">
        <h1 style={{ marginTop: "10px" }}>Value proposition</h1>
        <h2 className="slogan">
          <em>Experience is the ultimate source of value</em>
        </h2>
        <div className="valuePropositionCards">
          <div className="card">
            <h2>
              More <i className="fas fa-stopwatch" />
            </h2>
            <h4>
              Your time is <mark>valuable</mark> because you can use it to
              experience and accomplish. <br />
              <br />
              <strong>I will get you more time by:</strong>
            </h4>
            <ul>
              <li className="firstLi">
                <i className="fas fa-check-square" /> Hosting your website on a{" "}
                server
              </li>
              <li>
                <i className="fas fa-check-square" /> Creating a domain with
                your custom name
              </li>
              <li>
                <i className="fas fa-check-square" /> Coding your website
              </li>
              <li>
                <i className="fas fa-check-square" /> Designing your website
              </li>
              <li className="lastLi">
                <i className="fas fa-check-square" /> Implementing your website
                ideas
              </li>
            </ul>
          </div>

          <div className="card">
            <h2>
              More <i className="fas fa-dollar-sign" />
            </h2>
            <h4>
              Your money is <mark>valuable</mark>, because... alright, I don't
              have to convince you on that one...{" "}
              <i className="fas fa-smile-wink" />
              <br />
              <br />
              <strong>I will get you more money by:</strong>
            </h4>
            <ul>
              <li className="firstLi">
                <i className="fas fa-check-square" /> Reducing website costs by
                using modules & components
              </li>
              <li>
                <i className="fas fa-check-square" /> Providing actionable data
                with help from{" "}
                <a
                  href="https://analytics.google.com/analytics/web/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Google Analytics
                </a>{" "}
              </li>
              <li>
                <i className="fas fa-check-square" /> Boosting amount of
                customers <i className="fas fa-arrow-right" />
              </li>
              <li className="lastLi">
                <i className="fas fa-check-square" /> Using principles of
                psychology of persuasion in website design
              </li>
            </ul>
          </div>

          <div className="card">
            <h2>
              More <i className="fas fa-handshake" />
            </h2>
            <h4>
              Your customers are <mark>valuable</mark>, on top of their inherent
              value they also provide revenue. Customers, people seek & go to
              valuable experiences.
              <br />
              <br />
              <strong>I will get you more customers by:</strong>
            </h4>
            <ul>
              <li className="firstLi">
                <i className="fas fa-check-square" /> Boosting the UX of your
                website
              </li>
              <li>
                <i className="fas fa-check-square" /> Search Enginge
                Optimization
              </li>
              <li>
                <i className="fas fa-check-square" /> Implementing marketing
                strategies
              </li>
              <li className="lastLi">
                <i className="fas fa-check-square" /> Email subscription list
                configurations
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
