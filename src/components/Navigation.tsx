import { useNavigate } from "react-router-dom";
function Navigation() {
    const navigate = useNavigate();
    return (
        <nav>
            <div>
                <button onClick={() => navigate("/")}>Home</button>
            </div>
            <div>
                <button>Post</button>
                <button>Inbox</button>
                <button>Log In</button>
                <button>Sign Up</button>
            </div>
        </nav>
    )
}
export default Navigation