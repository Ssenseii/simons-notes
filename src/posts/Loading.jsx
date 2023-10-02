import Post from "../Components/Main/Post";

/// to this day, this is the hackiest thing I've ever done. Unbelievable.

const Post0 = () => {
  return (
    <div style={{ visibility: "hidden" }} className="post">
      <Post title={""} day={" "} month={" "} year={" "} tag={" "}>
        <h2> </h2>
        <p style={{ visibility: "hidden" }}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi
          deleniti autem iusto enim vero corrupti, consequatur necessitatibus
          dolorem ab pariatur quo excepturi impedit, modi eos nesciunt porro
        </p>
      </Post>
    </div>
  );
};

export default Post0;
