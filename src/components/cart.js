import React from 'react'
import {useState, useEffect,useReducer} from 'react'
import { CgLogOff } from 'react-icons/cg'
import { FaRProject } from 'react-icons/fa'
 import Empty from '../components/empty'
   
const Cart = ({display,cart  })=>{
  const [newCart, setNewCart] = useState([...new Set(cart)])
 
let sum = newCart.map(item=>{
  return item.price
})
 

   let lastTotal = sum.reduce((total,item)=>total+item,0)

  return (  
   <section className='section-cart' >

  <div className='cart-container' >
{newCart.map(item=>{
  const {strDrink:name,idDrink:id,strCategory:cat,strAlcoholic:type, strGlass:glass, strInstructions:instruct,strDrinkThumb:img,strIngredient1:ingr1,strIngredient2:ingr2,strIngredient3:ingr3,strIngredient4:ingr4,price}=item
 
  return (
    <div className="article-content">
<article   className='cart-article' >
<div className="left">
<div className="img-container">
<img src= {img} alt='' />
</div>
<div className="content-container">
<h4>{name}</h4>
<p>{glass}</p>
 <p>{type}</p>
<p>{price} $</p>
 
</div>

</div>


</article>

</div>
  )
  
})}

  
</div>
   
<div className="total-container">
<h4>{display ? `total : ${lastTotal}  $` : <Empty/> } </h4>
{display && <button className="cart-bt">Submit Order</button>}
</div> 
</section>
 


 
 
 
)

   
}

export default Cart