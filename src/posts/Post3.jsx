import PostList from "../constants/post-data";
import Post from "../Components/Main/Post";

const Post3 = () => {
    return (
        <div className="post">
            <Post
                title={PostList[3].title}
                date={PostList[3].date}
                tag={PostList[3].tag}
            >
                <h2>How to not to live your life</h2>
                <p>
                    Before reading this note, make sure to take a look at this
                    documentary, or watch at least some part of it... ANY part
                    of it.
                </p>

                <a href="https://www.youtube.com/watch?v=_QgDx0RIWY8">
                    The Dark, Sad Life of Boogie2988 | Official Documentary
                </a>

                
            </Post>
        </div>
    );
};

export default Post3;
