// PORTFOLIO ITEM FILTER
const filterContainer = document.querySelector(".portfolio-filter"),
    filterBtn = filterContainer.children,
    totalFilterBtn = filterBtn.length,
    portfolioItems = document.querySelectorAll(".portfolio-item"),
    totalPortfolioItem = portfolioItems.length;

for (let i = 0; i < totalFilterBtn; i++) {
    filterBtn[i].addEventListener("click", function() {
        filterContainer.querySelector(".active").classList.remove("active")
        this.classList.add("active");
        const filterValue = this.getAttribute("data-filter")
        for (let k = 0; k < totalPortfolioItem; k++) {
            if (filterValue === portfolioItems[k].getAttribute("data-category")) {
                portfolioItems[k].classList.remove("hide")
                portfolioItems[k].classList.add("show")
            } else if (filterValue === "all") {
                portfolioItems[k].classList.remove("hide")
                portfolioItems[k].classList.add("show")
            } else {
                portfolioItems[k].classList.remove("show")
                portfolioItems[k].classList.add("hide")
            }
        }
    })
}



// PORTFOLIO LIGHTBOX
// const lightBox = document.querySelector(".lightbox"),
//     lightBoxImg = lightBox.querySelector(".lightbox-img"),
//     lightBoxText = lightBox.querySelector(".caption-text"),
//     lightBoxClose = lightBox.querySelector(".lightbox-close"),
//     lightBoxCounter = lightBox.querySelector(".caption-counter");
// let itemIndex = 0;
// for (let i = 0; i < totalPortfolioItem; i++) {
//     portfolioItems[i].addEventListener("click", () => {
//         itemIndex = i;
//         changeItem();
//         toggleLightbox();
//     })
// }
// function nextItem() {
//     if (itemIndex == totalPortfolioItem - 1) {
//         itemIndex = 0
//     }
//     else {
//         itemIndex++
//     }
//     changeItem()
// }
// function prevItem() {
//     if (itemIndex == 0) {
//         itemIndex = totalPortfolioItem - 1
//     }
//     else {
//         itemIndex--
//     }
//     changeItem()
// }
// function toggleLightbox() {
//     lightBox.classList.toggle("open")
// }
// function changeItem() {
//     imgSrc = portfolioItems[itemIndex].querySelector(".portfolio-img img").getAttribute("src");
//     lightBoxImg.src = imgSrc;
//     lightBoxText.innerHTML = portfolioItems[itemIndex].querySelector("h4").innerHTML;
//     lightBoxCounter.innerHTML = (itemIndex + 1) + "of" + totalPortfolioItem
// }
// lightBox.addEventListener("click", (e) => {
//     if (event.target === lightBoxClose) {
//         toggleLightbox()
//     }
// })

// COLOR PICKER

const links = document.querySelectorAll(".alternate-style")

function setActiveStyle(color) {
    for (let i = 0; i < links.length; i++) {
        if (color == links[i].getAttribute("title")) {
            links[i].removeAttribute("disabled")
        } else {
            links[i].setAttribute("disabled", "true")
        }

    }

}

// BODY SKIN

const bodySkin = document.querySelectorAll(".body-skin"),
    totalBodySkin = bodySkin.length;
for (let i = 0; i < totalBodySkin; i++) {
    bodySkin[i].addEventListener("change", () => {
        console.log(bodySkin[i]);
        if (bodySkin[i].value == "dark") {
            document.body.className = "dark"
        } else {
            document.body.className = ""
        }
    })
}
document.querySelector(".toggle-style-switcher").addEventListener("click", () => {
    document.querySelector(".style-switcher").classList.toggle("open")
})

// ASIDE NAVBAR
const nav = document.querySelector(".nav"),
    navList = nav.querySelectorAll("li"),
    allSection = document.querySelectorAll(".section")
totalNavList = navList.length;
for (let i = 0; i < totalNavList; i++) {
    const a = navList[i].querySelector("a")
    a.addEventListener("click", () => {
        removeBackSectionClass()
        for (let j = 0; j < totalNavList; j++) {
            if (navList[j].querySelector("a").classList.contains("active")) {
                addBackSectionClass(j);
            }
            navList[j].querySelector("a").classList.remove("active")
        }
        a.classList.add("active")
        showSection(a)
        if (window.innerWidth < 1200) {
            asideSectionalTogglerBtn()
        }
    })
}

function removeBackSectionClass() {
    for (let i = 0; i < allSection.length; i++) {
        allSection[i].classList.remove("back-section")
    }
}

function addBackSectionClass(num) {
    allSection[num].classList.add("back-section")
}

function showSection(element) {
    for (let i = 0; i < allSection.length; i++) {
        allSection[i].classList.remove("active")
    }
    const target = element.getAttribute("href").split("#")[1];
    document.querySelector("#" + target).classList.add("active")
}

function updateNav(element) {
    for (let i = 0; i < totalNavList; i++) {
        navList[i].querySelector("a").classList.remove("active");
        const target = element.getAttribute("href").split("#")[1];
        if (target === navList[i].querySelector("a").getAttribute("href").split("#")[1]) {
            navList[i].querySelector("a").classList.add("active")

        }
    }
}
document.querySelector(".hire-me").addEventListener("click", function() {
    const sectionIndex = this.getAttribute("data-section-index");
    showSection(this);
    updateNav(this);
    removeBackSectionClass();
    addBackSectionClass(sectionIndex);
})
const navTogglerBtn = document.querySelector(".nav-toggler"),
    aside = document.querySelector(".aside");
navTogglerBtn.addEventListener("click", asideSectionalTogglerBtn)

function asideSectionalTogglerBtn() {
    for (let i = 0; i < allSection.length; i++) {
        allSection[i].classList.toggle("open")
    }
    aside.classList.toggle("open");
    navTogglerBtn.classList.toggle("open")
}