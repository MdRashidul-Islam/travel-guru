import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './components/About/About';
import AddService from './components/AddService/AddService';
import Booking from './components/Booking/Booking';
import Club from './components/Club/Club';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login/Login';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import ManageBooking from './components/ManageBooking/ManageBooking';
import MyOrder from './components/MyOrder/MyOrder';
import NotFound from './components/NotFound/NotFound';
import WELLNESS from './components/WELLNESS/Wellness';
import AuthProvider from './Context/AuthProvider';



function App() {
  return (
    <div>
      <AuthProvider>
      <Router>
      <Header></Header>
        <Switch>
          <Route exact path="/">
          <Home></Home>
          </Route>
          <Route exact path="/home">
          <Home></Home>
          </Route>
          <Route exact path="/aboutUs">
          <About></About>
          </Route>
          <Route exact path="/myOrder">
          <MyOrder></MyOrder>
          </Route>
          <Route exact path="/club">
         <Club></Club>
          </Route>
          <Route exact path="/wellness">
          <WELLNESS></WELLNESS>
          </Route>
          <Route exact path="/manageBooking">
          <ManageBooking></ManageBooking>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/addService">
          <AddService></AddService>
          </Route>
         <PrivateRoute path="/booking/:roomId">
           <Booking></Booking>
         </PrivateRoute>
         <Route exact path="*">
          <NotFound></NotFound>
         </Route>
        </Switch>
        <Footer></Footer>
      </Router>
        </AuthProvider>   
     
    </div>
  );
}

export default App;
