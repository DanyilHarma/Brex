// Настройка карусели//

$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
})
// Задание аттрибута для ссылок//

$("a").attr("target", "_blank");

// Всплывающее окно при наведении на списки в header//

$(document).ready(function () {
    $(".products-window,.solutions-window").hide();

    $(".products,.products-window").mouseenter(function () {
        $(".products-window").show();
        $(".solutions-window").hide();
    });

    $(".products-window").mouseleave(function (e) {
        if (!$(e.relatedTarget).closest(".products-window").length) {
            $(".products-window").hide();
        }
    });

    $(".menu-header").mouseenter(function () {
        if (!$(".products-window").is(":hover")) {
            $(".products-window").show();
            $(".solutions-window").hide();
        }
        if (!$(".solutions-window").is(":hover")) {
            $(".solutions-window").show();
            $(".products-window").hide();
        }
    })

    $(".solutions,.solutions-window").mouseenter(function () {
        $(".solutions-window").show();
        $(".products-window").hide();
    });

    $(".solutions-window").mouseleave(function (e) {
        if (!$(e.relatedTarget).closest(".solutions-window").length) {
            $(".solutions-window").hide();
        }
    });
});


// Замена иконок при наведении//

document.querySelectorAll(".image-window").forEach(function (elem) {
    let image = elem.querySelector("img");

    elem.addEventListener("mouseover", function () {
        let hoverSrc = image.getAttribute("data-hover");
        image.src = hoverSrc;
    })

    elem.addEventListener("mouseout", function () {
        let originalSrc = image.getAttribute("data-original");
        image.src = originalSrc;
    })
})

// Пытаюсь сделать вставку из массивов в footer//

products = ["Overview", "Business account", "Credit card", "Rewards", "Financial modeling", "Expense tracking", "Spend management", "Bill pay", "Integrations", "Brex API", "Pro access", "Security"];
company = ["About Brex", "Careers", "Contact", "Press", "Blog"];
resource = ["Help", "Status", "Privacy", "Legal agreement", "Cookie preferences"];

function arrayPush(array, classElement) {
    let list = document.createElement("ul");
    array.forEach(function (item) {
        let listLi = document.createElement("li");
        listLi.classList.add("array");
        let linkList = document.createElement("a");
        linkList.href = "#";
        linkList.textContent = item;
        listLi.appendChild(linkList);
        list.appendChild(listLi);
    })
    document.querySelector(classElement).appendChild(list);
}

arrayPush(products, ".product");
arrayPush(company, ".company");
arrayPush(resource, ".resource");
