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
const URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a'
function App() {
   const [data, setData] = useState([])
   const [loading,setLoading ] = useState(false)
   let idd = data.map(item=>{
     const {idDrink:idd} = item
     return idd
   })
const getData = async()=>{
  setLoading(true)
  const response = await fetch(URL)
  const data = await response.json()
 setData(data.drinks)
 setLoading(false)
}
 
useEffect(()=>{
getData()
},[])
  return (
    <Router>   
   <Nav/>
   <Switch>
   <Route exact path='/home'>
   <Home data = {data} idd={idd}/>
   </Route>
   <Route path='/about'>
   <About/>
   </Route>
   <Route path='/contact'>
   <Contact/>
   </Route>
    <Route path='/cart'>
   <Cart/>
   </Route>
    <Route path='/details'>
   <SingleDrink data={data}/>
   </Route>
   <Route path='*'>
   <Error/>
   </Route>
   </Switch>
  
     </Router>

  
  );
}

export default App;
