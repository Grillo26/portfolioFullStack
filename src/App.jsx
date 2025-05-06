import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Habilities from './components/Habilities'
import HeaderNav from './components/HeaderNav'
import Inicio from './components/Inicio'
import Portfolio from './components/Portfolio'
import Skills from './components/Skills'
// import MoreProyects from './components/MoreProyects'



function App() {

const router = 'react-router-dom';

  return (
  
       <div className='container_principal'>
   

     <HeaderNav/>
    <Inicio/>
    <br/>
    <br/>
    <Skills/>
    <br/>
    <Portfolio/>
    
    <br/>
    <br/>
    {/*<Habilities/>*/}
    <br/>
    <br/>
    <Footer/> 
    </div>

   
  )
}

export default App
