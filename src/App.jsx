import Hero from './components/Hero'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <div className="h-dvh bg-black"></div>
    </main>
  )
}

export default App