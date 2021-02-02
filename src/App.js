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
loading:false,
items:[],
amount:1,
price:function(id){
id =  Number(id)/1000
  return parseFloat((id).toFixed(2))
}
}



const reducer =  (state,action)=>{
if(action.type==='DISPLAY'){
return {...state, items: action.payload}
}
if(action.type='INCREMENT'){
 return {...state, amount:state.amount + 1}
}
}
function App() {
    const[display, setDisplay] =useState(false)
    const [total,setTotal ] = useState([]) 
    const [data, setData] = useState([])
    const [state, dispatch] = useReducer(reducer, initialInfo)

    const [loading,setLoading ] = useState(false)
   const [list,setList] =useState([])

 
 
  
 
   const getData = async()=>{
  setLoading(true)
  const response = await fetch(URL)
  const data = await response.json()

dispatch({type:'DISPLAY',payload:data.drinks})
}
 
useEffect(()=>{
getData()
},[])

const increment=(id)=>{
  dispatch({type:'INCREMENT', payload:id})
}



  return  <Router>   
   <Nav list={list} />
   <Switch>
   
   <Route exact path='/Home'>
   <Home setDisplay={setDisplay} setTotal = {setTotal} state = {state}  setList={setList}   list={list}/>
   </Route>
   <Route path='/about'>
   <About/>
   </Route>
   <Route path='/contact'>
   <Contact/>
   </Route>
    <Route path='/cart'>
   <Cart increment={increment} setData ={setData} display={display} total={total} data={data} list={list} state={state} />
   </Route>
    <Route path='/details'>
   <SingleDrink state={state}/>
   </Route>
   <Route path='*'>
   <Error/>
   </Route>
   </Switch>
  
     </Router>

  
  ;
}

export default App;
 