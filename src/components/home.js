import {Link} from 'react-router-dom'
const Home = ({data,idd})=>{

    return <>
    <div key={idd} className="main-content">
    {data.map(item=>{
        const{strDrink:name, strCategory:cat,strAlcoholic:type,strDrinkThumb:img,idDrink:id} = item
        return( 
           
        <article key={id} className="article">
        <header className="header">
        <img src={img} alt={name}/>
        </header>
        <footer className="footer">
        <h4>{name}</h4>
        <h3>{cat}</h3>
        <p>{type}</p>
       <Link to='/details'>  <button className="btn" onClick={()=>{
    localStorage.setItem('drink',id)
    
       }}>details</button></Link>
        </footer>
        </article>
        
        )
    })}
    </div>
    </>
}

export default Home