 
    import {BrowserRouter as Router ,Route, Switch} from 'react-router-dom' 
    import {Link} from 'react-router-dom'
import data from '../modules/data'
import {FaCocktail} from 'react-icons/fa'
import Contact from './contact'

const Nav = ()=>{
   
    return  <nav   className="nav-bar">
    <div className="drink-logo">
    <span className="cocktailLogo">The<span>Cocktail</span>Db</span>
    <span className="logo"><FaCocktail/></span>
    </div>
    <div className="menu-bar">
    <ul className="nav-ul">
    {data.map(item=>{
        const {name }= item
        return <li className="list">
           <Link to={`/${name}`}>{name}</Link>
        
        </li>
        
       
    })}
     
     </ul>
    </div>
    </nav>
}
export default Nav