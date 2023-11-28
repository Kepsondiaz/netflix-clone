import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Navbar />
      <Router>
        <Routes>
              <Route path='/' element={H} />
        </Routes>
      </Router>
    </div>
  )
}

export default App