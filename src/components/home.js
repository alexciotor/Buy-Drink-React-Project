import {Link} from 'react-router-dom'
import React from 'react'
 import {CgAddR, CgLogOff} from 'react-icons/cg'
import {useState} from 'react'
import { FaRoad } from 'react-icons/fa'
 
const Home = ({searchValue, setLink ,state,getCart,getPrice,setTotal,total, setDisplay})=>{
   const searchDrink=()=>{
       setLink(searchValue.current.value)
   }
   const handleSubmit=(e)=>{
       e.preventDefault()
   }
 let idd = new Date().getTime()
    return <>
     <section className='main-section' >
         {/* <div className="form-container">
<form onSubmit={handleSubmit} className="form">
<label htmlFor="search"> Search</label> <br/>
<input autoComplete='off' type="text" id='search'  placeholder='chose your poison' ref={searchValue} onChange={searchDrink}/>

</form>

         </div> */}
    <div key={idd} className="main-content">
 
    {state.items.map((item,index)=>{
        const{strDrink:name, strCategory:cat,strAlcoholic:type,strDrinkThumb:img,idDrink:id} = item
 
        
        return( 
           
        <article key={id}    className="article">
        <header className="header">
        <img src={img} alt={name}/>
        </header>
        <footer className="footer">
        <h4>{name}</h4>
        <h3>{cat}</h3>
        <p>{type}</p>
       <Link className='link' to='/details'>  <button className="btn" onClick={()=>{
    localStorage.setItem('drink',id)
    
       }}>details</button></Link> 
       <div className="price">
       <span  className='para para-price' > {getPrice(id)} $ </span>
       <span onClick={()=>{
   let price = Number(id) /1000;
      
  setTotal([...total,price])
 getCart(id)
 
 setDisplay(true)
       }} type='button' className='para para-btn' ><CgAddR/></span>
       </div>
        </footer>
        </article>
        
        )
    })}
    </div>
    </section>
    </>
 
}

export default Home
 