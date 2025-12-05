import constructionWorker from './assets/construction-worker.svg'
import Header from "./components/Header.tsx"
import Footer from "./components/Footer.tsx"
import './App.css'

function App() {
  return (
    <>
      <Header />
      <img className="patience" src="https://img.atom.com/story_images/visual_images/1671324292-EduBubble.png"/>
      <div className="card">
        <img src={constructionWorker} className="logo" alt="Construction worker" />
        <p>
          <b>edububble.com</b> is currently under construction
        </p>
      </div>
      
      <Footer />
    </>
  )
}

export default App
