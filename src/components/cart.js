import React from 'react'
import {useState, useEffect,useReducer} from 'react'
import { CgLogOff } from 'react-icons/cg'
import { FaRProject } from 'react-icons/fa'
 import Empty from '../components/empty'
 
 
const Cart = ({list,data,total,display,setData})=>{
 const [prices,setPrice] =useState(0)
 const [value,setValue]=useState({total:0,amount:1})
 
   let sum=0
  if(total){
 
sum = total.map(item=>{
 return   parseFloat(item)
 })
 
  }
   let lastTotal = sum.reduce((total,item)=>total+item,0)
   console.log(lastTotal);
 let x = new Date().getTime()
 let cartItems =[]
 data.forEach(item=>{
   list.forEach(item2=>{
     if(item.idDrink == item2){
cartItems.push(item)
     }
   })
 })
 console.log(cartItems);
 return ( <section>
     <div className='cart-container' >
     {cartItems.map(item=>{
const {strDrink:name,strCategory:cat,strAlcoholic:type, strGlass:glass, strInstructions:instruct,strDrinkThumb:img,strIngredient1:ingr1,strIngredient2:ingr2,strIngredient3:ingr3,strIngredient4:ingr4,idDrink:id}=item
           let price = Number(id)/1000;
        price = parseFloat(price.toFixed(2))
      
return  <div className="article-content">
<article key={id} className='cart-article' >
<div className="left">
 <div className="img-container">
 <img src={img} alt={name}/>
 </div>
 <div className="content-container">
 <h4>{name}</h4>
 <p>{glass}</p>
  
 <p>{price} $</p>
 
 
 </div>
 </div>
 

 </article>
</div>
 
 
     })}

 </div>
  <div className="total-container">
 <h4>{display ? `total : ${parseFloat(lastTotal)} $` : <Empty/> } </h4>
  {display && <button className="cart-bt">Submit Order</button>}
 </div>
 </section>
)
}

export default Cart