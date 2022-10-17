import NavigationSidebar from "../NavigationSidebar/index.js";
import ExploreComponent from "../ExploreScreen/ExploreComponent.js";
import WhoToFollowList from "../WhoToFollowList/index.js";

function exploreComponent() {
   $('#wd-explore').append(`
        <div class="row mt-2">
            <div class="col-12 col-sm-2 col-md-2 col-lg-1 col-xl-2 col-xxl-2">
                ${NavigationSidebar('explore')}
            </div>
            <div class="col-12 col-sm-10 col-md-10 col-lg-7 col-xl-6 col-xxl-6 p-0">
                ${ExploreComponent()}
            </div>
            <div class="col-12 d-none d-lg-block col-lg-4 col-xl-4 col-xxl-4">
               ${WhoToFollowList()}
            </div>
        </div>
   `);

}

$(exploreComponent);