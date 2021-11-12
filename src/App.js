import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import AuthProvider from './Context/AuthProvider';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Explore from './Pages/Home/Explore/Explore';
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder/PlaceOrder';
function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/explore">
              <Explore />
            </Route>
            <PrivateRoute path="/dashboard">
              <Dashboard />
            </PrivateRoute>
            <PrivateRoute path="/placeOrder/:productId">
              <PlaceOrder />
            </PrivateRoute>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
