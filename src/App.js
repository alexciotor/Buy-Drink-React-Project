import React, {useContext,useState, useReducer,useEffect} from 'react'
import {BrowserRouter as Router ,Route, Switch} from 'react-router-dom'
import Home from './components/home'
import Contact from './components/contact'
import Error from './components/error'
import About from './components/about'
import Cart from './components/cart'
import './App.scss';
import Nav from './components/nav'
import SingleDrink from './components/singleDrink'
 import {useRef} from 'react'
 import drinks from './modules/drinks'
const URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a'
const initialInfo = {
loading:false,
items:drinks,
amount:1,
}

// const getPrice= (id) =>{
//     let price = Number(id) /1000;
//     return price.toFixed(2) 
const reducer =  (state,action)=>{
    if(action.type=== 'DATA'){
        return {...state, items:action.payload}
    }
}
function App() {
const[display, setDisplay] =useState(false)
const [state, dispatch] = useReducer(reducer, initialInfo)
 const [cart, setCart] = useState([])
 
const [cartItems, setCartItems] = useState([])
 const getData = async()=>{
     const response = await  fetch(URL)
     const data = await response.json()
    
     
 }
const getCart = (id)=>{
      state.items.filter(item=>{
         if(item.idDrink ===id){
            setCart([...cart,item])
         }
          
      return item
    })
 
}
 console.log(cart);
 
 useEffect(()=>{
     getData()
 },[])
return  <Router>   
<Nav cart={cart}/>
<Switch>
<Route exact path='/'>
<Home  setCart={setCart} setDisplay={setDisplay} getCart={getCart}   state = {state} />
</Route>
<Route path='/about'>
<About/>
</Route>
<Route path='/contact'>
<Contact/>
</Route>
<Route path='/cart'>
   
      <Cart   display={display} cart ={cart}/>
 

</Route>
<Route path='/details'>
<SingleDrink state={state}/>
</Route>
<Route path='*'>
<Error/>
</Route>
</Switch>
</Router> 
}
export default App;
 