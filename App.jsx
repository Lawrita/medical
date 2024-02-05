import { BrowserRouter,Routes, Route  } from 'react-router-dom'
import './App.css'
import Home from './pages/home'
import Header from './components/Header'
import Footer from './components/Footer'
import Department from './pages/Department'
import Service from './pages/Service'
import PriceHeader from './pages/PriceHeader'






function App() {

  return (
    <>
     <BrowserRouter>
     <Header />
     <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/dept' element={<Department />} />
      <Route path='/price' element={<PriceHeader />} />
      <Route path='/service' element={<Service />} />
      
     </Routes>
     <Footer />
     </BrowserRouter>
    </>
  )
}

export default App
