import React from "react";
import TuitStats from "./TuitStats";
import {deleteTuitThunk} from "../../services/tuits-thunks";
import {useDispatch} from "react-redux";


const TuitItem = ({post}) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuitThunk(id));
    }

    return (
        <div className="wd-bookmarked-post border-secondary border-opacity-25">
            <div className="wd-float-left">
                <img className="wd-profile-pic" src={post.displayPicture} width="48px" height="48px"/>

            </div>
            <i className="bi bi-x-lg float-end"
               onClick={() => deleteTuitHandler(post._id)}></i>
            <div className="wd-post-content wd-float-left">
                <div className="wd-user-info">
                    <p className="wd-float-left wd-no-top-margin wd-bold">{post.userName}<span><i className="bi bi-patch-check"></i></span></p>
                    <p className="wd-margin-left-10 wd-no-top-margin wd-float-left wd-grey">@{post.handle}</p>
                    <p className="wd-margin-left-10 wd-no-top-margin wd-float-left wd-grey">- {post.time}</p>
                    <div className="wd-float-done"></div>
                </div>

                <div className="wd-post-link border-0">
                    <p className="wd-text-padding-no-bottom-12">{post.tuit}</p>
                </div>

                <TuitStats post={post}/>

            </div>

            <div className="wd-float-done"></div>
        </div>
    )
}

export default TuitItem;
