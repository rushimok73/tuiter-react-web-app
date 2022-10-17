import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return(`
        <div class="ms-3">
            <div class="border-start position-relative border-end border-bottom border-secondary pt-2">
          <div class="row">
            <div class="col-10" style="padding: 0px 16px 10px 40px;">
              <input class="ps-5 form-control rounded-pill wd-search-input" placeholder="Search Tuiter"/>
              <i class="fas fa-search position-absolute wd-search-icon left-0 top-0"></i>
            </div>
            <div class="col-2">
              <i class="fas fa-cog wd-cog-tuiter" style="font-size: 1.5em"></i>
            </div>
          </div>

          <ul class="nav nav-tabs mt-1 nav-fill border-bottom-0"  style="padding: 0px 0px 0px 0px;">
            <li class="nav-item">
              <a class="nav-link text-secondary" href="for_you.html">
                For You
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-secondary" href="trending.html">
                Trending
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-secondary" href="news.html">
                News
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-secondary" href="sports.html" tabindex="-1">
                Sports
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-secondary" href="entertainment.html" tabindex="-1">
                Entertainment
              </a>
              <div class = "wd-active mb-0 fw-bold rounded-pill"></div>
            </li>
          </ul>
        </div>
            <div class="position-relative border-start border-end border-secondary">
              <img src="https://i.ytimg.com/vi/bZYPI4mYwhw/maxresdefault.jpg" width="100%"/>
              <div class="position-absolute bottom-0 left-0 me-1 mb-1 text-white">
                <p class="ms-2 mb-0">Music . Last night</p>
                <h4 class="ms-2">BTS and Coldplay release their new song, My Universe 🪐</h4>
              </div>
            </div>  
            <ul class="list-group border border-secondary rounded-0">
                ${PostSummaryList()}
            </ul>
        </div>
    `);
}
export default ExploreComponent;
