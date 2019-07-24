import React from "react";
import { Form, Radio, Button } from "antd";
import styles from "./Home.module.less";

const Home = ({ form }) => {
  const { getFieldDecorator, validateFields } = form;
  const onSubmit = () => {
    validateFields((errors, values) => {
      console.info(values);
    });
  };
  return (
    <div className={styles.homeWrapper}>
      {getFieldDecorator("radio-button", { initialValue: "set" })(
        <Radio>item 1</Radio>
      )}
      <Button onClick={onSubmit}>提交</Button>
    </div>
  );
};

export default Form.create()(Home);
