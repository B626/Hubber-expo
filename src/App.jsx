import './App.css'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Main } from './components/Main'

function App() {
  return (
    <div className="bg-[#080808]">
      <div className="overflow-hidden flex flex-col">
        <Header />
        <Main />
        <Footer />
      </div>
    </div>
  );
}

export default App
