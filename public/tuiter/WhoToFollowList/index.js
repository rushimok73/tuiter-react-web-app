import WhoToFollowListItem from "../WhoToFollowList/WhoToFollowListItem.js";
import who from "../WhoToFollowList/who.js";

const WhoToFollowList = () => {
    return (`
    <div class="ms-3 p-3 pb-0 pt-2 mt-2" 
    style="height: fit-content; 
    border-radius: 10px 10px 10px 10px; 
    background-color:#21201E;">
        <div class="fs-5 fw-bold pb-2" style="padding-left: 10px;">Who to follow</div>
        ${
            who.map(account => {
                return(WhoToFollowListItem(account));
            }).join('')
        }
        <a class="row mt-1 pb-2 ps-5 text-decoration-none" style="font-size: 16px;" href="#">Show more</a>
      </div>
      <div class="text-secondary ms-3 p-2" style="font-size: 16px;">Terms of Service  Privacy Policy  Cookie Policy</div>
      <div class="text-secondary ms-3 p-2 pt-0 mt-0" style="font-size: 16px;">Ads info More...  Ⓒ 2022 Tuiter, inc.</div>
`);
}


export default WhoToFollowList;