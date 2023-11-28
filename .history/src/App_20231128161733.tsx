import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Navbar />
      <Router>
        <Routes>
              <Route path='/' element={div} />
        </Routes>
      </Router>
    </div>
  )
}

export default App