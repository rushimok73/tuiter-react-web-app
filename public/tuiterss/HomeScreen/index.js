import NavigationSidebar from "../NavigationSidebar/index.js";
import PostSummaryList from "../PostSummaryList/index.js";
import PostList from "../PostList/PostList.js";

function exploreComponent() {
    $('#wd-explore').append(`
        <div class="row mt-2">
            <div class="col-12 col-sm-2 col-md-2 col-lg-1 col-xl-2 col-xxl-2">
                ${NavigationSidebar('home')}
            </div>
            <div class="col-12 col-sm-10 col-md-10 col-lg-7 col-xl-6 col-xxl-6 p-0">
                ${PostList()}
            </div>
            <div class="col-12 d-none d-lg-block col-lg-4 col-xl-4 col-xxl-4" style="margin-top:-15px;">
               ${PostSummaryList()}
            </div>
        </div>
   `);

}

$(exploreComponent);