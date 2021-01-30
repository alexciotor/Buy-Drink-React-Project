import React from 'react'
import {useState, useEffect,useReducer} from 'react'
const URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a'
let lists = []
let orders = JSON.parse(localStorage.getItem('orders'))
const Cart = ({data})=>{
 console.log(orders);
 console.log(lists);
return <div className="cart-content">
 

 

</div>

}

export default Cart