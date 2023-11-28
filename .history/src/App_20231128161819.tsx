import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'

const App = () => {
  return (
    <div>
      <Navbar />
      <Router>
        <Routes>
              <Route path='/' element={<>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App