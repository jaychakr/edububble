import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import firebaseLogo from '../assets/firebase.svg'
function Footer() {
    return (
        <footer>
            <div>
                <h3>Vite + React + Firebase</h3>
                <a href="https://vite.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
                <a href="https://firebase.google.com" target="_blank">
                    <img src={firebaseLogo} className="logo firebase" alt="Firebase logo" />
                </a>
                <p>2025 EduBubble Inc. All rights reserved.</p>
            </div>
        </footer>
    )
}
export default Footer