import React, {useState} from "react";
import axios from "axios";

function Todoform({onCloseButton, handleAddCard}){

    const [formData, setFormData] = useState({
        title: "",
        description: "",
        due_date: ""
    });

    function handleChange(event){
        setFormData({...formData, [event.target.name]: event.target.value});
    }

    function handleSubmitButton(event){
        event.preventDefault();
        console.log("Form Submitted: ", formData);
        console.log("Date: ", formData.due_date);

        //to POST in the server.
        const url = "http://localhost:3001/todos/add/data";

        axios.post(url, formData)
        .then(res => console.log(res.data))
        .catch(err => console.error("Error: ", err));

        //To display in the Cards field.
        handleAddCard(formData);
        setFormData({title: "", description: "", due_date: ""});
    }   

    return (
        <div className={`form-container`}>
            <div className="form-header">
                <button className="close-btn" onClick={onCloseButton}>
                    <i className="fa-solid fa-x"></i>
                </button>
            </div>
            <form onSubmit={handleSubmitButton} className="form">
                <input type="text" className="input text" name="title" onChange={handleChange} placeholder="Title" required />
                <textarea type="text" className="input text" onChange={handleChange} rows="6" cols="30" name="description" placeholder="Description" required />
                <input type="date" className="input date" name="due_date" onChange={handleChange} />
                <button type="submit" className="submit-btn">Submit</button>
            </form>
        </div>
    );
}

export default Todoform;