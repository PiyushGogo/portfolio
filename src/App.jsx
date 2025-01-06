import Contacts from "./components/contacts/Contacts"
import Home from "./components/home/Home"
import Portfolio from "./components/portfolio/Portfolio"
import Services from "./components/services/Services"

const App = () => {
  return (
    <div className="container">
      <Home />
      <Services />
      <Portfolio />
      <Contacts />
    </div>

  )
}

export default App