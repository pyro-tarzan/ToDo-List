import React, {useState} from "react";

function Todoform({onCloseButton, onSubmitButton}){

    const [formData, setFormData] = useState({
        title: "",
        description: "",
        date: ""
    });

    function handleChange(event){
        setFormData({...formData, [event.target.name]: event.target.value});
    }

    function handleSubmitButton(event){
        event.preventDefault();
        onSubmitButton(formData);
        setFormData({title: "", description: "", date: ""});
    }   

    return (
        <div className={`form-container`}>
            <div className="form-header">
                <button className="close-btn" onClick={onCloseButton}>
                    <i className="fa-solid fa-x"></i>
                </button>
            </div>
            <form action="/todos/add/data" onSubmit={handleSubmitButton} className="form" method="POST">
                <input type="text" className="input text" name="title" onChange={handleChange} placeholder="Title" />
                <textarea type="text" className="input text" onChange={handleChange} rows="6" cols="30" name="description" placeholder="Description" />
                <input type="date" className="input date" name="date" onChange={handleChange} />
                <button type="submit" className="submit-btn">Submit</button>
            </form>
        </div>
    );
}

export default Todoform;