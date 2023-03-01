
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import Error from './pages/Error/Error'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Allcategory from './pages/Category/Allcategory'
import Recepi from './pages/Recipe/Recepi'

function App() {


  return (
    <>
        <Header/>  
        <main className='main-cards'>
            <Routes>
              <Route path='/' element ={ <Home/>}/>
              <Route path='/category/:name' element ={<Allcategory/>}/>
              <Route path='/meal/:id' element ={<Recepi/>}/>
              <Route path='/*' element = {<Error/>}/>
            </Routes>
        </main>
        <Footer/>
    </>
  )
}

export default App
