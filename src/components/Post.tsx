import { useSearchParams } from "react-router-dom"
const videoIds: Record<string, string> = {
    "1": "cyYRyrNQfjs",
    "2365": "hbQPHEWxsaI"
}
function Post() {
    const [searchParams] = useSearchParams();
    const postId = searchParams.get("p");
    const videoId = postId ? videoIds[postId] : undefined; 
    return (
        <div className="card">
            <iframe
                width="560"
                height="315"
                src={`https://www.youtube.com/embed/${videoId}`}
                title="Mark Zuckerberg Visits Harvard"
                allowFullScreen>
            </iframe>
        </div>
    )
}
export default Post