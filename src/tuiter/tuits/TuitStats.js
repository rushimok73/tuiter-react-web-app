import React from "react";


const TuitStats = ({post}) => {
    return (
        <ul className="wd-icons-flex m-1">
                    <li>
                        <div>
                            <i className="bi bi-chat wd-float-left m-1 text-black mt-0 "></i>
                            <p className="wd-grey wd-float-left wd-left-pad-12 wd-no-top-margin">{post.comments}</p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <i className="bi bi-square wd-float-left m-1 text-black mt-0 " aria-hidden="true"></i>
                            <p className="wd-grey wd-float-left wd-left-pad-12 wd-no-top-margin">{post.retweets}</p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <i className="bi bi-heart-fill wd-float-left m-1 mt-0 " style={
                                {"color" : "red"}
                            }></i>
                            <p className="wd-grey wd-float-left wd-left-pad-12 wd-no-top-margin border-bottom-0 wd-selected">{post.likes}</p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <i className="bi bi-download wd-float-left m-1 mt-0 text-black" aria-hidden="true"></i>
                        </div>
                    </li>
                    <div className="wd-float-done"></div>
                </ul>
    )
}

export default TuitStats;
