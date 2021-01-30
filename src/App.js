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
const URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a'


const initialInfo = {

}

const reducer =  (info,action)=>{

}

function App() {
  const [total,setTotal ] = useState(0) 
   const [state, setState] = useState([])
     let refContainer = useRef ({})
   const [data, setData] = useState([])
   const [info, dispatch] = useReducer(reducer, initialInfo)
   const [loading,setLoading ] = useState(false)
   const [list,setList] =useState([])

 
 
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
   <Nav list={list} />
   <Switch>
   <Route exact path='/home'>
   <Home setTotal = {setTotal} data = {data} idd={idd}  state= {state} setState = {setState} setList={setList} list={list}/>
   </Route>
   <Route path='/about'>
   <About/>
   </Route>
   <Route path='/contact'>
   <Contact/>
   </Route>
    <Route path='/cart'>
   <Cart total={total} data={data} list={list} />
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
