import SharePost from '../SharePost/SharePost';
import {useState} from 'react'
import './feed.scss';
interface Post{
    postId: string
    userId: string
    description:string
    image: string
    likes: []
    comments: []
    createdAt: Date
}
const Feed = () => {

    const [posts, setPosts] = useState<Array<Post>>([]);


    return (
        <div className="feed">
            <SharePost />
        </div>
    )
}

export default Feed
