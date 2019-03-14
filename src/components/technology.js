import React from "react"

export default class Technology extends React.Component {
  render() {
    const {
      title,
      image,
      aka,
      an,
      sort,
      reasonForUse,
      officialDocs,
    } = this.props

    return (
      <div className="technologyComponent">
        <h1>{title}</h1>
        <img
          className="technologyImg"
          src={image}
          alt="One of the used technologies"
        />

        <p>
          {title}, also referred to as {aka}, is {an ? "an" : "a"} {sort}. The
          reason to use {title} is to {reasonForUse}.
        </p>
        <a
          href={officialDocs}
          target="_blank"
          rel="noopener noreferrer"
          className="readMore"
        >
          You can read more here
        </a>
      </div>
    )
  }
}
