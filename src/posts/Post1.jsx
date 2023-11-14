import PostList from "../constants/post-data";
import Post from "../Components/Main/Post";

const Post0 = () => {
  return (
    <div className="post">
      <Post
        title={PostList[1].title}
        day={PostList[1].day}
        month={PostList[1].month}
        year={PostList[1].year}
        tag={PostList[1].tag}
      >
        <h2>The beauty of design systems</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio
          numquam vero odio soluta amet voluptatum consequuntur quam debitis
          cumque blanditiis iure atque officia ullam corrupti quis eligendi nemo
          nam, nisi perferendis? Hic eaque sapiente accusamus a possimus neque
          perspiciatis sint unde dicta consequatur omnis deleniti quod placeat,
          praesentium nisi nesciunt!
        </p>
      </Post>
    </div>
  );
};

export default Post0;
