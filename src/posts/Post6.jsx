import PostList from "../constants/post-data";
import Post from "../Components/Main/Post";

const Post6 = () => {
    return (
        <div className="post">
            <Post
                title={PostList[6].title}
                date={PostList[6].date}
                tag={PostList[6].tag}
            >
                <h2>I'm starting an internship soon !!!!</h2>

                <p>
                    After countless interviews and countless rejections. I
                    finally got an internship in the frontend developement scene
                    in Casablanca.
                </p>

                <p>
                    I will do my best to deliver the best of my abilities and
                    grow to become one of the best frontend developers out
                    there.{" "}
                </p>

                <p>
                    They use Laravel and I have no clue about it. So I'm doing
                    my best to learn it.
                </p>

                <p>
                    I pretty much understand how it works now, I just need to
                    create something big with it.{" "}
                </p>

                <p>Something Huge.</p>

                <p>
                    This is also a giant opportunity for me to learn FullStack
                    Developement. I will not fail myself. By the end of this
                    year, I will outshine myself.
                </p>

                <p>
                    Thank you "BlueBooks Solutions" for the opportunity. I will
                    not fail you.
                </p>
            </Post>
        </div>
    );
};

export default Post6;
