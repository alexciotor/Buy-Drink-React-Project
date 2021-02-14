 
    import {BrowserRouter as Router ,Route, Switch} from 'react-router-dom' 
    import {Link} from 'react-router-dom'
import data from '../modules/data'
import {FaCocktail} from 'react-icons/fa'
import Contact from './contact'
 

const Nav = ()=>{
 let id = new Date().getTime()
    return  <nav key={id}  className="nav-bar">
    <div className="drink-logo">
    <span className="cocktailLogo">The<span className='ctail' >Cocktail</span>Db</span>
    <span className="logo"><FaCocktail/></span>
    </div>
    <div className="menu-bar">
    <ul className="nav-ul">
     <li className='list' > <Link to='/'>Home</Link></li>
    {data.map(item=>{
        const {name }= item
        return  <li className="list">
        
           <Link to={`/${name}`}>{name}</Link>
        
        </li>
        
        
       
    })}
     <span className="cart number">0</span>
     </ul>
    </div>
    </nav>
}
export default Nav