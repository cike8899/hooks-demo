import React, { useRef } from "react";
import { Form, Input, Icon } from "antd";
import { connect } from "react-redux";

import styles from "./rerender.module.less";

const { create } = Form;

const RerenderContainer = ({ form }) => {
  const { getFieldDecorator, isFieldTouched, getFieldError } = form;

  const container = { sum: 10 };
  const con = useRef({ sum: 10 });

  // Only show error after a field is touched.
  const usernameError = isFieldTouched("username") && getFieldError("username");
  return (
    <div className={styles.wrapper}>
      <Form.Item
        validateStatus={usernameError ? "error" : ""}
        help={usernameError || ""}
      >
        {getFieldDecorator("username", {
          rules: [{ required: true, message: "Please input your username!" }]
        })(
          <Input
            className={styles.userName}
            prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
            placeholder="Username"
          />
        )}
      </Form.Item>
      <div>
        <EnhancedRerender container={con.current} />
      </div>
    </div>
  );
};

const Rerender = ({ counter, form }) => {
  console.info("rerender");
  const {
    getFieldDecorator,
    getFieldsError,
    getFieldError,
    isFieldTouched
  } = form;
  const passwordError = isFieldTouched("password") && getFieldError("password");
  return (
    <div>
      <p>{counter}</p>
      <Form.Item
        validateStatus={passwordError ? "error" : ""}
        help={passwordError || ""}
      >
        {getFieldDecorator("password", {
          rules: [{ required: true, message: "Please input your Password!" }]
        })(
          <Input
            prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
            type="password"
            placeholder="Password"
            className={styles.password}
          />
        )}
      </Form.Item>
    </div>
  );
};

const EnhancedRerender = connect(state => {
  console.info(state);
  return { counter: state, pig: { name: "ll" } }; // 必须返回对象，否则会报错
})(create()(Rerender));

export default create()(RerenderContainer);
