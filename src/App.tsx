import constructionWorker from './assets/construction-worker.svg'
import edububble from './assets/edububble.jpg'
import Header from "./components/Header.tsx"
import Footer from "./components/Footer.tsx"
import './App.css'

function App() {
  return (
    <>
      <Header />
      <img className="edububble" src={edububble}/>
      <div className="card">
        <img src={constructionWorker} className="logo" alt="Construction worker" />
        <p>
          This site is currently under construction and will become available for new users at <a href="https://edububble.com"><b>edububble.com</b></a> once development is complete.
        </p>
      </div>
      <Footer />
    </>
  )
}

export default App
