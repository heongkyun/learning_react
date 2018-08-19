import React from 'react';
import classNames from 'classnames/bind';
import styles from './Stylish.css';

const cx = classNames.bind(styles);

const Stylish = () => {
  console.log(styles);
  return (
    <div className={cx('Stylish')}>
      <div className={cx('box', 'bordered')}></div>
    </div>
  );
};

export default Stylish;