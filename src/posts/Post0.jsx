import PostList from "../constants/post-data"; 
import Post from "../Components/Main/Post";

const Post0 = () => {
  return (
    <div className="post">
      <Post
        title={PostList[0].title}
        day={PostList[0].day}
        month={PostList[0].month}
        year={PostList[0].year}
        tag={PostList[0].tag}
      >
        <h2>Welcome to my Notes</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus,
          saepe impedit? Enim laudantium, distinctio voluptates laboriosam
          aspernatur atque non dolor inventore nostrum dicta? Ut enim ad
          repudiandae eos iure et?
        </p>
      </Post>
    </div>
  );
};

export default Post0;
