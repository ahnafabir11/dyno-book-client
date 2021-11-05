import './App.css';
import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from './components/Header/Header';
import LandingPage from './pages/LandingPage/LandingPage';
import AboutUs from './pages/AboutUs/AboutUs';
import WrongUrl from './pages/404/WrongUrl';
import Footer from './components/Footer/Footer';

function App() {
  const [pageTitle, setPageTitle] = useState('Dyno Book')

  useEffect(() => {
    document.title = pageTitle;
  }, [pageTitle])

  return (
    <>
      {/* Header */}
      <Header />
      {/* Routes */}
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/about' element={<AboutUs setPageTitle={setPageTitle} />} />
        <Route path='*' element={<WrongUrl setPageTitle={setPageTitle} />} />
      </Routes>
      {/* Footer */}
      <Footer />
    </>
  );
}

export default App;