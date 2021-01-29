import {Link} from 'react-router-dom'
import React from 'react'
 import {CgAddR, CgLogOff} from 'react-icons/cg'
import {useState} from 'react'
import { FaRoad } from 'react-icons/fa'
const Home = ({data,idd,refContainer})=>{
  console.log(Number(refContainer.current.innerHTML));
 
 const getPrice= (id) =>{
     let price = Number(id) /1000;
     return price.toFixed(2) 
 }
 
    return <>
    <div key={idd} className="main-content">
    {data.map(item=>{
        const{strDrink:name, strCategory:cat,strAlcoholic:type,strDrinkThumb:img,idDrink:id} = item
        return( 
           
        <article key={id}   className="article">
        <header className="header">
        <img src={img} alt={name}/>
        </header>
        <footer className="footer">
        <h4>{name}</h4>
        <h3>{cat}</h3>
        <p>{type}</p>
       <Link to='/details'>  <button className="btn" onClick={()=>{
    localStorage.setItem('drink',id)
    
       }}>details</button></Link> 
       <div className="price">
       <span ref ={refContainer} className='para para-price' > {getPrice(id)}  </span>
       <span  className='para para-btn' ><CgAddR/></span>
       </div>
        </footer>
        </article>
        
        )
    })}
    </div>
    </>
}

export default Home