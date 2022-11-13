import React, { useEffect, useState } from 'react'
import "./Dish.css"
import {Data, Nav} from "./Data"
import Dishs from './Dishs';

const Dish = () => {
    const [dish, setDish] = useState([]);

    useEffect(() => {
        setDish(Data);
    }, [])
    console.log(dish);
  return (
    <>
    <div className="Dish container section">
        <div className="Dish__menu">
            <ul className="dish__list">
                {
                    Nav.map((item, index) => {
                        return (
                        <span className={` dish__item`} key={index}>{item.name}</span>
                    )
                    })
                }
            </ul>
        </div>
        <div className="dish__card grid">
            {
                dish.map((item) => {
                    return(
                       <Dishs item={item}></Dishs> 
                    )                   
                })
            }
        </div>
    </div>
    </>
  )
}

export default Dish