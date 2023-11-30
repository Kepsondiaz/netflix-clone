import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import { AuthContextProvider } from './Authentification/AuthContext'
import Singup from './pages/Singup'
import Login from './pages/Login'
import Account from './pages/Account'
import ProtectedRoute from './components/ProtectedRoute'

const App = () => {
  return (
    <>
      <AuthContextProvider >
            <Navbar/>
            <Routes>
                <Route path='/' element={<ProtectedRoute><Home /></ProtectedRoute>} />
                <Route path='/signup' element={<Singup />} />
                <Route path='/login' element={<Login />} />
                <Route path='/account' element={<ProtectedRoute><Account /></ProtectedRoute> } />
            </Routes> 
      </AuthContextProvider>

    </>
  )
}

export default App