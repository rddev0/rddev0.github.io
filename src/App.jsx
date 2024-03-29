import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Projects from './pages/Projects';
import Home from './pages/Home';
import NoPage from './pages/NoPage';
import Navbar from './components/Navbar';
import HomeLinktreeClone from './pages/Projects/LinktreeClone/HomeLinktreeClone'
import Timer from './pages/Projects/Timer/Timer';
import Pomodoro from './pages/Projects/Pomodoro/Pomodoro';
import Calculator from './pages/Projects/Calculator/Calculator';
import ApiGitHubHome from './pages/Projects/ApiGitHub/ApiGitHubHome';
function App() {

  return (
      <div className="flex flex-col h-screen">
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route index element={<Home />} />
              <Route path='projects' element={<Projects />} />
                <Route path='projects/linktreeclone' element={<HomeLinktreeClone />} />
                <Route path='projects/timer' element={<Timer />} />
                <Route path='projects/pomodoro' element={<Pomodoro />} />
                <Route path='projects/calculator' element={<Calculator />} />
                <Route path='projects/apigithub' element={<ApiGitHubHome />} />
              <Route path='*' element={<NoPage />} />
            </Routes>
          </BrowserRouter>
      </div>
  )
};

export default App;