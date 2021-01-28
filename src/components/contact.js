   import {FaCocktail} from 'react-icons/fa'
   const Contact = ()=>{
    return <div className="contact-main-content">
    <div className="contact-title">
         <span className=" span2 contact-logo"><FaCocktail/></span>
    <span className=" span2 contact-cocktailLogo">The<span className='cok'>Cocktail</span>Db</span>
    <ul className="contact-list">
    <li className="list">Book Now</li>
    <li className="list">Bars</li>
    <li className="list">Kitchen Cocktails</li>
    <li className="list">Offers</li>
    <li className="list">Master Class</li>
    </ul>
    </div>
     <div className="second-title">
     <h4>Reservations</h4>
     <h5>020 7550 2421</h5>
     <h4>Convet Garden : 07664 054323</h4>
     
     </div>
    </div>
}

export default Contact