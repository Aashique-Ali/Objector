import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"

function App() {
  return (
    <>
      <div className="bg-primary md:pt-10 pt-2 md:px-5 pb-5">
        <Navbar />
        <Hero />
        <Footer />
      </div>
    </>
  )
}

export default App
