import logo from './logo.svg';
import './App.css';
import Login from './components/login/Login'
import BusinessProfile from './components/businessProfile/BusinessProfile';
import HomeScreen from './components/homeScreen/HomeScreen';
import Terms from './components/terms&Condition/Terms';
import { BrowserRouter as Router, Routes, Route, Link, Redirect } from 'react-router-dom'
import BusinessLogin from './components/businessLogin/BusinessLogin';
import Signup from './components/signup/Signup';
import BankDetails from './components/bankdetails/BankDetails';
import DashboardPractitioner from './components/dashboardPractitioner/DashboardPractitioner';
import PrescriptionHistory from './components/prescriptionHistory/PrescriptionHistory';
import ForgetPassword from './components/forgetpassword/ForgetPassword';
import LoginPractitioner from './components/login/LoginPractitioner';
import LoginAdmin from './components/login/LoginAdmin';
import SignupPractitioner from './components/signup/SignupPractitioner';
import SignupAdmin from './components/signup/SignupAdmin';
import AdminDashboard from './components/admin/AdminDashboard';

function App() {
  return (
    <div className="App">

       <Router>
        <Routes>
          <Route exact path='/businessprofile' element={<BusinessProfile />} />
          <Route exact path='/' element={<Login />} />
          <Route exact path='/loginadmin' element={<LoginAdmin />} />
          <Route exact path='/loginpractitioner' element={<LoginPractitioner />} />
          <Route exact path='/forget' element={<ForgetPassword />} />
          <Route exact path='/businesslogin' element={<BusinessLogin />} />
          <Route exact path='/terms' element={<Terms />} />
          <Route exact path='/homescreen' element={<HomeScreen />} />
          <Route exact path='/signup/:email' element={<Signup />} />
          <Route exact path='/signupadmin/:email' element={<SignupAdmin />} />
          <Route exact path='/signuppractitioner/:email' element={<SignupPractitioner />} />
          <Route exact path='/bankdetails' element={<BankDetails />} />
          <Route exact path='/dashboardpractitioner' element={<DashboardPractitioner />} />
          <Route exact path='/prescriptionhistory' element={<PrescriptionHistory />} />
          <Route exact path='/dashboardadmin' element={<AdminDashboard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
