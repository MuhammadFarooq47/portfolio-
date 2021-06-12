function modal() {
    var e = document.getElementById("myModal"),
        t = document.getElementById("myImg"),
        n = document.getElementById("img01"),
        o = document.getElementById("caption");
    (t.onclick = function () {
        (e.style.display = "block"), (n.src = "img/ui-ux.png"), (o.innerHTML = this.alt);
    }),
        (document.getElementsByClassName("close")[0].onclick = function () {
            e.style.display = "none";
        });
}
function modal2() {
    var e = document.getElementById("myModal"),
        t = document.getElementById("myImg2"),
        n = document.getElementById("img01"),
        o = document.getElementById("caption");
    (t.onclick = function () {
        (e.style.display = "block"), (n.src = "img/fruits.jpg"), (o.innerHTML = "<a href='https://www.google.com/' target='_blank'> Open </a>"), (style.innerHTML = "\n  #caption>a {\n  color: white;\n  }");
    }),
        (document.getElementsByClassName("close")[0].onclick = function () {
            e.style.display = "none";
        });
}
function modal3() {
    var e = document.getElementById("myModal"),
        t = document.getElementById("myImg3"),
        n = document.getElementById("img01"),
        o = document.getElementById("caption");
    (t.onclick = function () {
        (e.style.display = "block"), (n.src = "img/nomru.jpg"), (o.innerHTML = "<a href='https://www.google.com/' target='_blank'> Open </a>"), (style.innerHTML = "\n  #caption>a {\n  color: white;\n  }");
    }),
        (document.getElementsByClassName("close")[0].onclick = function () {
            e.style.display = "none";
        });
}
function modal4() {
    var e = document.getElementById("myModal"),
        t = document.getElementById("myImg4"),
        n = document.getElementById("img01"),
        o = document.getElementById("caption");
    (t.onclick = function () {
        (e.style.display = "block"), (n.src = "img/dashboard.jpg"), (o.innerHTML = "<a href='https://www.google.com/' target='_blank'> Open </a>"), (style.innerHTML = "\n  #caption>a {\n  color: white;\n  }");
    }),
        (document.getElementsByClassName("close")[0].onclick = function () {
            e.style.display = "none";
        });
}
function modal5() {
    var e = document.getElementById("myModal"),
        t = document.getElementById("myImg5"),
        n = document.getElementById("img01"),
        o = document.getElementById("caption");
    (t.onclick = function () {
        (e.style.display = "block"), (n.src = "img/trons.jpg"), (o.innerHTML = "<a href='https://www.google.com/' target='_blank'> Open </a>"), (style.innerHTML = "\n  #caption>a {\n  color: white;\n  }");
    }),
        (document.getElementsByClassName("close")[0].onclick = function () {
            e.style.display = "none";
        });
}
function modal6() {
    var e = document.getElementById("myModal"),
        t = document.getElementById("myImg6"),
        n = document.getElementById("img01"),
        o = document.getElementById("caption");
    (t.onclick = function () {
        (e.style.display = "block"), (n.src = "img/tea.jpg"), (o.innerHTML = "<a href='https://www.google.com/' target='_blank'> Open </a>"), (style.innerHTML = "\n  #caption>a {\n  color: white;\n  }");
    }),
        (document.getElementsByClassName("close")[0].onclick = function () {
            e.style.display = "none";
        });
}
function modal7() {
    var e = document.getElementById("myModal"),
        t = document.getElementById("myImg7"),
        n = document.getElementById("img01"),
        o = document.getElementById("caption");
    (t.onclick = function () {
        (e.style.display = "block"), (n.src = "img/sprink.jpg"), (o.innerHTML = "<a href='https://www.google.com/' target='_blank'> Open </a>"), (style.innerHTML = "\n  #caption>a {\n  color: white;\n  }");
    }),
        (document.getElementsByClassName("close")[0].onclick = function () {
            e.style.display = "none";
        });
}
function modal8() {
    var e = document.getElementById("myModal"),
        t = document.getElementById("myImg8"),
        n = document.getElementById("img01"),
        o = document.getElementById("caption");
    (t.onclick = function () {
        (e.style.display = "block"), (n.src = "img/security.png"), (o.innerHTML = "<a href='https://www.google.com/' target='_blank'> Open </a>"), (style.innerHTML = "\n  #caption>a {\n  color: white;\n  }");
    }),
        (document.getElementsByClassName("close")[0].onclick = function () {
            e.style.display = "none";
        });
}
function modal9() {
    var e = document.getElementById("myModal"),
        t = document.getElementById("myImg9"),
        n = document.getElementById("img01"),
        o = document.getElementById("caption");
    (t.onclick = function () {
        (e.style.display = "block"), (n.src = "img/tutor.png"), (o.innerHTML = "<a href='https://www.google.com/' target='_blank'> Open </a>"), (style.innerHTML = "\n  #caption>a {\n  color: white;\n  }");
    }),
        (document.getElementsByClassName("close")[0].onclick = function () {
            e.style.display = "none";
        });
}
const filterContainer = document.querySelector(".portfolio-filter"),
    filterBtn = filterContainer.children,
    totalFilterBtn = filterBtn.length,
    portfolioItems = document.querySelectorAll(".portfolio-item"),
    totalPortfolioItem = portfolioItems.length;
