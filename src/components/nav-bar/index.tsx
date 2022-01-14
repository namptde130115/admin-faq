import React, { useState } from 'react';
import { Menu } from 'antd';
import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import styles from './index.module.scss';
import clsx from 'clsx';

export const NavBar: React.FC = () => {
  const [current, setCurrent] = useState<string>('mail');

  const handleClick = (e: any) => {
    console.log('click ', e);
    setCurrent(e.key);
  };

  return (
    <nav className={styles.nav__container}>
      <Menu
        className={styles.nav__menu}
        onClick={handleClick}
        selectedKeys={[current]}
        mode='inline'
        style={{ width: 100 }}
      >
        <Menu.Item
          key='mail'
          icon={<MailOutlined className={styles.nav__menuItem__icon} />}
          className={styles.nav__menuItem}
        ></Menu.Item>
        <Menu.Item
          key='app'
          icon={<AppstoreOutlined className={styles.nav__menuItem__icon} />}
          className={styles.nav__menuItem}
        ></Menu.Item>
        <Menu.Item
          key='aaa'
          icon={<SettingOutlined className={styles.nav__menuItem__icon} />}
          className={styles.nav__menuItem}
        ></Menu.Item>
        <Menu.Item
          key='alipay'
          icon={<AppstoreOutlined className={styles.nav__menuItem__icon} />}
          className={styles.nav__menuItem}
        ></Menu.Item>
      </Menu>

      <Menu
        className={clsx(styles.nav__menu, styles.bottom)}
        onClick={handleClick}
        selectedKeys={[current]}
        mode='inline'
        style={{ width: 100 }}
      >
        <Menu.Item
          key='mail'
          icon={<MailOutlined className={styles.nav__menuItem__icon} />}
          className={styles.nav__menuItem}
        ></Menu.Item>
        <Menu.Item
          key='app'
          icon={<AppstoreOutlined className={styles.nav__menuItem__icon} />}
          className={styles.nav__menuItem}
        ></Menu.Item>
        <Menu.Item
          key='aaa'
          icon={<SettingOutlined className={styles.nav__menuItem__icon} />}
          className={styles.nav__menuItem}
        ></Menu.Item>
        <Menu.Item
          key='alipay'
          icon={<AppstoreOutlined className={styles.nav__menuItem__icon} />}
          className={styles.nav__menuItem}
        ></Menu.Item>
      </Menu>
    </nav>
  );
};
