
import About from './pages/about/About'
import Header from './header/Header'
import Contact from './pages/contact/Contact'
import Projects from './pages/projects/Projects'
import Home from './pages/home/Home'

function App() {

  return (
    <div className='w-[90%] m-auto'>
      <Header />
      <Home />
      <About/>
      <Contact />
      <Projects />

    </div>
  )
}

export default App
