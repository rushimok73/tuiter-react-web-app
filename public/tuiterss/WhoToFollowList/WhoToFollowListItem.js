const WhoToFollowListItem = (who) => {
    return (`
        <div class="row mt-1 mb-4">
            <div class="col-2">
                <img src="${who.avatarIcon}"
                     width="45px" height="45px" class="rounded-circle"/>
            </div>
            <div class="col-6 ps-4">
                <div>
                  <div class="fw-bold" style="font-size: 16px; margin-left: -15px;">${who.userName}</div>
                  <div style="font-size: 16px; margin-left: -15px;">@${who.handle}</div>
                </div>
            </div>
            <div class="col-4">
                <button class="rounded-pill bg-white text-black border-0 pt-1 pb-1" style="font-size: 16px;width: 100%;height:40px;">
                  Follow
                </button>
            </div>
        </div>
    `)
}

export default WhoToFollowListItem;