import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './pages/Home'
import Root from './pages/Root'
import About from './pages/About'
import Service from './pages/Service'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Contact from './pages/Contact'
import GenerateResume from './pages/GenerateResume'
import { Toaster } from 'react-hot-toast';
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import { AuthProvider } from './LOG&SIG/AuthContext';
import ProtectedRoute from './LOG&SIG/ProtectedRoute'
import Forget from './pages/Forget'


createRoot(document.getElementById('root')).render(
  <StrictMode>

    <AuthProvider>
      <BrowserRouter>
        <Toaster position="top-center" reverseOrder={false} />

      <Routes>


        <Route path="/" element={<Root />}>

          <Route path="" element={<ProtectedRoute><Home/></ProtectedRoute>} />
          <Route path="about" element={<About />} />
          <Route path="service" element={<Service />} />
          <Route path="contact" element={<Contact />} />
          <Route path="generate-resume" element={<ProtectedRoute><GenerateResume /></ProtectedRoute>} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />

        </Route>

        <Route path="/reset" element={<Forget/>}>

        </Route>

      </Routes>

    </BrowserRouter>
    </AuthProvider>

  </StrictMode>,
)