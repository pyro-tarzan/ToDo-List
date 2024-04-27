import React from "react";

function Sidepanel({nameClass, clickBtn}){

    return (
        <div className={`side-panel ${nameClass}`}>
            <div className="side-panel-contents">
                <div id="home" className="a-content" onClick={clickBtn}>Home</div>
                <div id="inprogress" className="a-content" onClick={clickBtn} >Inprogress</div>
                <div id="completed" className="a-content" onClick={clickBtn} >Completed</div>
            </div>
        </div>
    );
}

export default Sidepanel;
