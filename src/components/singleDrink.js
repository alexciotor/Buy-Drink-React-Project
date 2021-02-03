import { Link } from "react-router-dom";

const SingleDrink = ({state})=>{
    let id = localStorage.getItem('drink')
   
    let item = state.items.filter(item=>{
        if(item.idDrink===id){
            return item
        }
    })
    return (<>
      
         
   { item.map(item=>{
 const {strDrink:name,strCategory:cat,strAlcoholic:type, strGlass:glass, strInstructions:instruct,strDrinkThumb:img,strIngredient1:ingr1,strIngredient2:ingr2,strIngredient3:ingr3,strIngredient4:ingr4}=item
  console.log(item);
  let ingredients = [ingr1,ingr2,ingr3,ingr4]
  console.log(ingr1);
    return (
 <section className="singleDrink-container">
 <div className="title">
 <Link to='/'><button className="btn2">Back Home</button></Link>
 <h1>{name}</h1></div>
 <div className=" singleDrink-article">
 <div className="singleDrink-img">
 <img src={img} alt={name}/>
 </div>
 <div className="singleDrink-info">
 <p><span className=" span name">Name:</span>{name}</p>
 <p><span className=" span category">Category:</span>{cat}</p>
 <p><span className=" span type">Info:</span>{type}</p>
 <p><span className=" span glass">Glass:</span>{glass}</p>
 <p><span className=" span instructions">Instructions:</span>{instruct}</p>
 <p><span className=" span ingredients">Ingredients:</span>{ingredients.map((item,index)=>{
     console.log(item);
     if(!item){
         return 
     }
     else{
         return <span className="spans">{item}</span>
     }
 })}</p>
 </div>
 </div>
 
 </section>
     
    )
    })}
   </>)
}

export default SingleDrink