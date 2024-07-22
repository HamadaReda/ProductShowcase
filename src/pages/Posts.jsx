import React, {useState, useEffect} from 'react'

export const Posts = () => {
  const [posts, setPosts] = useState([]);
  useEffect(
    () => {
      fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => setPosts(data))
    },
    []
  );
  return (
    <main>
      <div className="pg-header">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <h1>Posts</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="container content posts">
        
            <div className="row">
              {posts.map(
                post => {
                  return (
                    <div className='col-sm-6' key={post.id}>
                      <div className='card'>
                        <div className='card-body'>
                          <h5 className='card-title'>{post.title}</h5>
                          <p className='card-text'>{post.body}</p>
                        </div>
                      </div>
                    </div>
                  )
                }
              )}
            </div>
      
      </div>
    </main>
  )
}


 


export default Posts