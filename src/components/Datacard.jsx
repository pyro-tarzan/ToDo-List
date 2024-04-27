import React from "react";

function Datacard({title, date, description}){
    return (
        <div className="card data-card">
            <div className="title-date">
                <span className="title-name">{title}</span>
                <span className="date-format">{date}</span>
            </div>
            <p className="description">
               {description}
            </p>
            <div className="categories">
                <label htmlFor="completed">
                    <input type="radio" name="type" id="completed" />
                    Completed
                </label>
                <label htmlFor="inprogress">
                    <input type="radio" name="type" id="inprogress" />
                    Inprogress
                </label>
            </div>
        </div>
    );
}

export default Datacard;