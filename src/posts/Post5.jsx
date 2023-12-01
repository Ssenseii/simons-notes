import PostList from "../constants/post-data";
import Post from "../Components/Main/Post";

const Post0 = () => {
    return (
        <div className="post">
            <Post
                title={PostList[5].title}
                date={PostList[5].date}
                tag={PostList[5].tag}
            >
                <h2>1st December: Introduction</h2>

                <p>For some reason, I have decided to learn c++.</p>
                <p>
                    I've finished the base layer and attempted the BECOME
                    IMMORTAL 1 kyu Kata only to find out it's unsolvable. But
                    i've done it well enough to be happy with myself.
                </p>
                <p>
                    I'm gonna do 10 beginner projects first, then learn the
                    computation algorithms in c++. Afterwards, intermediate
                    projects, then we make a Game Engine in c++, Finally, we can
                    work on bigger, harder, projects.
                </p>

                <p>
                    Oh, and every day we attempt a KATA in both C++ and
                    Javascript (and more languages to come...)
                </p>

                <p>
                    If this works, and I'm better at c++ by the start of 2025.
                    I'm gonna use this with every other language, and create a
                    big project in each one.
                </p>

                <p>Here's a link to where I learned the base of C++: </p>
                <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.w3schools.com/cpp/default.asp"
                >
                    W3Schools - CPlusPlus
                </a>

                <p>
                    I'll keep this updated every start of the month... See you
                    next year !!!
                </p>
            </Post>
        </div>
    );
};

export default Post0;
