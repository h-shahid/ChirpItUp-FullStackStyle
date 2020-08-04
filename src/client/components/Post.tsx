import React, { useState, useEffect }from 'react'


const Post = () => {
    const[newChirp, setNewChirp] = useState([])
    useEffect(() =>{
        (
            async() => {
                let res = await fetch('/api/chirp')
                let json = await res.json()
            }
        )()
    }, [])

    return (
        <div className="container">
      <h1>New Chirp</h1>
        {newChirp.map((chirp) => {
          return(
    <div className="card" key={chirp.id}>
      <div className="card-body">
        <h5 className="card-title">{chirp.name}</h5>
        <p className="card-text">{chirp.content}</p>
      </div>
          </div>)}) 
    }
   </div>
    )
}

export default Post;

