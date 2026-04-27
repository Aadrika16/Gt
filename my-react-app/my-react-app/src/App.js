import Home from './component/Home'
import Services from './component/Services'
import Clients from './component/Clients'
import Contact from './component/Contact'
import { BrowserRouter ,Switch, Route } from 'react-router-dom'
import './App.css'
import About from './component/About'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/services" component = {Services} />
        <Route exact path="/clients" component = {Clients} />
        <Route exact path="/contact" component={Contact} /> 
        <Route exact path ="/about" component ={About} />
      </Switch>
    </BrowserRouter>
    
  )
}

export default App