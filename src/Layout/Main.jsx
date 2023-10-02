import React, {lazy, Suspense, memo} from 'react'
import Loading from "../posts/Loading"


const Main = ({postName}) => {

  const Post = memo(lazy(() => import(`../posts/${postName}`))); /// Prevent Flickering when typing in search bar
  
  return (
    <main className='main'>
      <Suspense fallback={<Loading />}>
        <Post></Post>
      </Suspense>
    </main>
  )
}

export default Main