import React from "react";

function Datacard({title, due_date, description}){
    return (
        <div className="card data-card">
            <div className="title-date">
                <span className="title-name">{title}</span>
                <span className="date-format">{due_date}</span>
            </div>
            <p className="description">
               {description}
            </p>
            <div className="categories-delete">
                <div className="categories">
                    <label htmlFor="completed">
                        <input type="radio" name="type" id="completed" />
                        Completed
                    </label>
                    <label htmlFor="inprogress">
                        <input type="radio" name="type" id="inprogress" />
                        Inprogress
                    </label>
                    <button type="submit" className="change-btn">Change</button>
                </div>
                <button className="delete-card">
                    <i className="fa-solid fa-trash"></i>
                </button>
            </div>
        </div>
    );
}

export default Datacard;