import { useSearchParams } from "react-router-dom"
import { useState, useEffect } from 'react'
import db from '../firebase.ts'
import { doc, getDoc } from "firebase/firestore"
function Post() {
    const [searchParams] = useSearchParams();
    const postId = searchParams.get("p");
    const [content, setContent] = useState("");
    useEffect(() => {
        const getPost = async () => {
            if (!postId) {
                return;
            }
            const docRef = doc(db, "posts", postId);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                setContent(docSnap.data().content);
            } else {
                setContent("<h2>404</h2><h2>Post not found</h2>");
            }
        }
        getPost();
    }, []);
    return (
        <div className="card">
            {
                content ? <div dangerouslySetInnerHTML={{ __html: content }} /> : <h2>Loading...</h2>
            }
        </div>
    )
}
export default Post
