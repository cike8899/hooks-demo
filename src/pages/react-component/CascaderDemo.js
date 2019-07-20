import React from 'react';
import Cascader from 'rc-cascader';

import styles from './cascader.module.css';

import 'rc-cascader/assets/index.css';

const options = [
  {
    label: '福建',
    value: 'fj',
    children: [
      {
        label: '福州',
        value: 'fuzhou',
        children: [
          {
            label: '马尾',
            value: 'mawei'
          }
        ]
      },
      {
        label: '泉州',
        value: 'quanzhou'
      }
    ]
  },
  {
    label: '浙江',
    value: 'zj',
    children: [
      {
        label: '杭州',
        value: 'hangzhou',
        children: [
          {
            label: '余杭',
            value: 'yuhang'
          },
          {
            label: '拱墅',
            value: 'gongshu'
          }
        ]
      }
    ]
  },
  {
    label: '北京',
    value: 'bj',
    children: [
      {
        label: '朝阳区',
        value: 'chaoyang'
      },
      {
        label: '海淀区',
        value: 'haidian'
      }
    ]
  }
];

const CascaderDemo = () => {
  const onLabelClick = path => e => {
    e.stopPropagation();
    console.info(path); // 打印出文件的该节点的路径
  };
  const renderMyCasCader = (options = [], path = []) => {
    return (
      <ul className={styles.myContainer}>
        {options.map((x, idx) => {
          const newPath = path.concat(x.value);
          return (
            <li key={idx}>
              <label htmlFor="" onClick={onLabelClick(newPath)}>
                {x.label}
              </label>
              {Array.isArray(x.children) &&
                renderMyCasCader(x.children, newPath)}
            </li>
          );
        })}
      </ul>
    );
  };
  return (
    <div className={styles.wrapper}>
      <div>
        <label htmlFor="" className={styles.label}>
          rc-cascader
        </label>
        <Cascader options={options}>
          <input placeholder="please select address" />
        </Cascader>
      </div>
      <div>
        <label htmlFor="" className={styles.label}>
          my
        </label>
        {renderMyCasCader(options)}
      </div>
    </div>
  );
};

export default CascaderDemo;
