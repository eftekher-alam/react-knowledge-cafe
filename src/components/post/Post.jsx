import PropTypes from "prop-types"
import { BsFillBookmarkPlusFill } from 'react-icons/bs'

const Post = ({ post, handlerBookMark }) => {
    const { title, cover, author_image, author, posted_date, reading_time, hashtags } = post;
    return (
        <div className="rounded-xl w-4/5 mx-auto bg-gray-100">
            <div className="p-4">
                <img src={cover} className="w-full rounded-xl" />
            </div>

            <div className="p-4">
                <div className="flex justify-between items-center my-4">
                    <div className="flex items-center">
                        <img src={author_image} className="w-12 h-12 rounded-full border-2 border-gray-300" />
                        <div className="pl-4">
                            <h3 className="font-bold">{author}</h3>
                            <p className="text-sm text-gray-500">{posted_date}</p>
                        </div>
                    </div>
                    <div className="flex justify-end gap-2 items-center">
                        <p className="text-end text-gray-500">{reading_time} min read  </p>
                        <button onClick={() => { handlerBookMark(title) }}><BsFillBookmarkPlusFill className="text-blue-700"></BsFillBookmarkPlusFill></button>
                    </div>
                </div>
                <h2 className="text-lg font-bold">{title}</h2>
                <div>
                    {
                        hashtags.map(tag => <span key={tag} className="text-gray-400 pr-2" >{tag}</span>)
                    }
                </div>
                <a href="#" className="text-blue-600 underline">Mark as read</a>
            </div>
        </div>
    );
};

Post.propTypes = {
    post: PropTypes.object,
    handlerBookMark: PropTypes.func
}

export default Post;