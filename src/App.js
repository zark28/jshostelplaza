import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import SignInPage from './pages/signinpage/SignInPage';
import SignInVerificationPage from './pages/signinpage/SignInVerificationPage';
import ForgotPassword from './pages/signinpage/ForgotPassword';
import ForgotPassVerify from './pages/signinpage/ForgotPassVerify';
import PassReset from './pages/signinpage/PassReset';
import {
  RespondsDataContext,
  SigninAccountContext,
  UserDataContext,
} from './components/contexts/SignupSigninContext';
import TenantBookingPage from './pages/TenantBookingPage';

import Overview from './components/dashboard/Overview';
import AllTenants from './components/dashboard/AllTenants';

import Users from './components/dashboard/Users';
import Dashboard from './pages/Dashboard';
import AdminCrm from './components/dashboard/AdminCrm';
import BookedTenants from './components/dashboard/BookedTenants';
import UserEdit from './components/dashboard/UserEdit';
import UsersView from './components/dashboard/UsersView';
import Tenants from './components/dashboard/Tenants';
import TenantEdit from './components/dashboard/TenantEdit';
import ErrorPage from './pages/ErrorPage';
import UserAdd from './components/dashboard/UserAdd';
import PendingTenants from './components/dashboard/PendingBookings';
import TenantAdd from './components/dashboard/TenantAdd';

function App() {
  const [isLogedIn, setIsLogedIn] = useState({admin:null});
  const [responseData, setResponseData] = useState({tenant:null,users:null,data:null});
const [userData,setUserData]=useState(null)



  return (
    <BrowserRouter>
      <SigninAccountContext.Provider value={{ isLogedIn, setIsLogedIn }}>
        <RespondsDataContext.Provider value={{ responseData, setResponseData }}>
      <UserDataContext.Provider value={{userData,setUserData}}>
          <div className="w-full  flex flex-col justify-center items-center ">
            <Routes>
              <Route exact path='/' element={<HomePage />} />
              <Route path="about" element={<AboutPage />} />
              <Route path="contact" element={<ContactPage />} />
              <Route path="login-verify" element={<SignInVerificationPage />} />
              <Route path="forgot-password" element={<ForgotPassword />} />
              <Route path="forgot-password-verify" element={<ForgotPassVerify />} />
              <Route path="reset-password" element={<PassReset />} />
              <Route path="book" element={<TenantBookingPage />} />
          
              <Route path="admin" element={<AdminCrm />}>
              <Route index element={<SignInPage role="admin" />} />
              <Route path="dashboard" element={ <Dashboard />} >
                <Route index element={<Overview role="admin"/>} />
                <Route path='tenants' element={<Tenants/>} >
              <Route index element={<AllTenants/>}/>
              <Route path='addtenant' element={<TenantAdd/>}/>
              <Route path=':tenantId' element={<TenantEdit/>} />
              </Route>
              <Route path='bookings' element={<Tenants/>}>
              <Route index element={<BookedTenants/>}/> 
              <Route path=':tenantId' element={<TenantEdit/>}/> 
              </Route>
              <Route path='pending' element={<Tenants/>}>
              <Route index element={<PendingTenants/>}/> 
              <Route path=':tenantId' element={<TenantEdit/>}/> 
              </Route>
              <Route path='users' element={<Users/>}>
                <Route index element={<UsersView/>}/>
                <Route path='adduser' element={<UserAdd/>}/>
                <Route path=':userId' element={<UserEdit/>}/>
              </Route>
              </Route>
              </Route>
              <Route path='*' element={<ErrorPage/>} />
            </Routes>
          </div>
          </UserDataContext.Provider>
        </RespondsDataContext.Provider>
      </SigninAccountContext.Provider>
    </BrowserRouter>
  );
}
export default App;
