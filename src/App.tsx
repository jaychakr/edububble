import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from "./components/Header.tsx"
import Footer from "./components/Footer.tsx"
import Home from "./components/Home.tsx"
import Post from "./components/Post.tsx"
import './App.css'

function App() {
  return (
    <>
      <Header />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dpp" element={<Post />} />
          </Routes>
        </BrowserRouter>
      <Footer />
    </>
  )
}

export default App
