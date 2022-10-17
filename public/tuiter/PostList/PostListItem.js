const PostListItem = (post) => {
    return (`
        <div class="wd-bookmarked-post">
        <div class="wd-float-left">
            <img class="wd-profile-pic" src="${post.displayPicture}" width="48px" height="48px"/>
        </div>
        <div class="wd-post-content wd-float-left">
            <div class="wd-user-info">
                <p class="wd-float-left wd-no-top-margin wd-bold">${post.userName}</p>
                <p class="wd-margin-left-10 wd-no-top-margin wd-float-left wd-grey">@${post.handle}</p>
                <p class="wd-margin-left-10 wd-no-top-margin wd-float-left wd-grey">- ${post.time}</p>
                <div class="wd-float-done"></div>
            </div>

            <div class="wd-post-text wd-no-top-margin">
                ${post.remark}
            </div>

            <div class="wd-post-link">
                <img class = "wd-link-img" src="${post.image}"
                     width="504px" height="264px"/>
                <div style="height: fit-content;">
                    <p class="wd-bold-15 wd-text-padding-no-bottom-12 wd-no-top-margin">${post.title}</p>
                    <p class="wd-text-padding-no-bottom-12 wd-no-top-margin">${post.content}</p>
                    <a class="wd-no-top-margin wd-text-padding-no-bottom-12 " href="#">${post.link}</a>
                </div>
            </div>

            <ul class="wd-icons-flex m-1">
                <li>
                    <div>
                        <i class="fa-solid fa-comment wd-float-left m-1"></i>
                        <p class="wd-grey wd-float-left wd-left-pad-12 wd-no-top-margin">${post.comments}</p>
                    </div>
                </li>
                <li>
                    <div>
                        <i class="fa fa-retweet wd-float-left m-1" aria-hidden="true"></i>
                        <p class="wd-grey wd-float-left wd-left-pad-12 wd-no-top-margin">${post.retweets}</p>
                    </div>
                </li>
                <li>
                    <div>
                        <i class="fa-solid fa-heart wd-float-left m-1" style="color:red;"></i>
                        <p class="wd-grey wd-float-left wd-left-pad-12 wd-no-top-margin wd-selected">${post.likes}</p>
                    </div>
                </li>
                <li>
                    <div>
                        <i class="fa fa-download wd-float-left m-1" aria-hidden="true"></i>

                        <p class="wd-grey wd-float-left wd-left-pad-12 wd-no-top-margin">22</p>
                    </div>
                </li>
                <div class="wd-float-done"></div>
            </ul>

        </div>

        <div class="wd-float-done"></div>
        </div>
    `)
}

export default PostListItem;
