import React from "react";
import "./index.css";
import TuitList from "../tuits/TuitList";
import WhatsHappening from "./whats-happening";

const HomeComponent = () => {
    return(
        <>
            <h4>Home</h4>
            <WhatsHappening/>
            <div className="border-secondary">
                <TuitList/>
            </div>
        </>
    );
};
export default HomeComponent;