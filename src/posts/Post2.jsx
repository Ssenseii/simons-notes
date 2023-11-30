import PostList from "../constants/post-data";
import Post from "../Components/Main/Post";

const Post0 = () => {
    return (
        <div className="post">
            <Post
                title={PostList[2].title}
                date={PostList[2].date}
                tag={PostList[2].tag}
            >
                <h2>up in the cloud sea</h2>
                <p>
                    This will be a breakdown of mdb's UP IN THE CLOUD SEA
                    Shadertoy
                </p>

                <a href="https://www.shadertoy.com/view/Ndc3zl" rel="noreferrer" target="_blank">Shader Toy: Up In The Cloud Sea</a>
                <p>
                    The first noise function takes a vec2 and returns a float
                    value, with fract being used to calculate the fractional
                    part of the input vector.
                </p>

                <p>vec2 u = f*f*f*(f*(f*6.0-15.0)+10.0);</p>

                <p>
                    this line calculates the value of perlin noise function at
                    the input vector, it generates <span>continuous noise</span>{" "}
                    that's often used in procedural generation.
                </p>

                <p>
                    The next function deals with FBM or{" "}
                    <span>Fractional Brownian Motion</span>:
                </p>

                <p>
                    It takes two arguments: a vec2 representing a position and
                    an integer representing the detail levels:
                </p>

                <p>
                    FBM goes through 3 stages, initialization, Iteration
                    (Looping), and finally, Normalisaton.
                </p>

                <p>
                    it's a type of noise that exhibits self-similarity across
                    different scales, making it useful for creating
                    natural-looking textures and terrain in procedural
                    generation.
                </p>

                <p>
                    The second FBM function generates noise with a persistence
                    factor of 0.9, resulting in smoother and less high-frequency
                    noise compared to the FBM function with a persistence factor
                    of 0.7.
                </p>

                <p>
                    the box function checks wether the UV is within a certain
                    boundary or not using "&&"{" "}
                </p>

                <p>and that's it for the utils</p>

                <p>
                    Then it's the painting of th foreground and the clouds
                    background
                </p>

                <p>the layer preprocessor macro takes two args: dh and v</p>
                <p>
                    it appears to be used to selectively apply a vec4 value
                    based on the position of a point in UV space relative to a
                    certain threshold.{" "}
                    <span>
                        it's mainly used to create horizonatal bands in a
                        procedural effect
                    </span>
                </p>
            </Post>
        </div>
    );
};

export default Post0;
