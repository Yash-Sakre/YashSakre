
import About from './pages/about/About'
import Header from './header/Header'
import Contact from './pages/contact/Contact'
import Projects from './pages/projects/Projects'
import Home from './pages/home/Home'

function App() {

  return (
    <div className='w-[85%] m-auto bg-black'>
      <Header />
      <About/>
      <Home />
      <Contact />
      <Projects />

    </div>
  )
}

export default App
