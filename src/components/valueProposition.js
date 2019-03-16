import React, { Component } from "react"
import styled from "styled-components"
import { BasicButton } from "./styledComponents"
import "../styles/valueProposition.css"

const BasicPitch = styled.div`
  padding: 0.5rem;
  display: flex;
  justify-content: space-around;
  border: 1px solid #fff;
  width: 85vw;
  margin: 0 auto;
  background: #0b132b;
  border-radius: 1rem;

  & button {
    margin: 0.1rem;
  }
`

export class ValueProposition extends Component {
  constructor() {
    super()

    this.state = {
      showTime: false,
      showMoney: false,
      showCustomers: false,
    }

    this.setShowTime = this.setShowTime.bind(this)
    this.setShowMoney = this.setShowMoney.bind(this)
    this.setShowCustomers = this.setShowCustomers.bind(this)
  }

  setShowTime() {
    this.setState({
      showTime: !this.state.showTime,
    })
  }

  setShowMoney() {
    this.setState({
      showMoney: !this.state.showMoney,
    })
  }

  setShowCustomers() {
    this.setState({
      showCustomers: !this.state.showCustomers,
    })
  }

  render() {
    const { showTime, showMoney, showCustomers } = this.state
    return (
      <div className="valueProposition" id="value-proposition">
        <h3>
          Reducing the pain and increasing the joy of using a website, for
          owners and customers.
        </h3>
        <h2 className="slogan">
          <em>Experience is the ultimate source of value</em>
        </h2>
        <h3>
          <span className="mediaQueryTap">Tap</span>
          <span className="mediaQueryClick">Click</span> to view more
        </h3>
        <BasicPitch>
          <BasicButton onClick={this.setShowTime}>
            More <i className="fas fa-stopwatch" />
          </BasicButton>
          <BasicButton onClick={this.setShowMoney}>
            More <i className="fas fa-dollar-sign" />
          </BasicButton>
          <BasicButton onClick={this.setShowCustomers}>
            More <i className="fas fa-handshake" />
          </BasicButton>
        </BasicPitch>
        <div className="valuePropositionCards">
          {showTime ? (
            <div className="card">
              <h2>
                More <i className="fas fa-stopwatch" />
              </h2>
              <h5>
                Your time is <mark>valuable</mark> because you can use it to
                experience and accomplish. <br />
                <br />
                <strong>I will get you more time by:</strong>
              </h5>
              <ul>
                <li className="firstLi">
                  <i className="fas fa-check-square" /> Hosting your website on
                  a server
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
                  <i className="fas fa-check-square" /> Implementing your
                  website ideas
                </li>
              </ul>
            </div>
          ) : null}

          {showMoney ? (
            <div className="card">
              <h2>
                More <i className="fas fa-dollar-sign" />
              </h2>
              <h5>
                Your money is <mark>valuable</mark>, because... alright, I don't
                have to convince you on that one...{" "}
                <i className="fas fa-smile-wink" />
                <br />
                <br />
                <strong>I will get you more money by:</strong>
              </h5>
              <ul>
                <li className="firstLi">
                  <i className="fas fa-check-square" /> Reducing website costs
                  by using modules & components
                </li>
                <li>
                  <i className="fas fa-check-square" /> Providing actionable
                  data with help from{" "}
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
          ) : null}
          {showCustomers ? (
            <div className="card">
              <h2>
                More <i className="fas fa-handshake" />
              </h2>
              <h5>
                Your customers are <mark>valuable</mark>, on top of their
                inherent value they also provide revenue. Customers, people seek
                & go to valuable experiences.
                <br />
                <br />
                <strong>I will get you more customers by:</strong>
              </h5>
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
          ) : null}
        </div>
      </div>
    )
  }
}

export default ValueProposition
