import { HashRouter, Route, Routes } from 'react-router'
import App from './App'
import HomePage from './pages/Home'
import React from 'react'

export default function RouterView(): React.JSX.Element {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<App />} />
      </Routes>
    </HashRouter>
  )
}
