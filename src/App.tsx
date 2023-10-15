import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import GalleryDetails from './pages/GalleryDetails'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="gallery/:id" element={<GalleryDetails />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
