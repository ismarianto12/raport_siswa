import React from "react";
import TopLoader from "react-top-loader";

class Animator extends React.Component {
    state = { progress: 0 };
   
    componentDidMount() {
      setInterval(
        () => this.setState({ progress: Math.min(1, this.state.progress + 0.1) }),
        400
      );
    }
   
    render() {
      return <TopLoader show progress={this.state.progress} {...this.props} />;
    }
  }

  export default Animator