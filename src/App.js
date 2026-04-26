import Home from './component/Home'
import Services from './component/Services'
import Clients from './component/Client'
import { BrowserRouter ,Switch, Route } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/services" component = {Services} />
        <Route exact path="/clients" component = {Clients} />
      </Switch>
    </BrowserRouter>
    
  )
}

export default App