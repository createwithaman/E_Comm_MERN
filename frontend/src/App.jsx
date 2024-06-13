import Navbar from './Components/Navbar/Navbar'
import { BrowserRouter , Routes , Route} from 'react-router-dom'
import Shop from './Pages/Shop'
import ShopCategory from './Pages/ShopCategory'
import Product from './Pages/Product'
import Cart from './Pages/Cart'
import LoginSignUp from './Pages/LoginSignUp'
import Footer from './Components/Footer/Footer'
import manBanner from "./Components/Assets/banner_mens.png"
import womanBanner from "./Components/Assets/banner_women.png"
import kidsBanner from "./Components/Assets/banner_kids.png"

function App() {


  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Shop/>}></Route>
      <Route path='/mens' element={<ShopCategory banner={manBanner} category="men"/>}></Route>
      <Route path='/womens' element={<ShopCategory banner={womanBanner} category="women"/>}></Route>
      <Route path='/kids' element={<ShopCategory banner={kidsBanner} category="kid"/>}></Route>
      <Route path='/product' element={<Product/>}>
        <Route path=':productId' element={<Product/>}></Route>
      </Route>
      <Route path='/cart' element={<Cart/>}></Route>
      <Route path='/login' element={<LoginSignUp/>}></Route>
    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App

