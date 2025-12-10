import constructionWorker from '../assets/construction-worker.svg'
import edububble from '../assets/edububble.jpg'
import { Link } from 'react-router-dom'
function Home() {
    return (
        <>
            <img className="edububble" src={edububble}/>
            <div className="card">
                <h2>Posts: </h2>
                <p>
                    <Link to="/dpp/?p=1">Rainier Labs founder, Jay Chakravarty speaks to Bryce Johnson from the Vesting podcast</Link>
                </p>
                <p>
                    <Link to="/dpp/?p=2365">Mark Zuckerberg Visits Harvard</Link>
                </p>
                <p>
                    <img src={constructionWorker} className="logo" alt="Construction worker" />
                </p>
                <p>
                    This site is currently under construction and will become available for new users at <a href="https://edububble.com"><b>edububble.com</b></a> once development is complete and more content is available.
                </p>
            </div>
        </>
    )
}
export default Home