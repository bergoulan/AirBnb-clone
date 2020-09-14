import React from 'react';
import './App.css';
import Home from './Home';
import Header from './Header';
import Footer from './Footer';
import Data from './data.json';




function App() {
  return (

    
    <div className="App">
      <div className="posts">
        { Data.map(post =>{
          return (
            <div key={post.name}>
          <h4>{ post.hotelName}</h4>
          <p>{post.rating}</p>
          </div>
          )
        })}
      </div>
  <Header />
  <Home />
  <Footer/>
  
 


    </div>
  );
}

export default App;
