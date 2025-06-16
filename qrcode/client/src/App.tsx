import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import Qr from './pages/Qr'
import Success from './pages/Success'
import Login from './pages/Login'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='' element={<Qr />} />
          <Route path='/login' element={<Login />} />
          <Route path='/success' element={<Success />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
