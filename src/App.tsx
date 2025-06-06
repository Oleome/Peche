import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Welcome } from './pages/welcome/Welcome';
import { Home } from './pages/home/Home';
import { Error } from './pages/error/Error';
import './styles/global.scss';

export function App() {

  return (
    <Router>
          <Routes>
            <Route path='/' element={<Welcome />} />
            <Route path="*" element={<Error />} />
            <Route path="/home" element={<Home />} />
            {/* <Route path="*" element={<Error />} />
            <Route path="*" element={<Error />} /> */}
          </Routes>
      </Router>
  )
}


