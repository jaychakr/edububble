import constructionWorker from '../assets/construction-worker.svg'
import edububble from '../assets/edububble.jpg'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import db from '../firebase.ts';
import { collection, getDocs, query, orderBy } from "firebase/firestore"
interface Post {
    id: string;
    title: string;
    content: string;
}
function Home() {
    const [posts, setPosts] = useState<Post[]>([]);
    useEffect(() => {
        const getAllPosts = async () => {
            const postsRef = collection(db, "posts");
            const q = query(postsRef, orderBy("createdAt", "desc"));
            const querySnapshot = await getDocs(q);
            const queryPosts: Post[] = querySnapshot.docs.map(doc => ({
                id: doc.id,
                title: doc.data().title,
                content: doc.data().content
            }));
            setPosts(queryPosts);
        }
        getAllPosts();
    }, []);
    return (
        <div className="card">
            <img className="edububble" src={edububble}/>
            <h2>Posts: </h2>
            {
                posts.length ?
                posts.map(post => {
                    return (
                        <div key={post.id} className="post">
                            <Link to={`/dpp/?p=${post.id}`}>{post.title}</Link>
                        </div>
                    )
                }) : <h2>Loading...</h2>
            }
            <p>
                <img src={constructionWorker} className="logo" alt="Construction worker" />
            </p>
            <p>
                This site is currently under construction and will become available for new users at <a href="https://edububble.com"><b>edububble.com</b></a> once development is complete and more content is available.
            </p>
        </div>
    )
}
export default Home