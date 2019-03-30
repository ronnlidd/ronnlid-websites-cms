import React, { Component } from "react"
import { Link } from "gatsby"
import { BasicButton } from "./styledComponents/styledComponents"
import "../styles/faq.css"

const Question = props => <h4>{props.question}</h4>

const Answer = props => <p>{props.answer}</p>

export default class FAQ extends Component {
  render() {
    return (
      <div className="faq">
        <h1 className="stdh1 learnMoreTitle" id="faq">
          Frequently Asked Questions
        </h1>
        <Question question="Can you give me some idea of cost, even if it’s a range?" />
        <Answer
          answer="Yes. It is very dependent on the needs, but a responsive, simple, static website with social media links and basic company information displayed can go for as little as $200.
        If you want hosting configuration on top of that, which you probably do, you will have to pay more, around $100 for me setting it up. On the other hand, a website which fetches, uses and displays data from a database or APIs (customer login, stores, 3rd party integrations), will be much more expensive. In general it is more or less costly for you dependent on how complex the functionality of your website is. I have these very low prices for websites for a limited time, as my business grows and I evolve as a web developer the websites will become more expensive."
        />
        <Link to="/buy#fixedCostPackages">
          <BasicButton>GO TO FIXED COST PACKAGES</BasicButton>
        </Link>
        <br />
        <br />

        <Question question="Be honest with me. What are the potential issues with this approach?" />
        <Answer answer="You may be looking for perfect accessibility, perfect cross-browser compatibility, perfect performance, etc. Well, it is impossible because there is not even a perfect way of doing things in many website-building instances, perfect is the enemy of the good. Instead, I will make sure you have great results. I will achieve this by basing my decisions on feedback I get from sub-systems of reality when building your website. An example: there is a problem with the home button in your navigation-bar, which I got as feedback from reality by clicking it without being redirected to the home page. From there I find the relevant component and dig deep into the code to find the bug, which I can then remove and integrate the wished for functionality of the website again. So with other words: yes, things can go wrong, but I'll fix them for you within agreed-upon time span." />

        <Question question="How does this compare to the other options and competitors?" />
        <Answer answer="I started this company to sell this full-fledged package with all you want in a website because I saw that in many other packages of websites for entrepreneurs, there was a requirement for the entrepreneur doing loads of work & gathering coding/internet knowledge. I intend to prevent the cognitive load from creating a website to influence your ability to perform as an entrepreneur." />
      </div>
    )
  }
}
