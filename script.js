const menuList = document.querySelector(".menuList");
const hamburgerLogo = document.querySelector(".hamburgerLogo");
const secTwo_V = document.querySelector(".secTwo_V");
const secTwoBoxMenu = document.querySelector(".secTwoBoxMenu");
const secTwoHamburger = document.querySelector(".secTwoHamburger");
const secTwoMenuList = document.querySelector(".secTwoMenuList");
const secTwoImgContainer = document.querySelector(".secTwoImgContainer");
const list = document.querySelectorAll(".list");
const itemBox = document.querySelectorAll(".itemBox");

// const secTwoAll = document.querySelector(".secTwoAll");
// const secTwoBranding = document.querySelector(".secTwoBranding");
// const secTwoIllustration = document.querySelector(".secTwoIllustration");
// const secTwoWeb = document.querySelector(".secTwoWeb");

// const boxCol1 = document.querySelector(".boxCol1");
// const boxCol2 = document.querySelector(".boxCol2");
// const boxCol3 = document.querySelector(".boxCol3");

hamburgerLogo.addEventListener("click", () => {
    menuList.classList.toggle("showMenuList");
});

secTwoHamburger.addEventListener("click", () => {
    if (secTwoMenuList.classList.contains("showSecTwoMenuList")) {
        secTwoMenuList.style.transform = "translateX(-200%)";
        secTwoMenuList.classList.remove("showSecTwoMenuList");
    } else {
        secTwoMenuList.style.transform = "translateX(0)";
        secTwoMenuList.classList.add("showSecTwoMenuList");
    }
})

// const secTwoMenuListTab = secTwoMenuList.getElementsByTagName("div");

// for (let i = 0; i < secTwoMenuListTab.length; i++) {
//     secTwoMenuListTab[i].addEventListener("click", () => {
//         secTwoMenuList.getElementsByClassName("selectColor")[0].classList.remove("selectColor");
//         secTwoMenuListTab[i].classList.add("selectColor");
//     })
// }

for (let i = 0; i < list.length; i++) {
    list[i].addEventListener("click", function() {
        for (let j = 0; j<list.length; j++) {
            list[j].classList.remove("selectColor");
        }
        this.classList.add("selectColor");

        let dataFilter = this.getAttribute("data-filter");

        for (let k = 0; k<itemBox.length; k++) {
            itemBox[k].classList.remove("selectColor");
            itemBox[k].classList.add("hide");
            secTwoImgContainer.style.justifyContent = "center";

            if(itemBox[k].getAttribute("data-item") == dataFilter || dataFilter == "all") {
                itemBox[k].classList.remove("hide");
                // itemBox[k].classList.add("selectColor");
            }
        }
    })
}

secTwo_V.addEventListener("click", () => {
    secTwoBoxMenu.classList.toggle("showSecTwoBox");
})

window.onclick = (event) => {
    if (!menuList.contains(event.target) && !hamburgerLogo.contains(event.target) && !secTwoHamburger.contains(event.target)) {
        menuList.classList.remove("showMenuList");
        secTwoBoxMenu.classList.remove("showSecTwoBox");
        // secTwoMenuList.classList.remove("showSecTwoMenuList");
        // secTwoMenuList.style.transform = "translateX(-200%)";
    }
};

menuList,secTwo_V.addEventListener("click", event => event.stopPropagation())