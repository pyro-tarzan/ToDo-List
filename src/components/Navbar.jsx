import React from "react";

function Navbar(props){
    return(
        <div className="nav-bar">
            <div className="nav-contents">
                <button className="menu-btn" onClick={props.menuFunction}>
                    <i className="fa-solid fa-bars"></i>
                </button>
                <span className="title">ToDo List</span>
            </div>
        </div>
    );
}

export default Navbar;