import React from 'react'
import './style/style.css'

const Home = () => {
  return (
    <>
    <header>     
        <div className = 'navbar'>
            <ul>
                <li className="active"><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">FeedBack</a></li>
            </ul>
        </div>   
        <div className="content">
        </div>
    </header>
    <div className="title">
        <p>Prevent Yourself <br />
            from phishing attack</p>
            <h2>Check your URL here</h2>
    </div>
    <div className='checkurl' id="checkurl">
        <input type="text" placeholder="Enter the URL"/>
    </div>
    <div className="buttonclick">
        <button className="todobtn"></button>
    </div>
    </>
  )
}

export default Home;