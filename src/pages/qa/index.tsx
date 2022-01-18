import React, { useEffect, useLayoutEffect, useState } from 'react';
import { Tabs } from 'antd';
import styles from './index.module.scss';

const { TabPane } = Tabs;

export const QaPage: React.FC = () => {
  function callback(key: any) {
    console.log(key);
  }

  const [number, setNumber] = useState(0);

  return (
    <div className={styles.container__content}>
      {console.log('render')}
      <Tabs onChange={callback} type='card' onClick={() => setNumber(0)}>
        <TabPane tab='Tab 1' key='1'>
          Content of Tab Pane 1:{number}
        </TabPane>
        <TabPane tab='Tab 2' key='2'>
          Content of Tab Pane 2
        </TabPane>
        <TabPane tab='Tab 3' key='3'>
          Content of Tab Pane 3
        </TabPane>
      </Tabs>
    </div>
  );
};
