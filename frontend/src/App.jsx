import { Navbar } from "./components/Navbar"
import { Footer } from "./components/Footer"

import { Homepage } from "./pages/Homepage"
import { Aboutpage } from "./pages/Aboutpage"
import { Teampage } from "./pages/Teampage"
import { Contactpage } from "./pages/Contactpage"

function App() {
  
  return (
    <>
      <Navbar />
      <div id="home">
        <Homepage/>
      </div>

      <div id="about">
        <Aboutpage/>
      </div>

      <div id="team">
        <Teampage/>
      </div>

      <div id="contact">
        <Contactpage/>
      </div>

      <Footer />
    </>
  )
}

export default App
