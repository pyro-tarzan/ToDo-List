import React from "react";

function Navbar(){
    return(
        <div className="nav-bar">
            <div className="nav-contents">
                <span className="title">ToDo List</span>
                <div className="user-menu">
                    <span className="username">Hello, User</span>
                    <button className="user-icon">
                        <i className="fa-regular fa-user"></i>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Navbar;