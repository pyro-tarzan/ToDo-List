import React, { useState, useEffect } from "react";
import axios from "axios";

// Import Components
import Todoform from "./Todoform";
import Datacard from "./Datacard";

const Home = (() => {

     // Get the Form Content by Clicking Add Button
     const [formCard, setFormCard] = useState();
     const [isClick, setisClick] = useState(false);
     const [cards, setCards] = useState([]);
     const [loading, setLoading] = useState(true);
 
     console.log("Home component loaded ", cards.length);
 
     useEffect(() => {
         
         const fetchData = async() => {
 
             try{
                 const response = await axios.get("http://localhost:3001/todos/home");
                 setCards(response.data);
                 setLoading(false);
             }
             catch(err){
                 console.error("Error fetching users: ", err);
                 setLoading(false);
             }
         };
 
         fetchData();
 
     }, []);
 
     if(loading){
         return(
             <div>Loading...</div>
         );
     }
 
     console.log("Rendering Home Componenet");
 
     // Click Submit Button
     function handleSubmit(formData){
         
         const newCard = {
             id: Date.now(),
             ...formData
         };
         setCards([...cards, newCard]);
         setisClick(false);
     }
 
     // When click add Button
     function handleAddBtn(){
         setFormCard(
             <Todoform 
             onCloseButton={clickCloseButton}
             onSubmitButton={handleSubmit}
             />
         );
         setisClick(true);
     }
 
     // Click Close Button
     function clickCloseButton(){
         if(!isClick){
             setFormCard(undefined);
             setisClick(false); 
         }
     }
 
     return (
         <div className="home">
             <div className="function-bar">
                 <button className="add-btn" onClick={handleAddBtn}>
                     <i className="fa-solid fa-plus"></i>
                 </button>
             </div>
 
             <div className="cards-form">
                 {isClick && clickCloseButton ? formCard : null}
                 {cards.map(card => <Datacard key={card.id} {...card} /> )}
             </div>
         </div>
     );
});

export default Home;