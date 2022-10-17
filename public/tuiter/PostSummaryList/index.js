import PostSummaryItem from "../PostSummaryList/PostSummaryItem.js";
import exploreItems from "../PostSummaryList/posts.js";

const PostSummaryList = () => {
    return (`
        <ul class="list-group border border-secondary rounded-0 mt-3">
            ${
                exploreItems.map(post => {
                    return(PostSummaryItem(post));
                }).join('')
            }
        </ul>
    `);
}
export default PostSummaryList;