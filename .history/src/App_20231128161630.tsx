import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Navbar />
      <Router>
        <Route>

        </Route>
      </Router>
    </div>
  )
}

export default App