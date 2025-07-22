import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import paths from './paths';
import Login from '../Views/Login/LoginView';
import Home from '../Views/Home/HomeView';

function AppRoutes (){
    return (
    <Router>
      <Routes>
        <Route path={paths.login} element={<Login />} />
        <Route path={paths.home} element={<Home />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default AppRoutes;