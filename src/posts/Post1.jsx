import PostList from "../constants/post-data";
import Post from "../Components/Main/Post";

const Post0 = () => {
    return (
        <div className="post">
            <Post
                title={PostList[1].title}
                date={PostList[1].date}
                tag={PostList[1].tag}
            >
                <h2>The beauty of design systems</h2>
                <p>
                    I've spent a lot of my time lately looking into design
                    systems.
                </p>

                <p>
                    If you've done the same, you might have had to ask yourself,
                    why should you follow a design system or create a design
                    system of any sort?
                </p>

                <p>
                    The answer is simple, it just makes your work a ot better
                    for multiple reasons, such as:{" "}
                </p>

                <p>
                    <span>Consistency:</span> Design systems help to ensure that
                    all of a company's products and services have a consistent
                    look and feel. This is important for both branding and
                    usability. Consistent design makes it easier for users to
                    learn and use your products, and it can also help to build
                    trust and brand loyalty.
                </p>

                <p>
                    <span>Efficiency:</span> Design systems can save time and
                    money by providing a single source of truth for all design
                    assets. This means that designers and developers don't have
                    to waste time recreating the same components or patterns
                    over and over again. Design systems can also help to improve
                    communication between designers and developers, which can
                    further streamline the development process.
                </p>

                <p>
                    <span>Scalability:</span> Design systems make it easy to
                    scale your products and services as your company grows. This
                    is because they provide a foundation for creating new
                    products and features that are consistent with your existing
                    brand and design principles.
                </p>

                <p>
                    <span>Accessibility:</span> Design systems can help to
                    ensure that your products and services are accessible to
                    everyone, including people with disabilities. This is
                    because they provide a set of guidelines for creating
                    accessible components and patterns.
                </p>

                <p>
                    <span>Collaboration:</span> Design systems can promote
                    collaboration between designers, developers, and other
                    stakeholders. This is because they provide a shared platform
                    for discussing and documenting design decisions.
                </p>

                <p>
                    If you're wondering if you should follow a design system,
                    it's simple:
                </p>
                <p>
                    If you have a big project that has lots of repeating
                    components: <span>YOU SHOULD</span>
                </p>
                <p>
                    Else; Follow what your gut tells you. It never hurt, did it?
                </p>
            </Post>
        </div>
    );
};

export default Post0;
