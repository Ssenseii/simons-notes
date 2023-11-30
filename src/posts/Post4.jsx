import PostList from "../constants/post-data";
import Post from "../Components/Main/Post";

const Post0 = () => {
    return (
        <div className="post">
            <Post
                title={PostList[4].title}
                date={PostList[4].date}
                tag={PostList[4].tag}
            >
                <h2>Introduction</h2>

                <p>
                    So, you want to know how I made my portfolio? I guess I can
                    run you through the steps I took to making it.
                </p>
                <p>let's start: </p>

                <h2>#1: Concept </h2>

                <p>
                    Normally, I do concept through paper and colored markers as
                    you've probably seen on my portfolio.{" "}
                </p>
                <a
                    href="https://simons-portfolio.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                >
                    My Portfolio
                </a>

                <p>
                    However, this time I decided to do things a little
                    differently. I knew I wanted the website to be one{" "}
                    <span>REALLY</span> long page, so I wrote a script instead
                    of using my usual marker and paper.
                </p>

                <h2>#2: Design</h2>

                <p>
                    I go on Figma and I create a figjam file to test out my
                    ideas. In the case of my portfolio, I already had that
                    planned in the script so i didn't need to create it.
                </p>
                <p>
                    I didn't use to like figma until I started using it a while
                    back and now I use it all the time. It's really good for
                    making a mockup of the website quick and efficiently.
                </p>
                <p>
                    I created the portfolio's base design on mobile, tablet and
                    desktops with a single aim in my mind:{" "}
                    <span>RECRUITERS</span>{" "}
                </p>

                <p>
                    Recruiters need to understand who I am fast, so I showed my
                    art first to reveal my art skills and gave them a bunch of
                    options at the top to ease their access into wherever they
                    want to go. I gave them a table of contents and minified as
                    many of the resources as I can to speed-up page load times
                    (this actually comes much later at the end, never optimize
                    at the start).
                </p>

                <p>
                    I set it up to show my best projects first and my ui designs
                    last so they can rest their eyes from reading and just stare
                    at the various designs I created throughout the years.
                </p>
                <p>The webpages show in full clear and HQ images (I hope)</p>

                <h2>#3: Coding</h2>

                <p>
                    I haven't touched react in some time so it was odd coming
                    back to it.
                </p>
                <p>
                    I did lots of things differently and I enjoyed working with
                    components, and coding it entirely took less than a week,
                    which is quite long for me. I guess I was just suprised at
                    the amount of content I had to cover
                </p>

                <p>
                    I wrote usable components, took pictures of things, wrote
                    bash scripts to rename stuff in bulk, re-edited the script
                    to only include essentials and finally optimized the living
                    hell out of it.
                </p>

                <p>
                    Though, now I am reminded I haven't touched the CSS. I'll
                    get on that after I finish this post.
                </p>

                <h2>#4: Testing</h2>

                <p>
                    I usually do testing manually and by sharing a prototype of
                    the website with my friends to go through it and find any
                    bugs or missing features or anything missing...
                </p>

                <p>
                    I must get into unit testing soon and I will make time for
                    it on the next project.
                </p>

                <h2>#5: Deploying</h2>

                <p>I upload to github.</p>
                <p>I deploy from vercel.</p>
                <p>I don't lose my sleep over it... for now</p>

                <h2>Conclusion</h2>

                <p>
                    That's how I made this portfolio, this methodology works for
                    now but it keeps changing with time. By next year, It'll be
                    a completely new path with better and more concise testing,
                    deploying, coding...
                </p>
            </Post>
        </div>
    );
};

export default Post0;
