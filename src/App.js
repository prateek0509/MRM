import logo from './logo.svg';
import './App.css';
import Login from './components/login/Login'
import BusinessProfile from './components/businessProfile/BusinessProfile';
import HomeScreen from './components/homeScreen/HomeScreen';
import Terms from './components/terms&Condition/Terms';
import { BrowserRouter as Router, Routes, Route, Link, Redirect } from 'react-router-dom'
import BusinessLogin from './components/businessLogin/BusinessLogin';

function App() {
  return (
    <div className="App">

       <Router>
        <Routes>
          <Route exact path='/businessprofile' element={<BusinessProfile />} />
          <Route exact path='/' element={<Login />} />
          <Route exact path='/businesslogin' element={<BusinessLogin />} />
          <Route exact path='/terms' element={<Terms />} />
          <Route exact path='/homescreen' element={<HomeScreen />} />
        </Routes>
      </Router>
      {/* <Terms/> */}
      {/* <Login /> */}
      {/* <HomeScreen /> */}
      {/* <BusinessProfile/> */}
    </div>
  );
}

export default App;
