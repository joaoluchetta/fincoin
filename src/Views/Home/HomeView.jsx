import './HomeView.css';
import { useNavigate } from 'react-router-dom';
import paths from '../../routes/paths';


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

        <div className="home-header">
          <h1>Welcome to FinCoin</h1>
        </div>

        <div className="home-body">

          <div className="home-graphic">
            <div className="home-graphic-income">
              <h3>Income</h3>
            </div>

            <div className="home-graphic-expense">
              <h3>Expense</h3>
            </div>

            <div className="home-graphic-investiment">
              <h3>Investiment</h3>
            </div>

          </div>

          <div className="home-balance">

            <div className="home-balance-total">
              <h3>Total Balance</h3>
              <p>$0.00</p>
            </div>

            <div className="home-balance-graphic">
              <h3>Balance Graphic</h3>
            </div>
          </div>

        </div>
        <footer className="home-footer">
          <p>&copy; 2025 FinCoin. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}
export default Home;