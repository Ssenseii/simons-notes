// import React, { lazy, Suspense, memo } from "react";
// import Loading from "../posts/Loading";

// const Main = ({ postName }) => {
//     const Post = memo(lazy(() => import(`../posts/${postName}`))); /// Prevent Flickering when typing in search bar


//     return (
//         <main id="main" className="main">
//             <Suspense fallback={<Loading />}>
//                 <Post></Post>
//             </Suspense>
//         </main>
//     );
// };

// export default Main;


import React from "react";
import { Routes, Route } from "react-router-dom";

import Post0 from '../posts/Post0'
import Post1 from '../posts/Post1'
import Post2 from '../posts/Post2'
import Post3 from '../posts/Post3'
import Post4 from '../posts/Post4'
import Post5 from '../posts/Post5'

const Main = () => {

    return (
        <main id="main" className="main">

                <Routes>
                    <Route path="/" element={<Post0 />}></Route>
                    <Route path="/post1" element={<Post1 />}></Route>
                    <Route path="/post2" element={<Post2 />}></Route>
                    <Route path="/post3" element={<Post3 />}></Route>
                    <Route path="/post4" element={<Post4 />}></Route>
                    <Route path="/post5" element={<Post5 />}></Route>
                </Routes>

        </main>
    );
};

export default Main;
