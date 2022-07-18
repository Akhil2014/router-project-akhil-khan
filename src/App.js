
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import AllRoutes from './Routes/AllRoutes';
import Login from './Routes/Login';

function App() {
  return (
    <div className="App">
      <Navbar />
      <AllRoutes />
    </div>
  );
}

export default App;
