import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Resume from './pages/Resume'
import Pfizer from './pages/Pfizer'
import Skip from './pages/Skip'

export default function App() {
  return (
    <div className="page">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/pfizer" element={<Pfizer />} />
        <Route path="/skip" element={<Skip />} />
      </Routes>
      <Footer />
    </div>
  )
}
