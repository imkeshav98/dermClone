var mobileNavBtn = document.querySelector(".mobile-menu");
var mobileNav = document.querySelector(".mobile-nav-menu")
var mobileNavExit = document.querySelector(".mobile-close-button")
var mobileNavSearch = document.querySelector(".mobile-search-icon")
var mobileNavSearchClose = document.querySelector(".search-close-button")
var mobileSearch = document.querySelector(".main-mobile-search-container")

mobileNavBtn.addEventListener("click", () => {
    mobileNav.style.display = "block"
})
mobileNavExit.addEventListener("click", () => {
    mobileNav.style.display = "none"
})

mobileNavSearch.addEventListener("click", () => {
    mobileNavSearch.style.display = "none"
    mobileNavSearchClose.style.display = "block"
    mobileSearch.style.display = "block"
})
mobileNavSearchClose.addEventListener("click", () => {
    mobileNavSearchClose.style.display = "none"
    mobileSearch.style.display = "none"
    mobileNavSearch.style.display = "block"
})

window.addEventListener("resize", () => {
    mobileNavSearchClose.style.display = "none"
    mobileSearch.style.display = "none"
    mobileNavSearch.style.display = "block"
    mobileNav.style.display = "none"
    var screenWidth = document.documentElement.clientWidth;

    if (screenWidth >= 1200) {
        mobileNavSearch.style.display = "none"
    }

})
setInterval(mapItems,100);
    function mapItems(){
        var cartList=JSON.parse(localStorage.getItem("Cart"));
         var count=0;
        cartList.map(function(element){
            count+=element.qty;
        });
         document.querySelector("#cart-item-counter").textContent=count;
    }