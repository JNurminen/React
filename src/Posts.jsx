import './App.css'
import React, {useState, useEffect} from 'react'
 
const Posts = () => {

// komponentin tilan määrittely
const [posts, setPosts] = useState([])

useEffect(() => {
  fetch("https://jsonplaceholder.typicode.com/posts")
  .then(res => res.json()) //muutetaan json data javascriptiksi
  .then(oliot => setPosts(oliot))
},[]
)

  return (
    <>
        <h2 style={{ color: 'green' }}>Posts from typicode</h2>

        {
          posts && posts.map(p =>

            <div className='posts' key={p.id}>

            <p style={{ color: 'orange' }}><strong>{p.title}</strong></p>
            <p style={{ color: 'green' }}>{p.body}</p>

            </div>
            )
        }
    </>

  )
}

export default Posts