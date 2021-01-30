import {Link} from 'react-router-dom'
import React from 'react'
 import {CgAddR, CgLogOff} from 'react-icons/cg'
import {useState} from 'react'
import { FaRoad } from 'react-icons/fa'
 
const Home = ({data,idd })=>{
 const [list,setList] =useState([])
 data.forEach(item=>{
   list.forEach(item2=>{
     if(item.idDrink == item2){
       console.log(item);
     }
   })
 })
    console.log(list);
  const orders = localStorage.getItem('orders')
    return <>
    <div key={idd} className="main-content">
    {data.map((item,index)=>{
        const{strDrink:name, strCategory:cat,strAlcoholic:type,strDrinkThumb:img,idDrink:id} = item
        let price = Number(id)/1000;
        price = price.toFixed(2)
        
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
       <span  className='para para-price' > {price} $ </span>
       <span onClick={()=>{
      setList((list)=>{
        return [...list, id]
      })
         
 
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
 