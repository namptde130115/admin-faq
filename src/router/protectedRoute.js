import { Routes, Route } from 'react-router-dom';
import routes from 'router/router'; // Route list

const ProtectedRoutes = () => (
  <Routes>
    {routes.map(({ component: Component, path, exact }) => (
      <Route path={`/${path}`} key={path} exact={exact}>
        <Component />
      </Route>
    ))}
  </Routes>
);

export default ProtectedRoutes;
