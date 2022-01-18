import React from 'react';
import { LayoutAdmin } from 'layout/admin/index';
import { UserPage } from 'pages/users-management/index';
import { QaPage } from 'pages/qa/index';
import { WidgetSettingPage } from 'pages/widget-setting/index';
import { InforPage } from 'pages/infor';
import 'antd/dist/antd.css';
import './App.scss';

function App() {
  return (
    <LayoutAdmin>
      {/* <QaPage /> */}
      {/* <WidgetSettingPage /> */}
      <InforPage />
    </LayoutAdmin>
  );
}

export default App;
