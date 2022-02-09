import React, { useEffect, useLayoutEffect, useState } from 'react';
import { LayoutAdmin } from 'layout/admin';
import { GroupColumnChart } from './barchat';
import { StackedBarChart } from './stackedbarchart';
import { Tabs } from 'antd';
import styles from './index.module.scss';

const { TabPane } = Tabs;

export const QaPage: React.FC = () => {
  function callback(key: any) {
    console.log(key);
  }

  const [number, setNumber] = useState(0);

  return (
    <LayoutAdmin>
      <div className={styles.container__content}>
        {console.log('render')}
        <Tabs onChange={callback} type='card' onClick={() => setNumber(0)}>
          <TabPane tab='Tab 1' key='1'>
            <GroupColumnChart />
            <StackedBarChart />
          </TabPane>
          <TabPane tab='Tab 2' key='2'>
            Content of Tab Pane 2
          </TabPane>
          <TabPane tab='Tab 3' key='3'>
            Content of Tab Pane 3
          </TabPane>
        </Tabs>
      </div>
    </LayoutAdmin>
  );
};
