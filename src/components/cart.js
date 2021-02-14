import React from 'react'
import {useState, useEffect,useReducer} from 'react'
import { CgLogOff } from 'react-icons/cg'
import { FaRProject } from 'react-icons/fa'
 import Empty from '../components/empty'
   let cartPage= []
   let otherCart = new Set(cartPage) 
   console.log(otherCart);
 
const Cart = ({state,display,  cartItems })=>{

 
  //  let lastTotal = sum.reduce((total,item)=>total+item,0)
 let x = new Date().getTime()

  state.items.forEach(item=>{
   cartItems.forEach(item2=>{
     if(item.idDrink == item2){
      
cartPage.push(item);
     }
  
   })
  
 })
console.log(cartPage);
 return ( <section>
     <div className='cart-container' >
 
 <div className="article-content">
<article   className='cart-article' >
<div className="left">
 <div className="img-container">
 <img src= '' alt='' />
 </div>
 <div className="content-container">
 <h4></h4>
 <p></p>
 <p> </p>
 </div>
 </div>
 </article>
</div>
     
 </div>
  <div className="total-container">
 <h4>{display ? `total : ${x} $` : <Empty/> } </h4>
  {display && <button className="cart-bt">Submit Order</button>}
 </div> 
 </section>
)

   
}

export default Cart