import {Link} from 'react-router-dom'
import React from 'react'
 import {CgAddR, CgLogOff} from 'react-icons/cg'
import {useState} from 'react'
import { FaRoad } from 'react-icons/fa'
 
const Home = ({ state,list,setList,total,setTotal,setDisplay})=>{
 let idd = new Date().getTime()
    return <>
    <div key={idd} className="main-content">
    {state.items.map((item,index)=>{
        const{strDrink:name, strCategory:cat,strAlcoholic:type,strDrinkThumb:img,idDrink:id} = item
 
        
        return( 
           
        <article key={id}    className="article">
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
       <span  className='para para-price' > {state.price(id)} $ </span>
       <span onClick={()=>{
      setList((list)=>{
        return [...list, id]
      })     
 
 
 setTotal(total=>{
   return [...total,state.price(id)]
 })
 setDisplay(true)
       }}  className='para para-btn' ><CgAddR/></span>
       </div>
        </footer>
        </article>
        
        )
    })}
    </div>
    </>
 
}

export default Home
 