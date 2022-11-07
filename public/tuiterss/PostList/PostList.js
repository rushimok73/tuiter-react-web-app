import PostListItem from "../PostList/PostListItem.js";
import posts from "../PostList/posts.js";

const PostList = () => {
    return (`
            ${
                posts.map(post => {
                    return(PostListItem(post));
                }).join('')
            }
    `);
}
export default PostList;