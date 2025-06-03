import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from './pages/home/Home'
import { Error } from './pages/error/Error'
import './styles/global.scss'

export function App() {

  return (
    <Router>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path="*" element={<Error />} />
          </Routes>
      </Router>
  )
}


