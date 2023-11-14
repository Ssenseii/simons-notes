import React from "react";

const Post = ({ title, day, month, year, tag, children }) => {
  return (
    <div id="post">
      <h1 className="post__title">{title}</h1>
      <div className="post__data">
        <p>DATE: {day+ " " + month + " " + year}</p>
        <p>TAG : {tag}</p>
      </div>
      <article className="post__article">{children}</article>
    </div>
  );
};

export default Post;
