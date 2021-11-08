import './App.css';
import React, { createContext, useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from './components/Header/Header';
import LandingPage from './pages/LandingPage/LandingPage';
import AboutUs from './pages/AboutUs/AboutUs';
import WrongUrl from './pages/404/WrongUrl';
import Footer from './components/Footer/Footer';

// all context api
export const ExamTypeContext = createContext()

function App() {
  const [pageTitle, setPageTitle] = useState('Dyno Book')
  const [examType, setExamType] = useState(null)

  useEffect(() => {
    document.title = pageTitle;
  }, [pageTitle])

  return (
    <ExamTypeContext.Provider value={[examType, setExamType]}>
      {/* Header */}
      <Header />
      {/* Routes */}
      <Routes>
        <Route path='/' element={<LandingPage setPageTitle={setPageTitle} />} />
        <Route path='/about' element={<AboutUs setPageTitle={setPageTitle} />} />
        <Route path='*' element={<WrongUrl setPageTitle={setPageTitle} />} />
      </Routes>
      {/* Footer */}
      <Footer />
    </ExamTypeContext.Provider>
  );
}

export default App;