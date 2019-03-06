import React from "react";

export default class Technology extends React.Component {
  render() {
    return (
      <div className="technologyComponent">
        <h1>{this.props.title}</h1>
        <img
          className="technologyImg"
          src={this.props.image}
          alt="One of the used technologies"
        />

        <p>
          {this.props.title}, also referred to as {this.props.aka}, is{" "}
          {this.props.an ? "an" : "a"} {this.props.sort}. The reason to use{" "}
          {this.props.title} is to {this.props.reasonForUse}.
        </p>
        <a
          href={this.props.officialDocs}
          target="_blank"
          rel="noopener noreferrer"
        >
          You can read more here
        </a>
      </div>
    );
  }
}
