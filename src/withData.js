// returns a function.

import React, { Component } from "react";

const withData = (WrappedComponent) => {
  class withData extends Component {
    constructor(props) {
      super(props);

      this.state = {
        data: [],
      };
    }

    componentDidMount() {
      setTimeout(() => {
        fetch(this.props.dataSource)
          .then((res) => res.json())
          .then((data) => this.setState({ data: data.slice(0, 3) }));
      }, 1200);
    }

    render() {
      const { dataSource, ...otherProps } = this.props;
      return this.state.data.length < 1 ? (
        <h1>I am Loading, Please Wait 🤠</h1>
      ) : (
        <WrappedComponent data={this.state.data} {...otherProps} />
      );
    }
    r;
  }

  return withData;
};

export default withData;
