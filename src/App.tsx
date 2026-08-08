import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Repairs from './pages/Repairs'
import Screens from './pages/Screens'
import BackGlass from './pages/BackGlass'
import Cases from './pages/Cases'
import Shop from './pages/Shop'
import Parts from './pages/Parts'
import Work from './pages/Work'
import About from './pages/About'
import Contact from './pages/Contact'
import Request from './pages/Request'
import Admin from './pages/Admin'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/repairs" element={<Repairs />} />
          <Route path="/screens" element={<Screens />} />
          <Route path="/back-glass" element={<BackGlass />} />
          <Route path="/cases" element={<Cases />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/parts" element={<Parts />} />
          <Route path="/work" element={<Work />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/request" element={<Request />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
