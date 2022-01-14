import React, { useState } from 'react';
import { NavBar } from 'components/nav-bar/index';
import styles from './index.module.scss';

export const LayoutAdmin: React.FC = ({ children }) => {
  return (
    <>
      <div className={styles.container}>
        <aside className={styles.container__left}>
          <NavBar />
        </aside>
        <section className={styles.container__right}>
          <div>footer</div>
        </section>
      </div>
    </>
  );
};
