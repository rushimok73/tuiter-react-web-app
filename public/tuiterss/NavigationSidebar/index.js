const NavigationSidebar = (active) => {
 const activeOption = 'wd-nav-' + active;
 let html = `
   <div class="list-group" style="font-size: 20px; background-color: #21201E;">
    <div class="wd-nav-home list-group-item list-group-item-action">
      <i class="fas fa-home" style="color: white"></i>
      <a class="text-decoration-none d-none d-xl-inline text-white pt-1" style="margin-left: 17px;" href="/tuiter/HomeScreen/index.html"> Home</a>
    </div>
    <div class="wd-nav-explore list-group-item list-group-item-action">
      <i class="fas fa-hashtag" style="color: white"></i>
      <a class="text-decoration-none d-none d-xl-inline text-white pt-1" style="margin-left: 20px;" href="/tuiter/explorez/index.html"> Explore</a>
    </div>
    <div class="wd-nav-notifications list-group-item list-group-item-action">
      <i class="fas fa-bell" style="color: white"></i>
      <a class="text-decoration-none d-none d-xl-inline text-white pt-1" style="margin-left: 20px;" href="https://en.wikipedia.org/wiki/Dune_(novel)">Notifications</a>
    </div>
    <div class="wd-nav-messages list-group-item list-group-item-action">
      <i class="fas fa-envelope" style="color: white"></i>
      <a class="text-decoration-none d-none d-xl-inline text-white pt-1" style="margin-left: 20px;" href="https://en.wikipedia.org/wiki/Dune_(novel)">Messages</a>
    </div>
    <div class="wd-nav-bookmarks list-group-item list-group-item-action">
      <i class="fas fa-bookmark" style="color: white"></i>
      <a class="text-decoration-none d-none d-xl-inline text-white ms-4 pt-1" href="https://en.wikipedia.org/wiki/Dune_(novel)">Bookmarks</a>
    </div>
    <div class="wd-nav-lists list-group-item list-group-item-action">
      <i class="fas fa-list-alt" style="color: white"></i>
      <a class="text-decoration-none d-none d-xl-inline text-white ms-3 pt-1" href="https://en.wikipedia.org/wiki/Dune_(novel)">Lists</a>
    </div>
    <div class="wd-nav-profile list-group-item list-group-item-action">
      <i class="fas fa-user" style="color: white"></i>
      <a class="text-decoration-none d-none d-xl-inline text-white pt-1" style="margin-left: 20px;" href="https://en.wikipedia.org/wiki/Dune_(novel)">Profile</a>
    </div>
    <div class="wd-nav-more list-group-item list-group-item-action">
      <div class="wd-ellipsis float-start">•••</div>
      <a class="text-decoration-none d-none d-xl-inline text-white pt-1 float-start" style="margin-left: 25px;" href="https://en.wikipedia.org/wiki/Dune_(novel)">More</a>
    </div>
   </div>
   <button class="btn btn-primary w-100 mt-5 rounded-pill p-2">
    Tuit
   </button>
   <br/><br/><br/><br/><br/>
 `;
 html = html.replace(activeOption, activeOption+' wd-nav-active ')
 return html;
}

export default NavigationSidebar;