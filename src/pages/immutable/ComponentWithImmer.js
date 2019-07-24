import React from "react";
import produce from "immer";

export default class ComponentWithImmer extends React.PureComponent {
  state = {
    count: 1,
    user: { age: 20 }
  };
  onClick = () => {
    // this.setState(
    //   produce(state => {
    //     state.count = 1;
    //   })
    // );

    this.setState({ count: 1 });
  };

  onAgeClick = () => {
    this.setState(state => {
      // state.user.age++;
      // let { age } = state.user;
      const { user } = state;

      user.age++;

      // state.user = { age: ++age };
      return { user };
    });
  };

  componentDidUpdate() {
    console.info("componentDidUpdate");
  }

  render() {
    console.info("xx");
    return (
      <div>
        <label>{this.state.count}</label>
        <button onClick={this.onClick}>加1</button>
        <div>
          <label>{this.state.user.age}</label>
          <button onClick={this.onAgeClick}>年龄加1</button>
        </div>
      </div>
    );
  }
}
