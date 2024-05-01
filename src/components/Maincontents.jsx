import React, {useState, useEffect} from "react";

// Import React Components
import Sidepanel from "./Sidepanel";
import Home from "./Home";
import Inprogress from "./Inprogress";
import Completed from "./Completed";

const Maincontents = ((props) => {

    console.log("! Time Render");

    const [contentArea, setContentArea] = useState(<Home />);

    console.log(contentArea, "Render 1 content area use state.");

    const handleClickBtn = (event) => {
        const idElement = event.target.id;

        if(idElement === "home"){
            console.log ("home event is clicked");
            setContentArea(<Home />)
        }
        else if(idElement === "inprogress"){
            setContentArea(<Inprogress />);
        }
        else if(idElement === "completed"){
            setContentArea(<Completed />);
        }
    }

    console.log(contentArea, "Render 2 content area useState.")

    useEffect(() => {

    }, []);

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