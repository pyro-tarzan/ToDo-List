import React, { useState, useEffect } from "react";
import axios from "axios";

// Import Components
import Todoform from "./Todoform";
import Datacard from "./Datacard";

const Home = () => {

     // Get the Form Content by Clicking Add Button
     const [formCard, setFormCard] = useState();
     const [isClick, setisClick] = useState(false);
     const [cards, setCards] = useState([]);
     const [loading, setLoading] = useState(true);
     const [message, setMessage] = useState("");
 
     useEffect(() => {
         
         const fetchData = async() => {
 
             try{
                 const response = await axios.get("http://localhost:3001/todos/home");
                 console.log("fetching data", response.data);
                 setCards(response.data);
                 setLoading(false);
             }
             catch(err){
                console.error("Error fetching users: ", err);
                console.log(err.message);
                setLoading(false);
                setMessage("Something went wrong.");
             }
         };
 
         fetchData();
 
     }, []);
 
     if(loading){
         return(
            <div id="fountainG">
	            <div id="fountainG_1" className="fountainG"></div>
	            <div id="fountainG_2" className="fountainG"></div>
	            <div id="fountainG_3" className="fountainG"></div>
	            <div id="fountainG_4" className="fountainG"></div>
	            <div id="fountainG_5" className="fountainG"></div>
	            <div id="fountainG_6" className="fountainG"></div>
	            <div id="fountainG_7" className="fountainG"></div>
	            <div id="fountainG_8" className="fountainG"></div>
            </div>
         );
     }
 
     // Click Submit Button
     function addCard(formData){
         
         const newCard = {
             id: Date.now(),
             ...formData
         };

         console.log("new Value", newCard);
         setCards([...cards, newCard]);
         setisClick(false);
     }
 
     // When click add Button
     function handleAddBtn(){
         setFormCard(
             <Todoform 
             onCloseButton={clickCloseButton}
             handleAddCard={addCard}
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

            {message ? <div className="warning popup">
                <p>{message}</p>
            </div>
            :
            <div className="cards-form">
                {isClick && clickCloseButton ? formCard : null}
                {cards.length ? cards.map(card => <Datacard key={card.id} {...card} /> ) : <div className="popup empty">Data is Empty</div> }
            </div> }
         </div>
     );
}

export default Home;