const PostSummaryItem = (post) => {
    return (`
        <li class="list-group-item text-white border-bottom border-thin pb-4"
            style="background-color: #21201E;">
            <div class="row position-relative">
                <div class="col-9">
                    <div class="text-secondary">${post.topic}</div>
                    <div class="fw-bold">${post.userName} - <span class="text-secondary fw-light">${post.time}</span></div>
                    <div class="fw-bold">${post.title}</div>
                </div>
                <div class="col-1 position-absolute" style="right: 50px; top: 10px">
                    <img src="${post.image}" 
                    height="60px"/>
                </div>
            </div>
      </li>
    `)
}

export default PostSummaryItem;
