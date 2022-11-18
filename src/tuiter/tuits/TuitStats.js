import React from "react";
import {updateTuitThunk} from "../../services/tuits-thunks";
import {useDispatch} from "react-redux";


const TuitStats = ({post}) => {
    const dispatch = useDispatch();
    return (
        <ul className="wd-icons-flex m-1">
                    <li>
                        <i className="bi bi-chat wd-float-left text-black " style={{fontStyle: "normal"}}> {post.comments}</i>
                    </li>
                    <li>
                        <i className="bi bi-square wd-float-left text-black " style={{fontStyle: "normal"}} aria-hidden="true"> {post.retweets}</i>
                    </li>
                    <li>
                        {
                            post.liked ?
                            <i className="bi bi-heart-fill wd-float-left"
                            style={{"color" : "red",fontStyle: "normal"}}> {post.likes}</i>
                            :
                            <i onClick={() => dispatch(updateTuitThunk({
                                ...post,
                                likes: post.likes + 1,
                                liked: true
                                }))}
                               className="bi bi-heart wd-float-left text-black"
                               style={{fontStyle: "normal"}}> {post.likes}</i>
                        }
                    </li>
                    <li>
                         <i className="bi bi-download wd-float-left text-black" style={{fontStyle: "normal"}} aria-hidden="true"></i>
                    </li>
                    <li>
                        {
                            post.disliked ?
                                <i className="bi bi-hand-thumbs-down-fill wd-float-left text-black"
                                   style={{fontStyle: "normal"}}> {post.dislikes}</i>
                                :
                                <i onClick={() => dispatch(updateTuitThunk({
                                    ...post,
                                    dislikes: post.dislikes === undefined ? 0 : post.dislikes  + 1,
                                    disliked: true
                                }))}
                                   className="bi bi-hand-thumbs-down wd-float-left text-black"
                                   style={{fontStyle: "normal"}}> {post.dislikes}</i>
                        }
                    </li>
                    <div className="wd-float-done"></div>
                </ul>
    )
}

export default TuitStats;
