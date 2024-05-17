import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Asked from "./layout/Asked"
import Blue from "./layout/Blue"
import Body from "./layout/Body"
import Browser from "./layout/Browser"
import Head from "./layout/Head"


function App() {


  return (
  <main className="w-full h-full overflow-hidden">
<Navbar/>
<Head/>
<Body/>
<Browser/>
<Asked/>
<Blue/>
<Footer/>
  </main>
  )
}

export default App
