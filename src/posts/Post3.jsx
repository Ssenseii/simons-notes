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

                <a className="link" href="https://www.youtube.com/watch?v=_QgDx0RIWY8">
                    The Dark, Sad Life of Boogie2988 | Official Documentary
                </a>

                <p>Never become that sort of person</p>
                <p>The world may give a lot but it can also take it</p>
                <p>Be gratefull for what you have at all times</p>
                <p>Count your blessings every day</p>

                <p>Money comes and goes, but relationships matter most. It's people that matter, not materials</p>

                <p>Be kind.</p>
                <p>Be Patient.</p>
                <p>Be better every single day.</p>
            </Post>
        </div>
    );
};

export default Post3;
