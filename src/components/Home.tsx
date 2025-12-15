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
        </div>
    )
}
export default Home