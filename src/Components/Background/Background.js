import React from 'react'
import "./Background.css"
import backImg from "../../Assets/images/bannerbackground.png"

const Background = () => {
  return (
    <>
     <div className="banner">
        
        <div className="banner__text">
            <div className="banner__heading">
               <h2 className='heading'>Best food waiting for your belly</h2>
            </div>
            <div className="banner__form">
                <form action="/action_page.php" method="get">
                <input className='banner__input' type="text" id="item" name="item" placeholder='Search food item'/>
                <button type='submit' className='banner__btn'>Search</button>
                </form>
            </div>
        </div>
     </div>
    </>
  )
}

export default Background