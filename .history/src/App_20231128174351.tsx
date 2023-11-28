import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'

const App = () => {
  return (
    <div>
      
     <Navbar />
        <Routes>
              <Route path='/' element={<Home />} />
        </Routes>
    </div>
  )
}

export default App