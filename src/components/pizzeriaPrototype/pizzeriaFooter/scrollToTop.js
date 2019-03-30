import React, { Component } from "react"

export default class ScrollButton extends Component {
  constructor() {
    super()

    this.state = {
      intervalId: 0,
    }
  }

  scrollStep() {
    if (window.pageYOffset === 0) {
      clearInterval(this.state.intervalId)
    }
    window.scroll(0, window.pageYOffset - this.props.scrollStepInPx)
  }

  scrollToTop() {
    let intervalId = setInterval(
      this.scrollStep.bind(this),
      this.props.delayInMs
    )
    this.setState({ intervalId: intervalId })
  }

  render() {
    return (
      <button
        title="Back to top"
        style={{
          float: "right",
          marginTop: "-2.5rem",
          borderRadius: "1rem",
          overflow: "hidden",
        }}
        className="scroll"
        onClick={() => {
          this.scrollToTop()
        }}
      >
        <i class="fas fa-arrow-up" />
      </button>
    )
  }
}
