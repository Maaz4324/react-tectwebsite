import logo from './logo.svg'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import './App.css'
import Home from './Pages/Home'
// import {Switch, Route} from 'react-router-dom'
// import { Redirect } from 'react-router-dom';
import Navbar from './Components/Navbar'
import Background from './Components/Background'
import Service from './Pages/Service'
import Gallery from './Pages/Gallery'
import Contact from './Pages/Contact'
import Footer from './Components/Footer'
import { Alert } from 'bootstrap'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Service />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
