import { useState } from 'react'
import { BrowserRouter,Routes,Route } from 'react-router'
import './App.css'
import NavBar from './Components/NavBar'
import LoginPage from './Pages/LoginPage'
import SignupPage from './Pages/SignupPage'
import ForgotPassword from './Pages/ForgotPassword'
import HomePage from './Pages/HomePage'
import ViewMenuPage from './Pages/ViewMenuPage'
import MenuPage from './Pages/MenuPage'
import BrowserMenu from './Pages/BrowserMenu'
import Bevarages from './Pages/Bevarages'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      
      <Routes>
      <Route path='/' element={<LoginPage/>} ></Route>
      <Route path="/signup"element={<SignupPage />} />
      <Route path="/forgotpassword"element={<ForgotPassword />} />
      <Route path="/homepage"element={<HomePage />} />
      <Route path="/viewmenupage"element={<ViewMenuPage />} />
      <Route path="/menupage"element={<MenuPage />} />
      <Route path="/browsermenu"element={<BrowserMenu />} />
      <Route path="/bevarages"element={<Bevarages/>} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
