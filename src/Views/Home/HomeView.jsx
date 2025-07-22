import './HomeView.css';
import { useNavigate } from 'react-router-dom';
import  paths  from '../../routes/paths';


function Home() {

  const navigate = useNavigate();

  const handleHome = () => {
    navigate(paths.home);
  };
  const handleTransaction = () => {
    navigate('/');
  };
  const handleCategories = () => {
    navigate('/');
  };
  const handleSubCategories = () => {
    navigate('/');
  };
  const handleHistory = () => {
    navigate('/');
  };
  const handleLogout = () => {
    navigate(paths.login);
  };

  return (
    
    <div className="home-view">

      <nav className="home-nav">
        <ul>
          <li><button onClick={handleHome}>Home</button></li>
          <li><button onClick={handleTransaction}>Transaction</button></li>
          <li><button onClick={handleCategories}>Categories</button></li>
          <li><button onClick={handleSubCategories}>Sub-Categories</button></li>
          <li><button onClick={handleHistory}>History</button></li>
          <li><button onClick={handleLogout}>Logout</button></li>
        </ul>
      </nav>

      <div className="home-content">
        <h1>Welcome to FinCoin</h1>
        <p>Your financial journey starts here.</p>
      </div>
      <footer className="home-footer">
        <p>&copy; 2023 FinCoin. All rights reserved.</p>
      </footer>
    </div>
  );
}
export default Home;