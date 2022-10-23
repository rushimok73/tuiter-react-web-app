import PostListItem from "./PostListItem.js";
import posts from "./posts.js";
import React from "react";

const PostList = () => {
    return (
        <ul className="list-group border-secondary">
        {
            posts.map(post =>
                <PostListItem
                    key={post._id}
                    post={post}/>
            )
        }
        </ul>
    );
}
export default PostList;