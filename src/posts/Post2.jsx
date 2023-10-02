import PostList from "../constants/post-data";
import Post from "../Components/Main/Post";

const Post2 = () => {
  return (
    <div className="post">
      <Post
        title={PostList[2].title}
        day={PostList[2].day}
        month={PostList[2].month}
        year={PostList[2].year}
        tag={PostList[2].tag}
      >
        <h2>Heading #2</h2>
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

export default Post2;
