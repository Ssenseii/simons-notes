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
          This is a space where I share my thoughts on a variety of topics,
          including personal reflections, technical insights, and design
          musings. I'm a curious person who loves to learn and explore new
          ideas, and I hope that my writing will spark your own curiosity and
          inspire you to think in new ways.
        </p>

        <p>
          I'm drawn to a wide range of subjects, but some of my favorite themes
          to write about include:
        </p>

        <ul>
          <li>
            The creative process behind scalable Solutions to problems I run into on
            a daily basis
          </li>
          <li>The beauty and complexity of the techncial world i.e Shaders & Graphics</li>
          <li>Personal Growth and Developement</li>
        </ul>

        <p>You're welcome to read my notes.</p>
        <p>Sincerely,</p>
        <p>Simon</p>
      </Post>
    </div>
  );
};

export default Post0;
