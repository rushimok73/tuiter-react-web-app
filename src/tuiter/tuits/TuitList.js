import React from "react";
import TuitItem from "./TuitItem";
import {useSelector} from "react-redux";

const TuitList = () => {
    const posts = useSelector(
        (state) => state.tuits);
    return (
        <ul className="list-group border-light">
            {
                posts.map(post =>
                    <TuitItem
                        key={post._id}
                        post={post}/>
                )
            }
        </ul>
    );
}
export default TuitList;