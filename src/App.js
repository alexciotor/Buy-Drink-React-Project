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
const reducer =  (state,action)=>{
}
function App() {
const[display, setDisplay] =useState(false)
const [state, dispatch] = useReducer(reducer, initialInfo)
const [cartItems, setCartItems] = useState([])
console.log(cartItems);
return  <Router>   
<Nav/>
<Switch>
<Route exact path='/'>
<Home setCartItems = {setCartItems} setDisplay={setDisplay}    state = {state} />
</Route>
<Route path='/about'>
<About/>
</Route>
<Route path='/contact'>
<Contact/>
</Route>
<Route path='/cart'>
<Cart cartItems={cartItems} state={state}  display={display}      />
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
 