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

                <h2>1st January 2024: Dead Project?</h2>

                <p>
                    So I made a raycaster in c++. Well, I followed an old
                    tutorial on it.
                </p>

                <p>
                    am I a master C++ developer. Hello no, but I can read and
                    make basic software. Beginner stuff mostly, nothing giant.
                </p>

                <p>
                    I did do lots of Katas in Codewars both in c++ and
                    javascript, that was a fun time.
                </p>

                <p>
                    I do want to learn more about c++ so I think I'll try making
                    a text editor with it next; Seems like appropriate project
                    since I'm looking for something more lightweight than visual
                    studio code but with my current extensions. More like a
                    VScode lite, that doesn't have all those tools.{" "}
                </p>

                <p>
                    I'm starting an internship soon in FrontEnd Development and
                    I have to learn Laravel, something I never thought I'd have
                    to do. So I'll have less time to learn and program with c++,
                    but i'll try to make time for it.{" "}
                </p>

                <p>
                    I saw a video series about some guy making Cave Story in C++
                    and I think that's neat. Maybe after the text editor is
                    finished.
                </p>

                <p>
                    If you want to fully learn how to use something. Don't read
                    and take notes, that's for understanding. Make projects and
                    fail. the more you fail, the more you learn.{" "}
                </p>
            </Post>
        </div>
    );
};

export default Post0;
