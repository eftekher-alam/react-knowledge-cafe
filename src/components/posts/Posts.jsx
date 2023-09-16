import { useEffect, useState } from "react";
import Post from "../post/Post";
import PropTypes from "prop-types"


const Posts = ({ handlerBookMark }) => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch("data.json")
            .then(request => request.json())
            .then(data => setPosts(data));
    }, []);

    return (
        <div className="col-span-2 space-y-8">
            {
                posts.map(post => <Post key={post?.id} post={post} handlerBookMark={handlerBookMark}></Post>)
            }
        </div>
    );
};

Posts.propTypes = {
    handlerBookMark: PropTypes.func
}
export default Posts;