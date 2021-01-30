import React from 'react'
import {useState, useEffect,useReducer} from 'react'
 
 
const Cart = ({list,data,total})=>{
 
 
 
 let cartItems =[]
 data.forEach(item=>{
   list.forEach(item2=>{
     if(item.idDrink == item2){
cartItems.push(item)
     }
    
   })
 })
 ;
 return ( 
     <>
     {cartItems.map(item=>{
 
const {strDrink:name,strCategory:cat,strAlcoholic:type, strGlass:glass, strInstructions:instruct,strDrinkThumb:img,strIngredient1:ingr1,strIngredient2:ingr2,strIngredient3:ingr3,strIngredient4:ingr4,idDrink:id}=item
           let price = Number(id)/1000;
        price = price.toFixed(2)
         
return <article key={id} className='cart-article' >
 <div className="img-container">
 <img src={img} alt={name}/>
 </div>
 <div className="content-container">
 <h4>{name}</h4>
 <p>{glass}</p>
 <p>{price} $</p>
 <p> </p>
 </div>
</article>
     })}
   
 </>
)
}

export default Cart