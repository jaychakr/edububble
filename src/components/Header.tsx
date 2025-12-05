import bubbles from '../assets/bubbles.svg'
function Header() {
    return (
        <header>
            <img src={bubbles} className="bubbles" alt="Bubbles" />
            <h1>EduBubble</h1>
            <img src={bubbles} className="bubbles" alt="Bubbles" />
        </header> 
    )
}
export default Header