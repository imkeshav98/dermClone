

// javascript code for Image sider starts here..

var screenWidth = document.documentElement.clientWidth;
var item1 = document.querySelector(".item-one");
var item2 = document.querySelector(".item-two")

if (screenWidth >= 430 && screenWidth < 780) {
    item1.src =
        "https://static.thcdn.com/images/large/webp/widgets/208-us/36/original-TabletBannerWeek3-4-061736.jpg";
    item2.src =
        "https://static.thcdn.com/images/large/webp/widgets/208-us/16/original-HomePageBannerEditTablet-085016.jpg";
}

if (screenWidth < 430) {
    item1.src =
        "https://static.thcdn.com/images/medium/webp/widgets/208-us/41/MobileBannerWeek3-4-061741.jpg";
    item2.src =
        "https://static.thcdn.com/images/medium/webp/widgets/208-us/23/HomepageBannerEditMobile-085023.jpg"
}

// javascript code for Image sider ends here..