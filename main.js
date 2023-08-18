const navItems = document.querySelector(".nav__items");
const openBtn = document.querySelector("#open_nav_btn");
const closeBtn = document.querySelector("#close_nav_btn");

// open navbar
const openNav = () => {
    navItems.style.display = "flex";
    openBtn.style.display = "none";
    closeBtn.style.display = "inline-block";
}

// close navbar
const closeNav = () => {
    navItems.style.display = "none";
    closeBtn.style.display = "none";
    openBtn.style.display = "inline-block";
}


openBtn.addEventListener('click', openNav);
closeBtn.addEventListener('click', closeNav);


// Sidebar toggle
const sidebar = document.querySelector('aside');
const showSideBarBtn = document.querySelector('#show__sidebar-btn');
const hideSideBarBtn = document.querySelector('#hide__sidebar-btn');

const showSideBar = () => {
    sidebar.style.left = '0';
    showSideBarBtn.style.display = "none";
    hideSideBarBtn.style.display = "inline-block";
}

const hideSideBar = () => {
    sidebar.style.left = '-100%';
    showSideBarBtn.style.display = "inline-block";
    hideSideBarBtn.style.display = "none";
}

showSideBarBtn.addEventListener('click', showSideBar);
hideSideBarBtn.addEventListener('click', hideSideBar);