for (let e = 0; e < totalFilterBtn; e++)
    filterBtn[e].addEventListener("click", function () {
        filterContainer.querySelector(".active").classList.remove("active"), this.classList.add("active");
        const e = this.getAttribute("data-filter");
        for (let t = 0; t < totalPortfolioItem; t++)
            e === portfolioItems[t].getAttribute("data-category")
                ? (portfolioItems[t].classList.remove("hide"), portfolioItems[t].classList.add("show"))
                : "all" === e
                ? (portfolioItems[t].classList.remove("hide"), portfolioItems[t].classList.add("show"))
                : (portfolioItems[t].classList.remove("show"), portfolioItems[t].classList.add("hide"));
    });
const links = document.querySelectorAll(".alternate-style");
function setActiveStyle(e) {
    for (let t = 0; t < links.length; t++) e == links[t].getAttribute("title") ? links[t].removeAttribute("disabled") : links[t].setAttribute("disabled", "true");
}
const bodySkin = document.querySelectorAll(".body-skin"),
    totalBodySkin = bodySkin.length;
for (let e = 0; e < totalBodySkin; e++)
    bodySkin[e].addEventListener("change", () => {
        console.log(bodySkin[e]), "dark" == bodySkin[e].value ? (document.body.className = "dark") : (document.body.className = "");
    });
document.querySelector(".toggle-style-switcher").addEventListener("click", () => {
    document.querySelector(".style-switcher").classList.toggle("open");
});
const nav = document.querySelector(".nav"),
    navList = nav.querySelectorAll("li"),
    allSection = document.querySelectorAll(".section");
totalNavList = navList.length;
for (let e = 0; e < totalNavList; e++) {
    const t = navList[e].querySelector("a");
    t.addEventListener("click", () => {
        removeBackSectionClass();
        for (let e = 0; e < totalNavList; e++) navList[e].querySelector("a").classList.contains("active") && addBackSectionClass(e), navList[e].querySelector("a").classList.remove("active");
        t.classList.add("active"), showSection(t), window.innerWidth < 1200 && asideSectionalTogglerBtn();
    });
}
function removeBackSectionClass() {
    for (let e = 0; e < allSection.length; e++) allSection[e].classList.remove("back-section");
}
function addBackSectionClass(e) {
    allSection[e].classList.add("back-section");
}
function showSection(e) {
    for (let e = 0; e < allSection.length; e++) allSection[e].classList.remove("active");
    const t = e.getAttribute("href").split("#")[1];
    document.querySelector("#" + t).classList.add("active");
}
function updateNav(e) {
    for (let t = 0; t < totalNavList; t++) {
        navList[t].querySelector("a").classList.remove("active"), e.getAttribute("href").split("#")[1] === navList[t].querySelector("a").getAttribute("href").split("#")[1] && navList[t].querySelector("a").classList.add("active");
    }
}
document.querySelector(".hire-me").addEventListener("click", function () {
    const e = this.getAttribute("data-section-index");
    showSection(this), updateNav(this), removeBackSectionClass(), addBackSectionClass(e);
});
const navTogglerBtn = document.querySelector(".nav-toggler"),
    aside = document.querySelector(".aside");
function asideSectionalTogglerBtn() {
    for (let e = 0; e < allSection.length; e++) allSection[e].classList.toggle("open");
    aside.classList.toggle("open"), navTogglerBtn.classList.toggle("open");
}
navTogglerBtn.addEventListener("click", asideSectionalTogglerBtn);
