import React from 'react';

class Child extends React.Component {
  static defaultProps = {
    step: 1
  };
  state = { val: 0 };
  //   componentDidMount() {
  //     this.setState({ val: this.state.val + 1 });
  //     console.info(this.state.val);
  //     this.setState({ val: this.state.val + 1 });
  //     console.info(this.state.val);
  //   }

  componentDidMount() {
    this.setState((state, props) => {
      console.info('child inner:', state, props);
      return { val: state.val + props.step };
    });
    console.info('child:', this.state.val);
  }
  render() {
    console.info('child render:', this.state.val);
    return <div>child</div>;
  }
}

export default class SetStateDemo extends React.Component {
  state = { val: 0 };

  //   componentDidMount() {
  //     this.setState({ val: this.state.val + 1 });
  //     console.info(this.state.val);
  //     this.setState({ val: this.state.val + 1 });
  //     console.info(this.state.val);
  //   }

  componentDidMount() {
    this.setState(state => {
      console.info('inner:', state);
      return { val: state.val + 1 };
    });
    console.info(this.state.val);
    this.setState(state => {
      console.info('inner:', state, this.state.val);
      return { val: state.val + 1 };
    });
    console.info(this.state.val);
  }
  render() {
    console.info('render:', this.state.val);
    return (
      <div>
        xx
        <Child step={2} />
        <Child />
      </div>
    );
  }
}
