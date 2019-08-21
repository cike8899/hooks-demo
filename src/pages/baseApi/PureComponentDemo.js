import React from "react";

import styles from "./pureComponent.module.less";

export default class PureComponentDemo extends React.PureComponent {
  state = {
    username: "",
    password: "",
    counts: [6]
  };

  onClick = () => {
    this.setState({ username: "geek" });
  };

  onPlush = () => {
    this.setState(({ counts }) => {
      // 返回同一个引用，shallowEqual对比x===y肯定返回true，所以组件不会更新,
      // 这个表现跟react-redux的shallowEqual是一致的，对比state或者props第一层是不是同一个引用
      counts.push(7);
      return { counts };
    });
  };

  render() {
    const { password, username, counts } = this.state;
    return (
      <div className={styles.wrapper}>
        <p>
          <label htmlFor="">username: </label>
          <span>{username}</span>
        </p>
        <p>
          <label htmlFor="">password: </label>
          <span>{password}</span>
        </p>
        <p>{counts.map((x, idx) => x)}</p>
        <div>
          <button type="button" onClick={this.onClick}>
            submit
          </button>

          <button type="button" onClick={this.onPlush}>
            plus
          </button>
        </div>
      </div>
    );
  }
}
