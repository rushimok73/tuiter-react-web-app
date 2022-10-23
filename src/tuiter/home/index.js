import React from "react";
import PostList from "./PostList";
import "./index.css";

const HomeComponent = () => {
    return(
        <div className="border-secondary">
            <PostList/>
        </div>
    );
};
export default HomeComponent;