import React from 'react';
import { LayoutAdmin } from 'layout/admin/index';
import { UserPage } from 'pages/users-management/index';
import { QaPage } from 'pages/qa/index';
import { WidgetSettingPage } from 'pages/widget-setting/index';
import { InforPage } from 'pages/infor';
import 'antd/dist/antd.css';
import './App.scss';
import {
  BrowserRouter,
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';
import PublicRoute from 'router/publicRoute';
import { PrivateRoute } from 'router/privateRoute';
import ProtectedRoutes from 'router/protectedRoute';
import Error from 'pages/error';

function App() {
  return (
    <BrowserRouter>
      <LayoutAdmin>
        <Routes>
          <Route
            path='qa'
            element={<PrivateRoute roles={['admin']} component={QaPage} />}
          />
          <Route
            path='widget-setting'
            element={
              <PrivateRoute roles={['admin']} component={WidgetSettingPage} />
            }
          />
          <Route
            path='infor'
            element={<PrivateRoute roles={['admin']} component={InforPage} />}
          />
          <Route
            path='user'
            element={<PrivateRoute roles={['admin']} component={UserPage} />}
          />
          <Route path='*' element={<Error />} />
        </Routes>
      </LayoutAdmin>
    </BrowserRouter>
  );
}

export default App;
