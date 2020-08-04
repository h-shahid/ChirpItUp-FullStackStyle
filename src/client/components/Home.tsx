import React, { useState, useEffect } from "react";

const Home = () => {
  const [chirps, setChirps] = useState([]); //array destructuring, setChirps is going to be what chirps is.

  useEffect(() => {
      (
          async () => {
              let res = await fetch("/api/chirps");
              let json = await res.json();
              setChirps(json);
          }
      )()     
  }, []) //[] tells this component when it needs to update which would be once & display the chirps, HAS TO BE HERE

  return (
    <div className="container">
      <h1>Chirps</h1>
        {chirps.map((chirp) => {
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
};

export default Home;
