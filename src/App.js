import './App.css';
import React, { createContext, useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import * as firebase from 'firebase/app';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import PrivateLogin from './components/PrivateRoute/PrivateLogin';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import LandingPage from './pages/LandingPage/LandingPage';
import AboutUs from './pages/AboutUs/AboutUs';
import AdmissionQuestion from './pages/AdmissionQuestion/AdmissionQuestion';
import UpdateVarsity from './pages/UpdateVarsity/UpdateVarsity';
import AddQuestion from './pages/AddQuestion/AddQuestion';
import UpdateQuestion from './pages/UpdateQuestion/UpdateQuestion';
import WrongUrl from './pages/404/WrongUrl';
import Login from './pages/Login/Login';
import firebaseConfig from './firebase.config';

// firebase initialization
firebase.initializeApp(firebaseConfig)

// all context api
export const PageTitle = createContext()
export const ExamTypeContext = createContext()
export const VarsitiesInfo = createContext()
export const LoggedInUser = createContext()

function App() {
  const [pageTitle, setPageTitle] = useState('Dyno Book')
  const [examType, setExamType] = useState('admission_test')
  const [loggedInUser, setLoggedInUser] = useState({})
  const [varsitiesInfo, setVarsitiesInfo] = useState([])

  // changing page title
  useEffect(() => document.title = pageTitle, [pageTitle])

  // load varsity info
  useEffect(() => {
    fetch("https://dyno-server.herokuapp.com/api/varsities")
      .then(res => res.json())
      .then(data => setVarsitiesInfo(data.data))
      .catch(err => console.log(err.message))

  }, [])


  return (
    <PageTitle.Provider value={[pageTitle, setPageTitle]}>
      <ExamTypeContext.Provider value={[examType, setExamType]}>
        <VarsitiesInfo.Provider value={[varsitiesInfo, setVarsitiesInfo]}>
          <LoggedInUser.Provider value={[loggedInUser, setLoggedInUser]}>
            <Header />
            {/* Routes */}
            <Routes>
              <Route path='/' element={<LandingPage />} />
              <Route path='/about' element={<AboutUs />} />
              <Route path='/question/:varsityName/:accYear/:unit' element={<AdmissionQuestion />} />
              <Route path='/edit/varsity/:id' element={<PrivateRoute><UpdateVarsity /></PrivateRoute>} />
              <Route path='/questions/create' element={<PrivateRoute><AddQuestion /></PrivateRoute>} />
              <Route path='/questions/edit/:id' element={<PrivateRoute><UpdateQuestion /></PrivateRoute>} />
              <Route path='/ad-login' element={<PrivateLogin><Login /></PrivateLogin>} />
              <Route path='*' element={<WrongUrl />} />
            </Routes>
            {/* Footer */}
            <Footer />
          </LoggedInUser.Provider>
        </VarsitiesInfo.Provider>
      </ExamTypeContext.Provider>
    </PageTitle.Provider>
  );
}

export default App;