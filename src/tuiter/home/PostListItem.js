import React from "react";


const PostListItem = ({post}) => {
    return (
        <div className="wd-bookmarked-post">
        <div className="wd-float-left">
            <img className="wd-profile-pic" src={post.displayPicture} width="48px" height="48px"/>
        </div>
        <div className="wd-post-content wd-float-left">
            <div className="wd-user-info">
                <p className="wd-float-left wd-no-top-margin wd-bold">{post.userName}<span><i className="bi bi-patch-check"></i></span></p>
                <p className="wd-margin-left-10 wd-no-top-margin wd-float-left wd-grey">@{post.handle}</p>
                <p className="wd-margin-left-10 wd-no-top-margin wd-float-left wd-grey">- {post.time}</p>
                <div className="wd-float-done"></div>
            </div>

            <div className="wd-post-text wd-no-top-margin">
                {post.remark}
            </div>

            <div className="wd-post-link">
                <img className = "wd-link-img" src={post.image}
                     width="504px" height="264px"/>
                <div style={{"height": "fit-content"}}>
                    <p className="wd-bold-15 wd-text-padding-no-bottom-12 wd-no-top-margin">{post.title}</p>
                    <p className="wd-text-padding-no-bottom-12 wd-no-top-margin">{post.content}</p>
                    <a className="wd-no-top-margin wd-text-padding-no-bottom-12 " href="#"><span>
                        <i className="bi bi-link-45deg"></i>
                    </span>{post.link}</a>
                </div>
            </div>

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

        </div>

        <div className="wd-float-done"></div>
        </div>
    )
}

export default PostListItem;
