import React from "react";


const TuitStats = ({post}) => {
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
                            <i className="bi bi-heart wd-float-left text-black"
                               style={{fontStyle: "normal"}}> {post.likes}</i>
                        }
                    </li>
                    <li>
                         <i className="bi bi-download wd-float-left text-black" style={{fontStyle: "normal"}} aria-hidden="true"></i>
                    </li>
                    <div className="wd-float-done"></div>
                </ul>
    )
}

export default TuitStats;
