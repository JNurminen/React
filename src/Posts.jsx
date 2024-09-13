import './App.css'
import React, {useState, useEffect} from 'react'
 
const Posts = () => {

// komponentin tilan määrittely
const [posts, setPosts] = useState([])
const [showPosts, setShowPosts] = useState(false)

useEffect(() => {
  fetch("https://jsonplaceholder.typicode.com/posts")
  .then(res => res.json()) //muutetaan json data javascriptiksi
  .then(oliot => setPosts(oliot))
},[]
)

  return (
    <>
        <h2 onClick={() => setShowPosts(!showPosts)} style={{ color: 'yellow', cursor: 'pointer' }}>Posts from typicode</h2>

        {
          showPosts && posts && posts.map(p =>

            <div className='posts' key={p.id}>

            <h3 style={{ color: 'orange' }}><strong>{p.title}</strong></h3>
            <h5 style={{ color: 'yellow' }}>User ID: {p.userId}</h5>
            <p style={{ color: 'green' }}>{p.body}</p>

            </div>
            )
        }
    </>

  )
}

export default Posts