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
      
      <Homepage/>
      <Aboutpage/>
      <Teampage/>
      <Contactpage/>

      <Footer />
    </>
  )
}

export default App
