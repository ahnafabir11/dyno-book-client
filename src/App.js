import './App.css';
import React, { createContext, useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import PrivateLogin from './components/PrivateRoute/PrivateLogin';
import Header from './components/Header/Header';
import LandingPage from './pages/LandingPage/LandingPage';
import AboutUs from './pages/AboutUs/AboutUs';
import UpdateVarsity from './pages/UpdateVarsity/UpdateVarsity';
import WrongUrl from './pages/404/WrongUrl';
import Footer from './components/Footer/Footer';
import Login from './pages/Login/Login';

// all context api
export const PageTitle = createContext()
export const ExamTypeContext = createContext()
export const VarsitiesInfo = createContext()
export const LoggedInUser = createContext()

function App() {
  const [pageTitle, setPageTitle] = useState('Dyno Book')
  const [examType, setExamType] = useState('')
  const [loggedInUser, setLoggedInUser] = useState({})
  const [varsitiesInfo, setVarsitiesInfo] = useState([])

  // changing page title
  useEffect(() => document.title = pageTitle, [pageTitle])

  // load varsity info
  useEffect(() => {
    fetch("http://localhost:5000/api/varsities")
      .then(res => res.json())
      .then(data => setVarsitiesInfo(data.data))

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
              <Route path='/edit/varsity/:id' element={<PrivateRoute><UpdateVarsity /></PrivateRoute>} />
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