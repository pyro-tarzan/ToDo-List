import React, {useState} from "react";

// Import React Components
import Sidepanel from "./Sidepanel";
import Home from "./Home";
import Inprogress from "./Inprogress";
import Completed from "./Completed";

const Maincontents = ((props) => {

    const [contentArea, setContentArea] = useState(<Home />);

    const handleClickBtn = (event) => {
        const idElement = event.target.id;

        if(idElement === "home"){
            setContentArea(<Home />)
        }
        else if(idElement === "inprogress"){
            setContentArea(<Inprogress />);
        }
        else if(idElement === "completed"){
            setContentArea(<Completed />);
        }
    }

    return (
        <div className="main-content">
            <Sidepanel 
            nameClass={props.hidePanel}
            clickBtn={handleClickBtn} />
            {contentArea}
        </div>
    );
});

export default Maincontents;